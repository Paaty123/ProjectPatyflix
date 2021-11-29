import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.css']
})
export class TerrorComponent implements OnInit {

  filmes:any=[
    {
      imagem:'assets/terror/terror1.png',
      descricao:'HERDEIRO'
    },

    {
      imagem:'assets/terror/terror2.png',
      descricao:'O MAL ESTÁ LÁ FORA'
    },

    {
      imagem:'assets/terror/terror3.png',
      descricao:'THE DEEP HOUSE'
    },

    {
      imagem:'assets/terror/terror4.png',
      descricao:'INSTINTO MATERNO'
    },

    {
      imagem:'assets/terror/terror5.png',
      descricao:'ATALHO'
    },
    
    {
      imagem:'assets/terror/terror6.png',
      descricao:'EL AMARRE'
    },
    
    {
      imagem:'assets/terror/terror7.png',
      descricao:'UM LOBO ENTRE NÓS'
    },
    
    {
      imagem:'assets/terror/terror8.png',
      descricao:'A MATA NEGRA'
    },
      
    {
      imagem:'assets/terror/terror9.png',
      descricao:'QUANDO EU ERA VIVO'
    },
    
    {
      imagem:'assets/terror/terror10.png',
      descricao:'MORTO NÃO FALA'
    },
      
    {
      imagem:'assets/terror/terror11.png',
      descricao:'ESPÍRITOS OBSCUROS'
    },
    
    {
      imagem:'assets/terror/terror12.png',
      descricao:'O NINHO'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
