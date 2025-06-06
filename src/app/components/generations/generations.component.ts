import { Component } from '@angular/core';

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})
export class GenerationsComponent {

  public generations : string[] ;

  constructor(){
   this.generations =["Génération I","Génération II","Génération III","Génération IV","Génération V","Génération VI","Génération VII"]
  }



}
