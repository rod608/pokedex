export interface GeneralPokemon {
    // returned by API
    name: string;
    url: string;

    // added
    id: string;
    front_sprite: string;
}

export interface IndividualPokemon {
    // Identifiers
    id: number;
    name: string;
  
    // Important Info
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
  
    abilities: {
      is_hidden: boolean;
      slot: number;
      ability: {
        name: string;
        url: string;
      };
    }[];
  
    // Stats
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
      };
    }[];
  
    // Fun Facts
    base_experience: number;
    height: number;
    weight: number;
  
    moves: {
      move: {
        name: string;
        url: string;
      };
    }[];
  
    forms: {
      name: string;
      url: string;
    }[];

    // Images
    sprites: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
    };
}
