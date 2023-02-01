import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable, tap} from 'rxjs';
import {UsuariosService} from "../services/usuarios.service";

@Injectable({
  providedIn: 'root'
})

//No permite ingresar a usuarios no registrados
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private usuarioService: UsuariosService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    return this.usuarioService.validarToken()
      .pipe(
        tap( estaAutenticado =>  {
          if ( !estaAutenticado ) {
            this.router.navigateByUrl('auth/login');
          }
        })
      );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.usuarioService.validarToken()
      .pipe(
        tap( estaAutenticado =>  {
          if ( !estaAutenticado ) {
            this.router.navigateByUrl('auth/login');
          }
        })
      );
  }
}
