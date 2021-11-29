import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.component.html',
  styleUrls: ['./drama.component.css']
})
export class DramaComponent implements OnInit {

  filmes:any=[
    {
      imagem:'assets/drama/drama1.png',
      descricao:'FERIDA'
    },

    {
      imagem:'assets/drama/drama2.png',
      descricao:'MADRE'
    },

    {
      imagem:'assets/drama/drama3.png',
      descricao:'SABOR DO DESEJO'
    },

    {
      imagem:'assets/drama/drama4.png',
      descricao:'ANGELO'
    },

    {
      imagem:'assets/drama/drama5.png',
      descricao:'CORAÇÃO VIOLENTO'
    },
    
    {
      imagem:'assets/drama/drama6.png',
      descricao:'AME-ME'
    },
    
    {
      imagem:'assets/drama/drama7.png',
      descricao:'A NOITE DO FOGO'
    },
    
    {
      imagem:'assets/drama/drama8.png',
      descricao:'ALBERTINA'
    },
      
    {
      imagem:'assets/drama/drama9.png',
      descricao:'PARA SEMPRE FELICIDADE'
    },
    
    {
      imagem:'assets/drama/drama10.png',
      descricao:'IDENTIDADE'
    },
      
    {
      imagem:'assets/drama/drama11.png',
      descricao:'CURRAL'
    },
    
    {
      imagem:'assets/drama/drama12.png',
      descricao:'DOMANDO O DESTINO'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
