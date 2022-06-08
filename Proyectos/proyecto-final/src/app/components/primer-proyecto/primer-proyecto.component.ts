import { Component} from '@angular/core';


@Component({
  selector: 'app-primer-proyecto',
  templateUrl: './primer-proyecto.component.html',
  styleUrls: ['./primer-proyecto.component.scss']
})
export class PrimerProyectoComponent {


    title = 'maquetacion-2';
    datos : any[] = [
      {
          "id": "20331",
          "referencia": "861018",
          "marca_codigo": "GSP",
          "marca_nombre": "GSP",
          "marca_logo": "https://logistics.beateam.es/azurglobal/storage/225/GSP.png",
          "descripcion": "GSP JUNTA HOMOCINETICA SEAT",
          "seccion": "MECANICA",
          "familia": "JUNTAS HOMOCINETICAS",
          "lote": "1",
          "fecha_sincronizacion": "2021-09-22 10:27:05",
          "imagen_producto": "https://digital-assets.tecalliance.services/images/800/acf76bfefaf5a938ec10cfd50b8839b4926b75bb.jpg"
      },
      {
          "id": "21902",
          "referencia": "MM00246",
          "marca_codigo": "JAP",
          "marca_nombre": "JAPANPARTS",
          "marca_logo": "https://logistics.beateam.es/azurglobal/storage/232/JAP.png",
          "descripcion": "JAPAN AMORT. DEL IZQ-DER",
          "seccion": "SUSPENSIONES Y DIRECCIONES",
          "familia": "AMORTIGUADORES SUSPENSION",
          "lote": "1",
          "fecha_sincronizacion": "2021-08-05 14:48:30",
          "imagen_producto": "https://digital-assets.tecalliance.services/images/800/bc01e98d36fdf08ef78cf7c6f396cd192f3e4f81.jpg"
      },
      {
          "id": "90067",
          "referencia": "40675",
          "marca_codigo": "FAE",
          "marca_nombre": "FAE",
          "marca_logo": "https://logistics.beateam.es/azurglobal/storage/216/FAE.png",
          "descripcion": "FAE INTERRUPTOR DE LUZ MARCHA ATRÁS",
          "seccion": "ELECTRICIDAD",
          "familia": "MONOCONTACTOS",
          "lote": "5",
          "fecha_sincronizacion": "2021-09-16 09:50:20",
          "imagen_producto": "https://digital-assets.tecalliance.services/images/800/544c3136aaefaf67e608c149ef24c91024de3e8d.jpg"
      },
      {
          "id": "104493",
          "referencia": "6213570",
          "marca_codigo": "VIL",
          "marca_nombre": "VILLAR",
          "marca_logo": "https://logistics.beateam.es/azurglobal/storage/277/VIL.png",
          "descripcion": "BOMBA FRENO - MASTER",
          "seccion": "FRENOS",
          "familia": "BOMBAS DE FRENO",
          "lote": "1",
          "fecha_sincronizacion": "2021-09-01 10:54:50",
          "imagen_producto": "https://digital-assets.tecalliance.services/images/800/93dde2b1a6b538b40cf0c6ba9d69cf843669594e.jpg"
      },
      {
          "id": "146212",
          "referencia": "6PK1217",
          "marca_codigo": "DAY",
          "marca_nombre": "DAYCO",
          "marca_logo": "https://logistics.beateam.es/azurglobal/storage/212/DAY.png",
          "descripcion": "DAYCO PK AUTO",
          "seccion": "MECANICA",
          "familia": "CORREA ACANALADA",
          "lote": "1",
          "fecha_sincronizacion": "2022-02-03 09:18:34",
          "imagen_producto": "https://digital-assets.tecalliance.services/images/800/a3b31ed814c1025caad8b69fa0dd4fd4ec85311a.jpg"
      },
      {
          "id": "195548",
          "referencia": "573313CH",
          "marca_codigo": "CHA",
          "marca_logo": "https://logistics.beateam.es/azurglobal/storage/206/CHA.png",
          "marca_nombre": "CHAMPION",
          "descripcion": "Juego de pastillas de freno",
          "seccion": "FRENOS",
          "familia": "PASTILLAS DE FRENOS",
          "lote": "4",
          "fecha_sincronizacion": "2020-05-13 18:12:31",
          "imagen_producto": "https://digital-assets.tecalliance.services/images/800/7780649eee33cd5b48631555f41f074611fa8f63.jpg"
      },
      {
          "id": "248985",
          "referencia": "KX398",
          "marca_codigo": "MAH",
          "marca_nombre": "MAHLE",
          "marca_logo": "https://logistics.beateam.es/azurglobal/storage/239/MAH.png",
          "descripcion": "FILTRO DE COMBUSTIBLE",
          "seccion": "FILTROS",
          "familia": "FILTROS DE COMBUSTIBLE",
          "lote": "1",
          "fecha_sincronizacion": "2021-03-24 11:42:06",
          "imagen_producto": "https://digital-assets.tecalliance.services/images/800/1a8ea6da7a3dbc88c6fa21963ee8e0c421cfa031.jpg"
      },
      {
          "id": "303682",
          "referencia": "KB65118",
          "marca_codigo": "SNR",
          "marca_nombre": "SNR",
          "marca_logo": "https://logistics.beateam.es/azurglobal/storage/269/SNR.png",
          "descripcion": "Kit reparación, apoyo columna amortiguación",
          "seccion": "SUSPENSIONES Y DIRECCIONES",
          "familia": "KIT RODAMIENTOS SUSPENSION",
          "lote": "1",
          "fecha_sincronizacion": "2020-05-14 09:55:03",
          "imagen_producto": "https://digital-assets.tecalliance.services/images/800/d9b8c16b0fe47b00d4e0ad42f2ad2ae558e484ea.jpg"
      },
      {
          "id": "436222",
          "referencia": "GDB1904",
          "marca_codigo": "TRW",
          "marca_nombre": "TRW",
          "marca_logo": "https://logistics.beateam.es/azurglobal/storage/273/TRW.png",
          "descripcion": "PASTILLAS DE FRENO",
          "seccion": "FRENOS",
          "familia": "PASTILLAS DE FRENOS",
          "lote": "2",
          "fecha_sincronizacion": "2021-02-21 19:23:49",
          "imagen_producto": "https://digital-assets.tecalliance.services/images/800/078b5c54726850196e80b186d1aea7404fe060d4.jpg"
      },
      {
          "id": "612586",
          "referencia": "48316",
          "marca_codigo": "NRF",
          "marca_nombre": "NRF",
          "marca_logo": "https://logistics.beateam.es/azurglobal/storage/255/NRF.png",
          "descripcion": "MODULO AGR",
          "seccion": "TERMICO",
          "familia": "DESPIECE Y COMPONENTES TERMICO",
          "lote": "1",
          "fecha_sincronizacion": "2021-05-26 10:26:43",
          "imagen_producto": "https://digital-assets.tecalliance.services/images/800/39cb94a2d7e7a818185fbccbde0a3cb7f43457bb.jpg"
      },
      {
          "id": "616748",
          "referencia": "620323700",
          "marca_codigo": "LUK",
          "marca_nombre": "LUK",
          "marca_logo": "https://logistics.beateam.es/azurglobal/storage/238/LUK.png",
          "descripcion": "REPSET",
          "seccion": "MECANICA",
          "familia": "KIT EMBRAGUE",
          "lote": "1",
          "fecha_sincronizacion": "2021-12-27 09:49:12",
          "imagen_producto": "https://digital-assets.tecalliance.services/images/800/918af68b45f7eefa381c3e9a8fbcd9656217531c.jpg"
      },
      {
          "id": "681448",
          "referencia": "182269",
          "marca_codigo": "ICE",
          "marca_nombre": "ICER",
          "marca_logo": "https://logistics.beateam.es/azurglobal/storage/321/Logo_Icer_web.png",
          "descripcion": "ICER JGO. PASTILLAS DE FRENO",
          "seccion": "FRENOS",
          "familia": "PASTILLAS DE FRENOS",
          "lote": "4",
          "fecha_sincronizacion": "2020-05-14 00:31:35",
          "imagen_producto": "https://digital-assets.tecalliance.services/images/800/2571d0c29d359cc4926ce6d5c65ba2832290ca1f.png"
      },
      {
          "id": "785199",
          "referencia": "ADG02392",
          "marca_codigo": "BLU",
          "marca_nombre": "BLUE PRINT",
          "marca_logo": "https://logistics.beateam.es/azurglobal/storage/296/BLUE-PRINT.png",
          "descripcion": "FILTRO DE CARBURANTE",
          "seccion": "FILTROS",
          "familia": "FILTROS DE COMBUSTIBLE",
          "lote": "1",
          "fecha_sincronizacion": "2021-03-16 11:33:19",
          "imagen_producto": "https://digital-assets.tecalliance.services/images/800/1aa875a9b5f5823afeb60f2ab1719afc02ca2dee.jpg"
      },
      {
          "id": "1550343",
          "referencia": "JT1858",
          "marca_codigo": "RYM",
          "marca_nombre": "RYMEC",
          "marca_logo": "https://logistics.beateam.es/azurglobal/storage/359/Rymec.png",
          "descripcion": "RYMEC KIT DE EMBRAGUE",
          "seccion": "MECANICA",
          "familia": "KIT EMBRAGUE",
          "lote": "1",
          "fecha_sincronizacion": "2021-12-07 14:16:54",
          "imagen_producto": "https://static.catalogorecambios.com/img/productos-custom/RYM/RYMJT1858_01.jpg"
      }
      ];
    producto_Mostrar:any = this.datos[2];
    valorBuscador='';
    
    filtro_Productos:any = this.datos;
  
    buscar(){
      let palabra: string = this.valorBuscador;
      this.filtro_Productos= [];
      console.log(palabra);
  
      if(palabra){
        for (var val of this.datos) {
          if (val.referencia.indexOf(palabra)>0){
            this.filtro_Productos.push(val)
          }
        }
      }
      else{
        this.filtro_Productos=this.datos;
      }
    }
  
    mostrarDato(){
      console.log("MOSTRAR DATO")
      console.log(this.producto_Mostrar);
    }
  
    muestraProducto(index:number){
      this.producto_Mostrar = this.filtro_Productos[index];
    }
  
  }