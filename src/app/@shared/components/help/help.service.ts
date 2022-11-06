import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  private readonly helpText = {};
  constructor() {}

  getContents(key: string) {
    return this.getContent(key);
  }

  private getContent(key: string): any {
    const nestedProperties = key.split('.');
    let value = this.helpText;
    for (const prop of nestedProperties) {
      value = value[prop];
    }
    return value;
  }
}
