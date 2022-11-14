import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private httpClient: HttpClient) { }
//httpclient para conversar com API

//URI = Universal Resourse Identifier - Accesing the Login resourse/user/products/princes/etc DIFFERENT FROM
//URL = Universal Resourse Localator- find a place/something on the internet
uri = "http://localhost:3000/login"

login(usuario: User):Observable<any> {
return this.httpClient.post(this.uri, JSON.stringify(usuario),{
  headers: new HttpHeaders({'Content-type': 'application/json'}),
  observe:'response'
} )

}
}
