import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    logout() {
        localStorage.removeItem('pseudo');
        localStorage.removeItem('jwt');
    }

    public get loggedIn(): boolean {
        return (localStorage.getItem('pseudo') !== null);
    }

    getPseudo(): string | null {
        if (localStorage.getItem('pseudo') != null)
            return (localStorage.getItem('pseudo'));
        else {
            return '';
        }
    }

}