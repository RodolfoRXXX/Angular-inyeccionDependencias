import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pelicula } from '../../entidades/pelicula';
import { PeliculasService } from '../../servicios/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input()
  id_pelicula: number;

  @Output()
  cancelar = new EventEmitter();

  pelicula: Pelicula;
  formEdicion: any;
  mostrar:boolean = false;

  constructor( private svcPelicula: PeliculasService ) { }

  ngOnInit(): void {
      this.buscarPelicula( this.id_pelicula );
  }

  onSubmit(){
    console.log(this.formEdicion.valid);
    this.mostrar = true;
  }

  cancelarEdicion(){
    this.cancelar.emit(false);
  }

  buscarPelicula( id: number ){
    this.svcPelicula.buscarPelicula( id )
    .subscribe(data => {
      this.pelicula = data;
    })
    this.formEdicion = new FormGroup ({
      titulo: new FormControl(this.pelicula.titulo,[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      genero: new FormControl(this.pelicula.genero, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      director: new FormControl(this.pelicula.director, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])
    })
  }

}

