import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {

  public pokemons: string[];
  public nom: string;
  public type : string[];
  public category: string;
  public taille : number;
  public poids: number;

  constructor() {
    this.pokemons = [
      "001 : Bulbizarre, une graine de type plante et poison, qui mesure 70 centimètres et pèse 6,9 kilogrammes.",
      "002 : Herbizarre, une graine de type plante et poison, qui mesure 1 mètre et pèse 13 kilogrammes.",
      "003 : Florizarre, une graine de type plante et poison, qui mesure 2 mètres et pèse 100 kilogrammes.",
      "004 : Salamèche, un lézard de type feu, qui mesure 60 centimètres et pèse 8,5 kilogrammes.",
      "005 : Reptincel, une flamme de type feu, qui mesure 1,1 mètre et pèse 19 kilogrammes.",
      "006 : Dracaufeu, une flamme de type feu et vol, qui mesure 1,7 mètre et pèse 90,5 kilogrammes."
    ];
  }

  // splitPokemon(pokemon :string){
  //   const regex = /(\d+)\s*:\s*([\w-]+),\s*(.*?)\s*de\s*type\s*([\w\s]+),\s*qui\s*mesure\s*([\d,.]+)\s*(\w+)\s*et\s*pèse\s*([\d,.]+)\s*(\w+)/;
  //   const match = pokemon.match(regex);
  //
  //   if (match) {
  //     const [_, id, name, category, type, height, heightUnit, weight, weightUnit] = match;
  //
  //     console.log(`ID: ${id}`);
  //     console.log(`Nom: ${name}`);
  //     console.log(`Catégorie: ${category}`);
  //     console.log(`Type(s): ${type}`);
  //     console.log(`Taille: ${height} ${heightUnit}`);
  //     console.log(`Poids: ${weight} ${weightUnit}`);
  //   } else {
  //     console.log("Format non reconnu");
  //   }
  //
  // }

}
