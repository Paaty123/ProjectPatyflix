import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentario',
  templateUrl: './documentario.component.html',
  styleUrls: ['./documentario.component.css']
})
export class DocumentarioComponent implements OnInit {

  filmes:any=[
    {
      imagem:'assets/documentario/documentario1.png',
      descricao:'TRANSAMAZÔNIA'
    },

    {
      imagem:'assets/documentario/documentario2.png',
      descricao:'O LEONARDO PERDIDO'
    },

    {
      imagem:'assets/documentario/documentario3.png',
      descricao:'NO CAMINHO DA CURA'
    },

    {
      imagem:'assets/documentario/documentario4.png',
      descricao:'SALVE A MALANDRAGEM'
    },

    {
      imagem:'assets/documentario/documentario5.jpeg',
      descricao:'PERFEITO PETE'
    },
    
    {
      imagem:'assets/documentario/documentario6.png',
      descricao:'CONFISCO'
    },
    
    {
      imagem:'assets/documentario/documentario7.png',
      descricao:'OS REIS DA FRAUDE'
    },
    
    {
      imagem:'assets/documentario/documentario8.png',
      descricao:'UM FILME DE POLICIAIS'
    },
      
    {
      imagem:'assets/documentario/documentario9.png',
      descricao:'SEXO ÀS CLARAS'
    },
    
    {
      imagem:'assets/documentario/documentario10.png',
      descricao:'ESCONDIDA'
    },
      
    {
      imagem:'assets/documentario/documentario11.png',
      descricao:'ENCONTRADAS'
    },
    
    {
      imagem:'assets/documentario/documentario12.png',
      descricao:'JUSTIN BIEBER: NOSSO MUNDO'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
