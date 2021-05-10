import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http' //Clase para hacer peticiones http

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  personajes = [];
  constructor(
   private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe(res =>{
      console.log(res);
      this.personajes = res.results;
    })
  }

}
