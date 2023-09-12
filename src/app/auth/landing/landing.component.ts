import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { concatMap } from 'rxjs';
import { Login } from 'src/models/login';
import { AuthService } from 'src/services/auth-service';
import { ColleagueService } from 'src/services/colleague-service';
import { LoginService } from 'src/services/login-service';

@Component({
  selector: 'tc-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  loginForm !: FormGroup;

  constructor(private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.auth.logout();
    this.loginForm = this.formBuilder.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  afficherListe() {
    alert("Pseudo utilisables : vic01, dam01, mat01, flo01, m01, n01, flo02 ,pam01, mar01, jor01, matt01, ced01");
  }

  onLogin(): void {
    let login: Login = {
      pseudo: this.loginForm.value.login,
      password: this.loginForm.value.password
    }
    this.loginService.getLogin(login).subscribe({
      next: (rep) => {
        localStorage.setItem('pseudo', this.loginForm.value.login);
        localStorage.setItem('jwt', rep.jwt);
        this.router.navigateByUrl('colleagues').then(e => { location.reload() });
      },
      error: (e) => {
        console.log('erreur; ', e)
      },
    });
  }
}