import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Electricity} from "../model/electricity";
import {Observable} from "rxjs/Observable";
import {of} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators';
import {Page} from "../model/page";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class ElectricityService {
  private url = '/api/electricityIndexStatements';

  constructor(private http: HttpClient) {
  }
  getChart() : Observable<any>{
    return this.http.get<any>(this.url+'/chart')
      .pipe(
        catchError(this.handleError('getChart', []))
      )
      ;
  }
  getAllPaginate(page: number, size:number): Observable<Page> {
    return this.http.get<Page>(this.url+'?size='+size+'&page='+page)
      .pipe(
        catchError(this.handleError<Page>('getAllPaginate'))
      )
      ;
  }

  getOne(id: number): Observable<Electricity> {
    const url = `${this.url}/${id}`;
    return this.http.get<Electricity>(url).pipe(
      catchError(this.handleError<Electricity>(`getOne id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new electricityForm to the server */
  add(electricity: Electricity): Observable<Electricity> {
    return this.http.post<Electricity>(this.url, electricity, httpOptions).pipe(
      catchError(this.handleError<Electricity>('add'))
    );
  }

  /** DELETE: delete the electricity from the server */
  delete(electricity: Electricity | number): Observable<Electricity> {
    const id = typeof electricity === 'number' ? electricity : electricity.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Electricity>(url, httpOptions).pipe(
      catchError(this.handleError<Electricity>('delete'))
    );
  }

  /** PUT: update the electricity on the server */
  update(electricity: Electricity): Observable<any> {
    return this.http.put(this.url, electricity, httpOptions).pipe(
      catchError(this.handleError<any>('update'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
