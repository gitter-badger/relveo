/*
 * Relveo is a Spring Boot backend with an embed Angular Frontend made for simplify calculation of everyday energy consumption.
 * Copyright (c) 2018. Andy Costanza <andy.costanza@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 *  License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>
 */

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Heating} from "../model/heating";
import {Observable} from "rxjs/Observable";
import {of} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators';
import {Page} from "../model/page";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class HeatingService {
  private url = '/api/heatingIndexStatements';

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

  getOne(id: number): Observable<Heating> {
    const url = `${this.url}/${id}`;
    return this.http.get<Heating>(url).pipe(
      catchError(this.handleError<Heating>(`getOne id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new heatingForm to the server */
  add(heating: Heating): Observable<Heating> {
    return this.http.post<Heating>(this.url, heating, httpOptions).pipe(
      catchError(this.handleError<Heating>('add'))
    );
  }

  /** DELETE: delete the heating from the server */
  delete(heating: Heating | number): Observable<Heating> {
    const id = typeof heating === 'number' ? heating : heating.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<Heating>(url, httpOptions).pipe(
      catchError(this.handleError<Heating>('delete'))
    );
  }

  /** PUT: update the heating on the server */
  update(heating: Heating): Observable<any> {
    return this.http.put(this.url, heating, httpOptions).pipe(
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
