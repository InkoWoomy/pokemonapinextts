'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchEvolutionData, fetchPokemonData, fetchSpeciesData } from '@/lib/service';
import { EvolutionData, PokemonData, SpeciesData } from '@/utils/pokeInterfaces';

export default function PkmnDetails ({ userInput } : { userInput: string }) {

    const [pkmnData, setPkmnData] = useState<PokemonData>();
    const [imgInGame, setImgInGame] = useState<string>("/img/substitute.png");
    
    const [speciesData, setSpeciesData] = useState<SpeciesData>();
    const [dexEntry, setDexEntry] = useState<string>("");
    
    const [evolutionData, setEvolutionData] = useState<EvolutionData>();
    
    useEffect(() => {
        const dataFetching = async () => {
            const fetchedPkmnData = await fetchPokemonData(userInput);
            const fetchedSpeciesData = await fetchSpeciesData(fetchedPkmnData.species.url);
            const fetchedEvoData = await fetchEvolutionData(fetchedSpeciesData.evolution_chain.url);
            
            
            
            setPkmnData(fetchedPkmnData);
            setImgInGame(`${fetchedPkmnData?.sprites.other.showdown.front_default}`);
            setSpeciesData(fetchedSpeciesData);
            setEvolutionData(fetchedEvoData);
            for (let i = 0; i < fetchedSpeciesData?.flavor_text_entries.length; i++)
            {
                if (fetchedSpeciesData?.flavor_text_entries[i].language.name == "en" && fetchedSpeciesData?.flavor_text_entries[i].version.name == "x")
                {
                    setDexEntry(`${fetchedSpeciesData?.flavor_text_entries[i].flavor_text}`);
                    break;
                }
            }

            
        } 
        dataFetching();
    }, [userInput])
    
    function capitalize( text: string)
        {
            return text && String(text[0]).toUpperCase() + String(text).slice(1);
        }
        
    return (
        <div className="px-4 lg:pt-0 pt-10">
            <div className="inline-flex w-full shadow-xs" role="group">
                <button type="button" className="px-4 text-gray-900 border-4 border-slate-400 rounded-s-3xl hover:bg-blue-500 hover:text-white focus:z-10 focus:bg-blue-400 bg-white w-full">
                General
                </button>
                <button type="button" className="px-4 text-gray-900 border-t-4 border-b-4 border-slate-400 hover:bg-blue-500 hover:text-white focus:z-10 focus:bg-blue-400 bg-white w-full">
                Evolution
                </button>
                <button type="button" className="px-4 text-gray-900 border-4 border-slate-400 rounded-e-3xl hover:bg-blue-500 hover:text-white focus:z-10 focus:bg-blue-400 bg-white w-full">
                Game Data
                </button>
            </div>

            <section style={{ display: "block" }}>
                <div className="flex justify-center py-5">
                    <Image src={imgInGame} priority={false} alt="DefaultIcon" width={"400"} height={"400"}/>
                </div>

                <div className="grid grid-cols-2 relative bottom-0">
                    <div className="col-span-2 px-2 bg-slate-300 border-4 border-slate-400 rounded-xl">
                        <h1 className="text-center">{capitalize(`${speciesData?.genera[7].genus}`)}</h1>
                    </div>
                    <div className="col-start-1 pe-1 bg-slate-300 border-4 border-slate-400 rounded-xl">
                        <h1 className="text-center">Height: {pkmnData?.height}m</h1>
                    </div>
                    <div className="col-start-2 ps-1 bg-slate-300 border-4 border-slate-400 rounded-xl">
                        <h1 className="text-center">Weight: {pkmnData?.weight}g</h1>
                    </div>
                    <div className="col-span-2 ps-1 bg-slate-300 border-4 border-slate-400 rounded-xl">
                        <h1 className="text-center">{dexEntry}</h1>
                    </div>
                </div>
            </section>





            {/* <section id="pkmnDataEvolution" style={{ display: "none" }}>
                <div id="evoList" className="grid my-4">
                    <div id="basicPkmn" className="grid-cols-1">
                        {evolutionData?.chain.species.name}
                    </div>
                    <div id="stage1Pkmn" className="grid-cols-2 overflow-y-scroll">
                        {evolutionData?.chain.evolves_to.map((pkmn: any, index: any) => {
                            <h1 key={index}>{pkmn.species.name}</h1>
                        })}
                    </div>
                    <div id="stage2Pkmn" className="grid-cols-3 overflow-y-scroll">
                        
                    </div>
                </div>
            </section>
 */}




            {/* <section id="pkmnDataGame" style={{ display: "none" }}>
                <div className="grid grid-cols-2 h-auto">
                    <div className="col-span-2 my-2">
                        <h1 className="px-2 bg-slate-600 rounded-t-2xl text-white"></h1>
                        <div className="h-fit rounded-2xl">
                            <div></div>
                        </div>
                    </div>

                    <div className="col-start-1 my-2 pe-1">
                        <h1 className="px-2 bg-slate-600 rounded-t-2xl text-white"></h1>
                        <div className="overflow-y-scroll h-72 rounded-bl-2xl">
                            <div></div>
                        </div>
                    </div>
                    
                    <div className="col-start-2 my-2 ps-1">
                        <h1 className="px-2 bg-slate-600 rounded-t-2xl text-white"></h1>
                        <div className="overflow-y-scroll h-72 rounded-bl-2xl">
                            <div></div>
                        </div>
                    </div>
                </div>
            </section> */}

        </div>
  )
}
