import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/@core/services/auth.service';
import { APIService } from 'app/API.service';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: APIService,
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    this.form = this.fb.group({
      phonenumber: [null, Validators.required],
      address: [null, Validators.required],
      companyName: [null, Validators.required],
    });
  }

  async ngOnInit() {
    this.authService
      .getCurrentAuthenticatedUser()
      .subscribe(async (user: any) => {
        console.log(user);
        this.user = user;
        const crew = await this.api.ListCrews({
          userName: { eq: this.user.username },
        });
        if (crew && crew.items.length) {
          const { phonenumber, address, companyName } = crew.items[0];
          this.form.patchValue({ phonenumber, address, companyName });
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

  public async save() {
    const userName = this.user.signInUserSession.accessToken.payload[
      "username"
    ];

    const crews = await this.api.ListCrews({
      userName: { eq: userName },
    });
    const { companyName, phonenumber, address } = this.form.getRawValue();
    const crew = {
      name: this.user.attributes["name"],
      email: this.user.attributes["email"],
      userName,
      companyName,
      phonenumber,
      address,
    } as any;
    if (crews && crews.items.length) {
      crew.id = crews.items[0].id;
      await this.api.UpdateCrew(crew);
    } else {
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
