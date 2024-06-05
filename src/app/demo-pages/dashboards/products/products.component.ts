import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  products = [
    {
      title:"Congelador Vertical 2 Puertas Solida",
      src:"https://www.indukitchen.com/wp-content/uploads/2019/04/congelador-vertical-2-puertas-solida.jpg",
      description:"Construcción en acero inoxidable AISI 304",
      link: "Agregar al carrito"
    },
    {
      title:"Congelador Vertical Puerta Solida",
      src:"https://www.indukitchen.com/wp-content/uploads/2019/04/congelador-vertical-puerta-solida.jpg",
      description:"Construcción en acero inoxidable AISI 304",
      link: "Agregar al carrito"
    },
    {
      title:"Estufa Industrial De 2 Puestos A Gas",
      src:"https://www.indukitchen.com/wp-content/uploads/2019/04/estufa-industrial-de-2-puestos-a-gas.jpg",
      description:"Construcción marco o cubierta en acero inoxidable.",
      link: "Agregar al carrito"
    },
    {
      title:"Estufa Industrial De 4 Puestos A Gas",
      src:"https://www.indukitchen.com/wp-content/uploads/2019/04/estufa-industrial-de-4-puestos-a-gas.jpg",
      description:"Construcción marco o cubierta en acero inoxidable.",
      link: "Agregar al carrito"
    },
    {
      title:"Freidor 1 Tanque 25 Litros A Gas",
      src:"https://www.indukitchen.com/wp-content/uploads/2019/04/freidor-1-tanque-25-litros-a-gas.jpg",
      description:"Construcción en acero inoxidable calibre 16.",
      link: "Agregar al carrito"
    },
    {
      title:"Freidor 1 Tanque 28 Litros A Gas",
      src:"https://www.indukitchen.com/wp-content/uploads/2019/04/freidor-1-tanque-28-litros-a-gas.jpg",
      description:"Construcción en acero inoxidable calibre 16.",
      link: "Agregar al carrito"
    },
    {
      title:"Freidor 2 Tanque 28 Litros A Gas",
      src:"https://www.indukitchen.com/wp-content/uploads/2019/04/freidor-2-tanque-28-litros-a-gas.jpg",
      description:"Construcción en acero inoxidable calibre 16.",
      link: "Agregar al carrito"
    },
    {
      title:"Mesa De Trabajo Refrigerada",
      src:"https://www.indukitchen.com/wp-content/uploads/2019/04/mesa-de-trabajo-refrigerada.jpg",
      description:"Construcción en acero inoxidable AISI 304",
      link: "Agregar al carrito"
    },
    {
      title:"Parrilla BBQ A Gas Sobreponer",
      src:"https://www.indukitchen.com/wp-content/uploads/2019/04/parrilla-bbq-a-gas-sobreponer.jpg",
      description:"Construcción tapa o cubierta en acero inoxidable calibre 16",
      link: "Agregar al carrito"
    },
    {
      title:"Plancha A Gas Sobreponer",
      src:"https://www.indukitchen.com/wp-content/uploads/2019/04/plancha-a-gas-sobreponer.jpg",
      description:"Construcción tapa o cubierta en acero inoxidable calibre 16",
      link: "Agregar al carrito"
    },
    {
      title:"Refrigerador Vertical Puerta Panorámica",
      src:"https://www.indukitchen.com/wp-content/uploads/2019/04/refrigerador-vertical-puerta-panoramica.jpg",
      description:"Construcción en acero inoxidable AISI 304",
      link: "Agregar al carrito"
    },
    {
      title:"Refrigerador Vertical 2 Puerta Panorámica",
      src:"https://www.indukitchen.com/wp-content/uploads/2019/04/refrigerador-vertical-2-puerta-panoramica.jpg",
      description:"Construcción en acero inoxidable AISI 304",
      link: "Agregar al carrito"
    },
    {
      title:"Refrigerador Vertical 3 Puertas Panorámica",
      src:"https://www.indukitchen.com/wp-content/uploads/2019/04/refrigerador-vertical-3-puertas-panoramico.jpg",
      description:"Construcción en acero inoxidable AISI 304",
      link: "Agregar al carrito"
    },
  ];

  constructor(
    public productosService: ProductosService
  ) { }

  ngOnInit(): void {
  }

  /*agregar(): void {
    this.productosService.agregar().subscribe(resp => {
      
    },
    error => { console.error(error) }
    );
  }*/

}
