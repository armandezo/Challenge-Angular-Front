import { Component, OnInit } from '@angular/core';
import {FileUploadServiceService} from "../../../services/file-upload-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Usuario} from "../../../models/usuario.model";
import {UsuariosService} from "../../../services/usuarios.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
})
export class UsuarioComponent implements OnInit {

  public perfilForm!: FormGroup;
  public usuario!: Usuario;
  public imagenSubir!: File;
  public imgTemp: any;

  constructor(private router: Router, private fb:FormBuilder, public usuarioService: UsuariosService, private fileUploadService: FileUploadServiceService) {
    this.usuario = usuarioService.usuario;
  }

  ngOnInit(): void {
    this.perfilForm = this.fb.group(
      {
        nombre: [this.usuario.nombre, Validators.required],
        nickname: [this.usuario.nickname, [Validators.required]]
      }
    )
  }



  actualizarPerfil(){
    this.usuarioService.actualizarPerfil(this.perfilForm.value).subscribe({
      next: (resp) => {
        const {nombre, nickname} = this.perfilForm.value;  //actualiza en el front automaticamente la parte del usuario
        this.usuario.nombre =nombre;
        this.usuario.nickname = nickname;
        Swal.fire('Actualizado', "Se actualizo correctamente", 'success')
      }, error: (err) => {
        console.log(err)
        Swal.fire('Error', "El correo ya esta registrado", 'error')
      }
    });
  }


  cambiarImagen(event: any): any{
    let file = (event.target as HTMLInputElement).files![0];
    this.imagenSubir = file;
    if(!file){
      return this.imgTemp = null;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);    //transformar imagen de url a archivo
    reader.onloadend = () => {
      this.imgTemp = reader.result;
    }


  }

  subirImagen(){
    this.fileUploadService.actualizarFoto(this.imagenSubir, 'usuarios', this.usuario.uid!).then(img => {
      this.usuarioService.usuario = this.usuario;
      this.fileUploadService.nuevaImagen.emit(img);
       window.location.reload();
      Swal.fire('Imagen subida', 'La imagen se subio correctamente', 'success');
    }).catch(err => {
      console.log(err)
      Swal.fire('Error al subir la imagen', 'Asegurece que el archivo sea una imagen', 'error')
    })
  }





}
