import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/Servicio/info-pagina.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor( public infoservicio:InfoPaginaService) { }

  ngOnInit(): void {
  }

}
