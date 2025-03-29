export interface PokemonData {
    id: number;
    name: string;
    weight: number;
    height: number;
    location_area_encounters: string;
    sprites: {
        other: {
            ["official-artwork"]: {
                front_default: string;
                front_shiny: string;
            }
            showdown: {
                front_default: string;
                front_shiny: string;
            }
            
        }
    };
    cries: {
        latest: string;
    }
    moves: {
        move: string;
    }
    species: species;
    types: type[];
    gameindices: {
        version: {

        }
    }
}

export type type = {
    slot: number;
    type: {
        name: string;
    }
}

export type species = {
    name: string;
    url: string;
}

export interface LocationData {
    location_area: {
        name: string;
    }
}

export interface SpeciesData {
    evolution_chain: {
        url: string;
    }
    flavor_text_entries: flavor_text_entries[];
    genera: genera[];
}

export type flavor_text_entries = {
    flavor_text : string;
    language: {
        name: string;
    }
    version: {
        name: string;
    }
}


export type genera = {
    genus: string[];
    language: {
        name: string;
    }
}

export interface EvolutionData { 
    chain: {
        evolves_to: chain[];
    }
}

export type chain = {
    species: {
        name: string;
        url: string;
    }
    evolves_to: chain[];
}