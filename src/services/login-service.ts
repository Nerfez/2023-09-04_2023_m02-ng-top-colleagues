import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from 'src/models/login';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    getLogin(login: Login): Observable<any> {
        return this.http.post<any>('https://app-005f27d8-9033-48cc-ba69-b798464dee52.cleverapps.io/api/v2/login', login, {
            headers: new HttpHeaders({
                "Content-Type": "application/json"
            })
        });
    }


}