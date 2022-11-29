import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NodeService {
  constructor(private http: HttpClient) {}

  getFiles() {
    return this.http
      .get<any>("assets/data/files.json")
      .toPromise()
      .then((res) => res.data as any[])
      .then((data) => data);
  }

  getFilesystem() {
    return this.http
      .get<any>("assets/data/filesystem.json")
      .toPromise()
      .then((res) => res.data as any[])
      .then((data) => data);
  }
}
