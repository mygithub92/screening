import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/@core/services/auth.service';
import { DateUtils } from 'app/@shared/utils/date-utils';
import { APIService } from 'app/API.service';
import * as moment from 'moment';
import { MessageService } from 'primeng/api';

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"],
  providers: [MessageService],
})
export class EditProfileComponent implements OnInit {
  form: FormGroup;
  user;
  group;
  loading = true;
  firstTime = false;
  statuses = [
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
    { label: "Decline", value: "Decline" },
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: APIService,
    private fb: FormBuilder,

    private authService: AuthService,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phonenumber: [null, Validators.required],
      DOB: [null, Validators.required],
      healthCardNumber: [null, Validators.required],
      vaxxStatus: [null, Validators.required],
    });
  }

  async ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.firstTime = !!params.get("firstTime");
      if (this.firstTime) {
        this.form.addControl(
          "userAgreement",
          new FormControl(null, Validators.required)
        );
      }
    });
    this.authService
      .getCurrentAuthenticatedUser()
      .subscribe(async (user: any) => {
        console.log(user);
        this.user = user;
        const crew = await this.api.ListCrews({
          userName: { eq: this.user.username },
        });
        const name = user.attributes.name;
        const email = user.attributes.email;
        if (crew && crew.items.length) {
          const {
            phonenumber,
            DOB,
            healthCardNumber,
            userAgreement,
            vaxxStatus,
          } = crew.items[0];
          this.form.patchValue({
            phonenumber,
            DOB: DateUtils.format(DOB),
            healthCardNumber,
            userAgreement,
            vaxxStatus,
            name,
            email,
          });
        }
        this.loading = false;
      });
  }

  public isInvalid(controlName: string) {
    return (
      this.form.controls[controlName].invalid &&
      (this.form.controls[controlName].dirty ||
        this.form.controls[controlName].touched)
    );
  }

  private getDateString(dateStr) {
    const date = new Date(dateStr);
    const moment1 = moment(date);
    return moment1.toISOString();
  }

  public async save() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const userName = this.user.signInUserSession.accessToken.payload[
        "username"
      ];

      const crews = await this.api.ListCrews({
        userName: { eq: userName },
      });
      const {
        vaxxStatus,
        phonenumber,
        DOB,
        healthCardNumber,
      } = this.form.getRawValue();
      const crew = {
        DOB: this.getDateString(DOB),
        phonenumber,
        vaxxStatus,
        healthCardNumber,
      } as any;
      if (crews && crews.items.length) {
        crew.id = crews.items[0].id;
        await this.api.UpdateCrew(crew);
      } else {
        crew["name"] = this.user.attributes["name"];
        crew["email"] = this.user.attributes["email"];
        crew["userName"] = userName;
        await this.api.CreateCrew(crew);
      }
      this.messageService.add({
        key: "tst",
        severity: "success",
        summary: "Success",
        detail: "Profile updated.",
      });
    }
  }
}
