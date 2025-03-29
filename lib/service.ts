import { EvolutionData, LocationData, PokemonData, SpeciesData } from "@/utils/pokeInterfaces";

export async function fetchPokemonData(userInput: string | number) {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`);
    const data: PokemonData = await response.json();
    return data;
}

export async function fetchSpeciesData(fetchPath: string) {
    const response = await fetch(fetchPath);
    const data: SpeciesData = await response.json();
    return data;
}

export async function fetchLocationData(fetchPath: string) {
    const response = await fetch(fetchPath);
    const data: LocationData = await response.json();
    return data;
}

export async function fetchEvolutionData(fetchPath: string) {
    const response = await fetch(fetchPath);
    const data: EvolutionData = await response.json();
    return data
}