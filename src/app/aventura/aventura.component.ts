import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aventura',
  templateUrl: './aventura.component.html',
  styleUrls: ['./aventura.component.css']
})

export class AventuraComponent implements OnInit {

  filmes:any=[
    {
      imagem:'assets/aventura/aventura1.jpeg',
      descricao:'INIMIGA PERFEITA'
    },

    {
      imagem:'assets/aventura/aventura2.png',
      descricao:'A MINA'
    },

    {
      imagem:'assets/aventura/aventura3.png',
      descricao:'UM MUNDO ENCANTADO'
    },

    {
      imagem:'assets/aventura/aventura4.jpeg',
      descricao:'O HOMEM ÁGUA'
    },

    {
      imagem:'assets/aventura/aventura5.jpeg',
      descricao:'HERÓI DE DOIS MUNDOS'
    },
    
    {
      imagem:'assets/aventura/aventura6.png',
      descricao:'SHERLOCK HOLMES'
    },
    
    {
      imagem:'assets/aventura/aventura7.png',
      descricao:'ETERNOS'
    },
    
    {
      imagem:'assets/aventura/aventura8.png',
      descricao:'O BEM, O BART E O LOKI'
    },
      
    {
      imagem:'assets/aventura/aventura9.png',
      descricao:'NO LIMITE DO MUNDO'
    },
    
    {
      imagem:'assets/aventura/aventura10.png',
      descricao:'CONVENÇÃO DE BRUXAS'
    },
      
    {
      imagem:'assets/aventura/aventura11.png',
      descricao:'JUNGLE CRUISE'
    },
    
    {
      imagem:'assets/aventura/aventura12.png',
      descricao:'SPACE JAM: UM NOVO LEGADO'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
