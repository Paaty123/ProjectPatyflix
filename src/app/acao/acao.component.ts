import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.css']
})
export class AcaoComponent implements OnInit {

  filmes:any=[
    {
      imagem:'assets/acao/acao1.jpg',
      descricao:'O MESTRE INVENCÍVEL'
    },

    {
      imagem:'assets/acao/acao2.jpg',
      descricao:'O PROFISSIONAL'
    },

    {
      imagem:'assets/acao/acao3.jpg',
      descricao:'VELOZES E FURIOSOS 8'
    },

    {
      imagem:'assets/acao/acao4.jpg',
      descricao:'A NOITE NOS PERSEGUE'
    },

    {
      imagem:'assets/acao/acao5.jpg',
      descricao:'MAD MAX'
    },
    
    {
      imagem:'assets/acao/acao6.jpg',
      descricao:'O PROTETOR'
    },
    
    {
      imagem:'assets/acao/acao7.jpg',
      descricao:'O FUGITIVO'
    },
    
    {
      imagem:'assets/acao/acao8.png',
      descricao:'O ASSASSINO AMERICANO'
    },
      
    {
      imagem:'assets/acao/acao9.png',
      descricao:'CHAMADA EXPLOSIVA'
    },
    
    {
      imagem:'assets/acao/acao10.jpeg',
      descricao:'A MENSAGEIRA'
    },
      
    {
      imagem:'assets/acao/acao11.png',
      descricao:'O ÚLTIMO DUELO'
    },
    
    {
      imagem:'assets/acao/acao12.jpeg',
      descricao:'VENOM: TEMPO DE CARNIFICINA'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
