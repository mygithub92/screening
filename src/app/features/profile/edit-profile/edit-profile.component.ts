import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/@core/services/auth.service';
import { APIService } from 'app/API.service';

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.scss"],
})
export class EditProfileComponent implements OnInit {
  form: FormGroup;
  user;
  group;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: APIService,
    private fb: FormBuilder,
    private authService: AuthService
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
      this.api.UpdateCrew(crew);
    } else {
      this.api.CreateCrew(crew);
    }
  }
}
