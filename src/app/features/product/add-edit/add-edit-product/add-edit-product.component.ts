import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: "tt-add-edit-product",
  templateUrl: "./add-edit-product.component.html",
  styleUrls: ["./add-edit-product.component.scss"],
})
export class AddEditProductComponent implements OnInit {
  title = "Add Product";
  private form: FormGroup;
  public questions = [
    "In the last 5 days, have you experienced any of these symptoms?: fever/chills, cough or barking cough, shortness of breath, decrease or loss of taste or smell, muscle aches/joint pain, extreme tiredness, sore throat, runny or stuffy/congested nose, headaches, nausea, vomiting, and/or diarrhea",
    "In the past 14 days have you been directed by a federal border agent to comply with federal quarantine requirements due to international travel?",
    "Has a doctor, health care provider, or public health unit told you that you should currently be isolating (staying at home)?",
    "In the last 5 days, have you tested positive on a rapid antigen test, molecular test, or home-based self-testing kit? Select “No” if you have already completed your isolation period of 5 days (because your symptoms started before your positive test result) and you do not have a fever and you have had no symptoms for 24 hours (48 hours for nausea, vomiting, and/or diarrhea)",
    "Do any of the following apply? You live with someone who is currently isolating because of a positive COVID-19 test. You live with someone who is currently isolating because of COVID-19 symptoms. You live with someone who is isolating while waiting for COVID-19 test results. Select “No” if you are 18 or older and have received your booster, and/or you are 17 or younger and are fully vaccinated, or you completed your isolation after testing positive in the last 90 days (using a rapid antigen, rapid molecular, or PCR test).",
    "Do you agree to 'Waiver'?",
  ];
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {
    // const controls = this.questions.map((q, i) => {
    //   return {
    //     [`question${i + 1}`]: q
    //   }
    // })
    this.form = this.fb.group({
      question1: [null, [Validators.required]],
      question2: [null, [Validators.required]],
      question3: [null, [Validators.required]],
      question4: [null, [Validators.required]],
      question5: [null, [Validators.required]],
      question6: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onSave() {}

  onCancel() {
    this.confirmationService.confirm({
      message: "Are you sure that you want to perform this action?",
      accept: () => {
        this.router.navigate(["../product-list"], { relativeTo: this.route });
      },
    });
  }
}
