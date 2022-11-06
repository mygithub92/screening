import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'tt-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() disableBack = false;
  @Input() showNext = true;
  @Output() back = new EventEmitter();
  @Output() next = new EventEmitter();

  constructor(private router: Router, private route: ActivatedRoute, private confirmationService: ConfirmationService) {}

  ngOnInit(): void {}

  onBack() {
    if (!this.disableBack) {
      this.back.emit();
    }
  }

  onNext() {
    this.next.emit();
  }

  onCancel() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.router.navigate(['../../../account-list'], { relativeTo: this.route });
      },
    });
  }
}
