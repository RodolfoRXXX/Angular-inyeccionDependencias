import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/entidades/pelicula';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  pelicula: Pelicula;

  @Input()
  idPelicula:number;

  constructor( private svcPelicula: PeliculasService ) { }

  ngOnInit(): void {
    if(this.idPelicula){
      this.buscarPelicula( this.idPelicula );
    }
  }

  buscarPelicula( id: number ){
    this.svcPelicula.buscarPelicula( id )
    .suscribe(data => {
      this.pelicula = data;
    })
  }

}
