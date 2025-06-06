import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {

  public pokemons: { id: string; nom: string; type: string[]; category: string; taille: number; poids: number }[] = [];

  constructor() {
    this.addPokemon();
  }

  addPokemon() {
    this.pokemons.push({
      id: "001",
      nom: "Bulbizarre",
      type: ["plante", "poison"],
      category: "graine",
      taille: 0.70,
      poids: 6.9
    });

    this.pokemons.push({
      id: "002",
      nom: "Herbizarre",
      type: ["plante", "poison"],
      category: "graine",
      taille: 1.0,
      poids: 13.0
    });

    this.pokemons.push({
      id: "003",
      nom: "Florizarre",
      type: ["plante", "poison"],
      category: "graine",
      taille: 2.0,
      poids: 100.0
    });

    this.pokemons.push({
      id: "004",
      nom: "Salamèche",
      type: ["feu"],
      category: "lézard",
      taille: 0.60,
      poids: 8.5
    });

    this.pokemons.push({
      id: "005",
      nom: "Reptincel",
      type: ["feu"],
      category: "flamme",
      taille: 1.1,
      poids: 19.0
    });

    this.pokemons.push({
      id: "006",
      nom: "Dracaufeu",
      type: ["feu", "vol"],
      category: "flamme",
      taille: 1.7,
      poids: 90.5
    });
  }


}
