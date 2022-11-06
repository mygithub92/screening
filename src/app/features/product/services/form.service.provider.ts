import { Provider } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromProduct from 'app/features/product/state/reducers';

import { FormService } from './form.service';

export let formServiceFactory = (fb: FormBuilder, productStore: Store<fromProduct.State>, userStore: Store<fromProduct.State>) => {
  return new FormService(fb, productStore, userStore);
};

export let formServiceProvider: Provider = {
  provide: FormService,
  useFactory: formServiceFactory,
  deps: [FormBuilder, Store, Store]
};
