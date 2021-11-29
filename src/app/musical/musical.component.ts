import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musical',
  templateUrl: './musical.component.html',
  styleUrls: ['./musical.component.css']
})
export class MusicalComponent implements OnInit {

  filmes:any=[
    {
      imagem:'assets/musical/musical1.png',
      descricao:'TICK, TICK...BOOM!'
    },

    {
      imagem:'assets/musical/musical2.png',
      descricao:'QUERIDO EVAN HANSEN'
    },

    {
      imagem:'assets/musical/musical3.png',
      descricao:'MADAME X'
    },

    {
      imagem:'assets/musical/musical4.jpeg',
      descricao:'DIANA: O MUSICAL'
    },

    {
      imagem:'assets/musical/musical5.png',
      descricao:'OS MISERÁVEIS'
    },
    
    {
      imagem:'assets/musical/musical6.png',
      descricao:'ANNETE'
    },
    
    {
      imagem:'assets/musical/musical7.jpeg',
      descricao:'NA BATIDA DO CORAÇÃO'
    },
    
    {
      imagem:'assets/musical/musical8.jpeg',
      descricao:'DESTEMIDA'
    },
      
    {
      imagem:'assets/musical/musical9.jpeg',
      descricao:'OLIVER E SUA TURMA'
    },
    
    {
      imagem:'assets/musical/musical10.jpeg',
      descricao:'FANTASIA'
    },
      
    {
      imagem:'assets/musical/musical11.jpeg',
      descricao:'UMA INVENÇÃO DE NATAL'
    },
    
    {
      imagem:'assets/musical/musical12.jpeg',
      descricao:'FANTASIA 2000'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
