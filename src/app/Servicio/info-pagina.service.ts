import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-pagina.interface';


@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

   info:infoPagina = {};
   carga: boolean = false;
   public equipo:any[] = [];

                //inyectamos a http
  constructor(private http: HttpClient) { 
    //console.log('Servicio listo para llamadas o lecturas de archivos o datos');
    this.cargarInfo();
    this.datosFirebase();
  }  
  //funcion privada para cargar info
    private cargarInfo(){
      this.http.get('assets/data/data-pagina.json').subscribe((res:infoPagina)=>{
        this.info = res;
        console.log(res);
          
      })
    }
  //funcion privada para cargar datos desde FireBase
  private datosFirebase (){
    this.http.get('https://angularapp-4414c-default-rtdb.firebaseio.com/equipo.json').subscribe((res:any)=>{
      this.equipo = res;    
      console.log(res);
    })
  }

}
