import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  listaUsuarios: any[] = [];
  UsuariosService: any;

  constructor() { }

  ngOnInit(): void {
    this.UsuariosService.getUsuarios().subscribe(resp) => {
      console.log(resp.data(0));
    }
  }

}
