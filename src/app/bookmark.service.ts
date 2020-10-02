import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bookmark } from './bookmark.model';
import { CrudService } from './crud.service';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService extends CrudService<Bookmark, number> {

  constructor(protected _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}/bookmarks`);
  }

}
