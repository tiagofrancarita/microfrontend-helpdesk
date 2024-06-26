import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(8));




  constructor(private toast: ToastrService) { }



  ngOnInit(): void {
  }


  logar() {
    this.toast.error('Usuário ou senha inválidos', 'login');
    this.creds.email = ''
    this.creds.senha = ''
  }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid
  }
}