import { Pipe, PipeTransform } from '@angular/core';
import { Account } from 'app/@shared/api-interfaces';

@Pipe({ name: 'accountValue' })
export class AccountValuePipe implements PipeTransform {
  transform(account: Account, field: string): string {
    switch (field) {
      case 'accountType':
        return account[field] === 1 ? 'Primary' : 'Secondary';
      case 'isActive':
        return account[field] ? 'Active' : 'Inactive';
      case 'type':
      case 'role':
        return account[field]?.label;
      default:
        return account[field];
    }
  }
}
