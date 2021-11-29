import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suspense',
  templateUrl: './suspense.component.html',
  styleUrls: ['./suspense.component.css']
})
export class SuspenseComponent implements OnInit {

  filmes:any=[
    {
      imagem:'assets/suspense/suspense1.png',
      descricao:'CASA GUCCI'
    },

    {
      imagem:'assets/suspense/suspense2.png',
      descricao:'A FUGA DE AKILLA'
    },

    {
      imagem:'assets/suspense/suspense3.png',
      descricao:'CORAÇÃO SANGRENTO'
    },

    {
      imagem:'assets/suspense/suspense4.png',
      descricao:'EVIDÊNCIAS DE UM CRIME'
    },

    {
      imagem:'assets/suspense/suspense5.png',
      descricao:'7 PRISIONEIROS'
    },
    
    {
      imagem:'assets/suspense/suspense6.png',
      descricao:'SURTO'
    },
    
    {
      imagem:'assets/suspense/suspense7.png',
      descricao:'ZOLA'
    },
    
    {
      imagem:'assets/suspense/suspense8.png',
      descricao:'THE GOD COMMITTEE'
    },
      
    {
      imagem:'assets/suspense/suspense9.png',
      descricao:'NO FUNDO DO POÇO'
    },
    
    {
      imagem:'assets/suspense/suspense10.png',
      descricao:'ONLY MINE'
    },
      
    {
      imagem:'assets/suspense/suspense11.png',
      descricao:'YARA'
    },
    
    {
      imagem:'assets/suspense/suspense12.png',
      descricao:'ÁGUAS RASAS'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
