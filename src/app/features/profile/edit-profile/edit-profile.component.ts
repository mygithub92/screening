import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "app/@core/services/auth.service";
import { getDOBYearRange } from "app/@shared/utils/app-utils";
import { APIService } from "app/API.service";
import { MenuService } from "app/app.menu.service";
import * as moment from "moment";
import { MessageService } from "primeng/api";

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
  showError = false;
  loading = true;
  firstTime = false;
  dobYearRange = getDOBYearRange();
  statuses = [
    { label: "Please select...", value: null },
    { label: "Yes", value: "Yes" },
    { label: "No", value: "No" },
    { label: "Decline to Answer", value: "Decline" },
  ];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: APIService,
    private fb: FormBuilder,
    private menuService: MenuService,

    private authService: AuthService
  ) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phonenumber: new FormControl(null, [
        Validators.required,
        Validators.pattern("[0-9 ]{10}"),
      ]),
      DOB: [null, Validators.required],
      healthCardNumber: null,
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
        this.user = user;
        const crew = await this.api.ListCrews({
          userName: { eq: this.user.username },
        });
        const name = user.attributes.name;
        const email = user.attributes.email;
        this.form.patchValue({
          name,
          email,
        });
        if (crew && crew.items.length) {
          const {
            phonenumber,
            DOB,
            healthCardNumber,
            userAgreement,
            vaxxStatus,
          } = crew.items[0];
          const crewValue = {
            phonenumber,
            healthCardNumber,
            userAgreement,
            vaxxStatus,
            name,
            email,
          };
          if (DOB) {
            crewValue["DOB"] = new Date(DOB);
          }
          this.form.patchValue(crewValue);
        }
        this.loading = false;
      });
  }

  public isInvalid(controlName: string) {
    return (
      this.form.controls[controlName].hasError("required") &&
      (this.form.controls[controlName].dirty ||
        this.form.controls[controlName].touched)
    );
  }

  public isInvalidPhoneNumber() {
    return (
      (this.form.controls["phonenumber"].hasError("maxlength") ||
        this.form.controls["phonenumber"].hasError("minlength")) &&
      (this.form.controls["phonenumber"].dirty ||
        this.form.controls["phonenumber"].touched)
    );
  }

  private getDateString(dateStr) {
    const date = new Date(dateStr);
    const moment1 = moment(date);
    return moment1.toISOString();
  }

  public async save() {
    this.form.markAllAsTouched();
    this.showError = !this.form.controls["phonenumber"].valid;
    if (this.form.valid && this.form.controls["phonenumber"].valid) {
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
        crew._version = crews.items[0]._version;
        await this.api.UpdateCrew(crew);
      } else {
        crew["name"] = this.user.attributes["name"];
        crew["email"] = this.user.attributes["email"];
        crew["userName"] = userName;
        const createdCrew = await this.api.CreateCrew(crew);
        this.menuService.currentCrew = createdCrew;
      }
      this.router.navigate(["main/screening"]);
    }
  }
}
