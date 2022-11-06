import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { RoleType } from 'app/@shared/api-interfaces';
import * as fromUser from 'app/@state/reducers';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';

import { FormService } from '../../services/form.service';
import { formServiceProvider } from '../../services/form.service.provider';
import { GrowerComponent } from '../grower/grower.component';
import { WineryComponent } from '../winery/winery.component';

@Component({
  selector: 'tt-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
  providers: [formServiceProvider],
})
export class AddEditProductComponent implements OnInit, OnDestroy {
  componentRef: any;
  title = 'Add Product';
  subscriptions: Subscription[];
  role: RoleType;

  @ViewChild('container', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    public formService: FormService,
    private resolver: ComponentFactoryResolver,
    private route: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService,
    private userStore: Store<fromUser.State>
  ) {
    this.subscriptions = [];
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.userStore.pipe(select(fromUser.selectRole)).subscribe((role) => {
        this.role = role;
      })
    );

    if (this.formService.isEdit) {
      this.title = 'Edit Product';
    }
    setTimeout(() => {
      this.createComponent();
    }, 0);
  }

  ngOnDestroy(): void {
    this.formService.unsubscibe();
    this.componentRef.destroy();
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  createComponent() {
    const factory = this.createFactory();
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.formService = this.formService;
  }

  createFactory() {
    switch (this.role.value) {
      case 'GROWER':
        return this.resolver.resolveComponentFactory(GrowerComponent);
      case 'WINERY':
        return this.resolver.resolveComponentFactory(WineryComponent);
      default:
        return this.resolver.resolveComponentFactory(GrowerComponent);
    }
  }

  onSave() {
    this.formService.form.markAllAsTouched();
    if (this.formService.form.valid) {
      this.formService.save();
      this.router.navigate(['../product-list'], { relativeTo: this.route });
    }
  }

  onCancel() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.router.navigate(['../product-list'], { relativeTo: this.route });
      },
    });
  }
}
