import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Update } from '@ngrx/entity';
import { Account, Product, RoleType, User } from 'app/@shared/api-interfaces';
import { Observable, of } from 'rxjs';

import { company, roleType } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(company);
  }

  addAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(company, account);
  }

  updateAccount(account: Account): Observable<Account> {
    return this.http.put<Account>(`${company}/${account.id}`, account);
  }

  deleteAccount(id: string): Observable<string> {
    return this.http.delete<string>(`${company}/${id}`);
  }

  getRoles(): Observable<RoleType[]> {
    return this.http.get<any>(roleType);
  }

  getAccount(id: number) {
    return this.http.get<any>(`${company}/${id}`);
  }

  getProducts(user: User): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data/products.json');
    // return this.http.get<Product[]>('assets/data/products-winery.json');
    // return this.http.get<Product[]>(product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('assets/data/products.json', product);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.put<Product>('assets/data/products.json', product);
  }

  transferProduct(updatingProduct: Update<Product>): Observable<Product> {
    return of({ id: updatingProduct.id } as any);
    // return this.http.put<Product>('assets/data/products.json', product);
  }
}
