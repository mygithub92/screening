import { Provider } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromAdmin from '../../state/reducers';
import { FormService } from './form.service';

export let formServiceFactory = (fb: FormBuilder, store: Store<fromAdmin.State>) => {
  return new FormService(fb, store);
};

export let formServiceProvider: Provider = {
  provide: FormService,
  useFactory: formServiceFactory,
  deps: [FormBuilder, Store]
};
