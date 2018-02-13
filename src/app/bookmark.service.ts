import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Bookmark } from './bookmark.model';
import { CrudService } from './crud.service';

@Injectable()
export class BookmarkService extends CrudService<Bookmark, number> {

  constructor(http: Http) {
    super("http://localhost:8080/api/bookmark", http);
  }

}
