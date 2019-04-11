import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


export interface CrudOperations<T, ID> {
	save(t: T): Observable<T>;
	update(id: ID, t: T): Observable<T>;
	findOne(id: ID): Observable<T>;
	findAll(): Observable<T[]>;
	delete(id: ID): Observable<any>;
}
