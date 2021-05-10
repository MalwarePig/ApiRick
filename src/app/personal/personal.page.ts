import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http' //Clase para hacer peticiones http

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {

  personas = [];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe(res =>{
      console.log(res);
      this.personas = res.results;
    })
  }

}
