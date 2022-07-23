import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Pelicula } from '../entidades/pelicula';
import { PELICULAS } from '../mock-peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  getPeliculas() : Observable<Pelicula[]>{    //El método getPeliculas nos devuelve un objeto Observable que contiene un array de objetos Pelicula(Interface)
    return new Observable( (observer:Observer<Pelicula[]>)=>{
      observer.next(PELICULAS); //next() transforma un array en un elemento dentro del observable
      observer.complete();      //cuando no necesitamos escuchar más mensajes del observer llamamos al método complete()
    } )
  }

  constructor() { }
}
