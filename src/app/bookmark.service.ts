import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bookmark } from './bookmark.model';
import { CrudService } from './crud.service';

@Injectable()
export class BookmarkService extends CrudService<Bookmark, number> {

  constructor(protected _http: HttpClient) {
    super(_http, "http://localhost:8080/api/bookmark");
  }

}
