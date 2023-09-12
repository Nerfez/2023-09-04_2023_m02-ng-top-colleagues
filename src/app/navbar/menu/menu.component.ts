import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth-service';

@Component({
  selector: 'tc-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  pseudo!: string | null;

  constructor(private auth: AuthService, private router: Router){}

  ngOnInit(): void {
    this.pseudo = this.auth.getPseudo();
  }

  isConnected(){
    return this.auth.loggedIn;
  }

  deconnexion(){
    this.auth.logout();
    this.router.navigateByUrl('');
  }
}
