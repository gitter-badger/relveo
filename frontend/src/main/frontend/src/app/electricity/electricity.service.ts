import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Electricity} from "./electricity";

@Injectable()
export class ElectricityService {
  private headers = new Headers({'Content-type': 'application/json'});
  private electricityUrl = 'api/electricityIndexStatements';

  constructor(private http: Http) {
  }

  findAll(): Promise<Electricity[]> {
    return this.http.get(this.electricityUrl)
      .toPromise().then(response => response.json().data as Electricity[])
      .catch(this.handleError);
  }

  findOne(id: number): Promise<Electricity> {
    const url = `${this.electricityUrl}/${id}`;
    return this.http.get(url)
      .toPromise().then(response => response.json().data as Electricity)
      .catch(this.handleError);
  }

  save(electricity: Electricity): Promise<Electricity> {
    return this.http.post(this.electricityUrl, JSON.stringify(electricity), {headers: this.headers})
      .toPromise().then(res => res.json().data as Electricity)
      .catch(this.handleError);
  }

  update(electricity: Electricity): Promise<Electricity> {
    const url = `${this.electricityUrl}/${electricity.id}`;
    return this.http.patch(url, JSON.stringify(electricity), {headers: this.headers})
      .toPromise().then(() => electricity)
      .catch(this.handleError);
  }

  delete(id: number): Promise<Electricity> {
    const url = `${this.electricityUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise().then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('**ERROR** : ', error);
    return Promise.reject(error.message || error);
  }
}
