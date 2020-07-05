import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  buscar( termino: string ) {
    this.router.navigate(['/busqueda', termino ]);
  }

}
