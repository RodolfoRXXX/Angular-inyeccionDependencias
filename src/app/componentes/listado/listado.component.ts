import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  peliculas: Pelicula[];
  peliculaSeleccionada: number = 0;

  constructor( private svcPeliculas:PeliculasService ) { 
    this.peliculas = [];
   }

  ngOnInit(): void {
    this.obtenerListado();
  }

  editarPelicula( id:number ){
    this.peliculaSeleccionada = id;
    console.log(this.peliculaSeleccionada);
  }

  obtenerListado(){
    this.svcPeliculas.getPeliculas()
    .subscribe( data => {   //para recibir los datos del observable debo suscribirme a éste objeto, el cual me va a entregar un array de tipo Pelicula
      console.log(data);
      this.peliculas = data;
    } )
  }

}
