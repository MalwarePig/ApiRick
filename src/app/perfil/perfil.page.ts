import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http' //Clase para hacer peticiones http
import { ActivatedRoute } from '@angular/router' //obter las propiedades de la url
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  perfilId: string;
  personaje;

  constructor(
    private activatedRoute : ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
   this.perfilId = this.activatedRoute.snapshot.paramMap.get('id');//Obtiene la propiedad de la url
   console.log(this.perfilId)
   this.http.get<any>('https://rickandmortyapi.com/api/character/' + this.perfilId)
   .subscribe(res =>{
     console.log(res);
      this.personaje = res;
   })
  }

}
