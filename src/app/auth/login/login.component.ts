import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {UsuariosService} from "../../services/usuarios.service";
import Swal from "sweetalert2";
import {LoginForm} from "../../interfaces/login-form.interface";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private fb: FormBuilder,
              private usuarioService: UsuariosService
  ) { }

  //Objeto para controlar los campos del formulario
  public loginForm = this.fb.group({
    email: [ localStorage.getItem('email') || '' , [ Validators.required, Validators.email ] ],
    password: ['', Validators.required ],
    remember: [false]
  });

  ngOnInit(): void {
  }

  login() {

    this.usuarioService.login( (this.loginForm.value as LoginForm) )
      .subscribe(
        {
          next: (resp) => {
            if (this.loginForm.get('remember')?.value) {
              localStorage.setItem('email', this.loginForm.get('email')?.value!);
            } else {
              localStorage.removeItem('email');
            }
            // Navegar al personajes
            this.router.navigateByUrl('/');
          },
          error: (err) => {
            Swal.fire('Error', 'Correo o contraseña incorrectos', 'error' );
          }
        }
      );

  }




}
