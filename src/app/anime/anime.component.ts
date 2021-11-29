import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  filmes:any=[
    {
      imagem:'assets/anime/anime1.png',
      descricao:'THE WITCHER: A LENDA DO LOBO'
    },

    {
      imagem:'assets/anime/anime2.jpeg',
      descricao:'YOUR NAME'
    },

    {
      imagem:'assets/anime/anime3.jpeg',
      descricao:'HUMAN LOST'
    },

    {
      imagem:'assets/anime/anime4.jpeg',
      descricao:'PAPRIKA'
    },

    {
      imagem:'assets/anime/anime5.jpeg',
      descricao:'O TEMPO COM VOCÊ'
    },
    
    {
      imagem:'assets/anime/anime6.jpeg',
      descricao:'AS MEMÓRIAS DE MARNIE'
    },
    
    {
      imagem:'assets/anime/anime7.jpeg',
      descricao:'DA COLINA KOKURIKO'
    },
    
    {
      imagem:'assets/anime/anime8.jpeg',
      descricao:'O MUNDO DOS PEQUENINOS'
    },
      
    {
      imagem:'assets/anime/anime9.jpeg',
      descricao:'CONTOS DE TERRAMAR'
    },
    
    {
      imagem:'assets/anime/anime10.jpeg',
      descricao:'O CASTELO ANIMADO'
    },
      
    {
      imagem:'assets/anime/anime11.jpeg',
      descricao:'O REINO DOS GATOS'
    },
    
    {
      imagem:'assets/anime/anime12.jpeg',
      descricao:'A VIAGEM DE CHIHIRO'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
