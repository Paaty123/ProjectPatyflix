import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comedia',
  templateUrl: './comedia.component.html',
  styleUrls: ['./comedia.component.css']
})
export class ComediaComponent implements OnInit {

  filmes:any=[
    {
      imagem:'assets/comedia/comedia1.png',
      descricao:'O SOGRA PERFEITA'
    },

    {
      imagem:'assets/comedia/comedia2.png',
      descricao:'ESQUECERAM DE NÓS'
    },

    {
      imagem:'assets/comedia/comedia3.png',
      descricao:'DE AGORA EM DIANTE'
    },

    {
      imagem:'assets/comedia/comedia4.png',
      descricao:'AMOR SEM MEDIDA'
    },

    {
      imagem:'assets/comedia/comedia5.png',
      descricao:'GALERIA FUTURO'
    },
    
    {
      imagem:'assets/comedia/comedia6.png',
      descricao:'HEART'
    },
    
    {
      imagem:'assets/comedia/comedia7.jpeg',
      descricao:'DETETIVE MADEINUSA'
    },
    
    {
      imagem:'assets/comedia/comedia8.png',
      descricao:'A FAMÍLIA NOEL'
    },
      
    {
      imagem:'assets/comedia/comedia9.png',
      descricao:'OPERAÇÃO PORTUGAL'
    },
    
    {
      imagem:'assets/comedia/comedia10.png',
      descricao:'NOSSAS MENINAS'
    },
      
    {
      imagem:'assets/comedia/comedia11.png',
      descricao:'PEQUENO LINGUARUDO'
    },
    
    {
      imagem:'assets/comedia/comedia12.png',
      descricao:'EL MESERO'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
