import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Product } from 'app/@shared/api-interfaces';
import * as fromUser from 'app/@state/reducers';
import * as fromProduct from 'app/features/product/state/reducers';
import { cloneDeep } from 'lodash';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable, Subscription } from 'rxjs';

import { FullProperySet, RolePropertyMap } from '../role.property.map';
import { ProductActions } from '../state/actions';
import { TransferDialogComponent } from '../transfer-dialog/transfer-dialog.component';

@Component({
  selector: 'tt-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  loading$: Observable<boolean>;
  cols: any[];
  subCols: any[];
  products: Product[];
  subscriptions: Subscription[];
  partners: any[];
  isNotGrower = true;
  isWinery = false;
  constructor(
    private userStore: Store<fromUser.State>,
    private productStore: Store<fromProduct.State>,
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) {
    this.subscriptions = [];
  }

  ngOnInit() {
    this.loading$ = this.productStore.pipe(select(fromProduct.selectLoading));
    this.subscriptions.push(
      this.userStore.pipe(select(fromUser.selecUser)).subscribe((user) => {
        this.partners = user.partners;
      })
    );
    this.subscriptions.push(
      this.userStore.pipe(select(fromUser.selectRole)).subscribe((role) => {
        this.isNotGrower = role.value !== 'GROWER';
        this.isWinery = role.value === 'WINERY';
        this.cols = RolePropertyMap[role.value];
        this.subCols = FullProperySet.filter((property) => !this.cols.find((col) => col.field === property.field));
      })
    );
    this.subscriptions.push(
      this.productStore.pipe(select(fromProduct.selectAllProducts)).subscribe((products) => {
        this.products = cloneDeep(products);
      })
    );
  }

  public addEdit(id: string) {
    if (id) {
      this.productStore.dispatch(ProductActions.selectProduct({ id }));
    } else {
      this.productStore.dispatch(ProductActions.clearSelectProduct());
    }
    this.router.navigate(['../add-edit'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  openTransfer(index: number) {
    const ref = this.dialogService.open(TransferDialogComponent, {
      data: {
        partners: this.partners,
      },
      closable: false,
      header: 'Transfer Product',
      width: '600px',
    });

    this.subscriptions.push(
      ref.onClose.subscribe((values: any) => {
        if (values) {
          const selectedProduct = this.products[index];
          const ownerships = selectedProduct.ownerships;
          ownerships.push({
            date: values.transferDate.toString(),
            user: { userName: values.transferTo.id, role: values.transferTo.role.type },
          });

          const updatedProduct = { product: { changes: { ownerships, currentOwner: values.transferTo }, id: selectedProduct.id } };
          this.productStore.dispatch(ProductActions.transferProduct(updatedProduct));
        }
      })
    );
  }
}
