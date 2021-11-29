import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrls: ['./romance.component.css']
})
export class RomanceComponent implements OnInit {

  filmes:any=[
    {
      imagem:'assets/romance/romance1.png',
      descricao:'NÃO DEVÍAMOS TER CRESCIDO'
    },

    {
      imagem:'assets/romance/romance2.png',
      descricao:'SEPARADAMENTE CASADOS'
    },

    {
      imagem:'assets/romance/romance3.png',
      descricao:'UM MATCH SURPRESA'
    },

    {
      imagem:'assets/romance/romance4.png',
      descricao:'NO JOGO DO AMOR'
    },

    {
      imagem:'assets/romance/romance5.png',
      descricao:'SEUS OLHOS DIZEM'
    },
    
    {
      imagem:'assets/romance/romance6.jpeg',
      descricao:'UMA PITADA DE AMOR'
    },
    
    {
      imagem:'assets/romance/romance7.jpeg',
      descricao:'FOMOS CANÇÕES'
    },
    
    {
      imagem:'assets/romance/romance8.jpeg',
      descricao:'O MELHOR AMIGO'
    },
      
    {
      imagem:'assets/romance/romance9.png',
      descricao:'AMOR A TRÊS'
    },
    
    {
      imagem:'assets/romance/romance10.jpeg',
      descricao:'LEVO VOCÊ COMIGO'
    },
      
    {
      imagem:'assets/romance/romance11.png',
      descricao:'JJ+E'
    },
    
    {
      imagem:'assets/romance/romance12.png',
      descricao:'LEMBRANÇAS'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
