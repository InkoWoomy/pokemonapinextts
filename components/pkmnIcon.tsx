'use client'

import { fetchPokemonData } from "@/lib/service";
import { PokemonData } from "@/utils/pokeInterfaces";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function PkmnIcon ({ userInput } : { userInput: string }) {

    const [pkmnData, setPkmnData] = useState<PokemonData>();
    const [imgMain, setImgMain] = useState<string>("/img/substitute.png");


    useEffect(() => {
        const dataFetching = async () => {
            const fetchedPkmnData = await fetchPokemonData(userInput);
            
            setPkmnData(fetchedPkmnData);
            setImgMain(`${fetchedPkmnData?.sprites.other["official-artwork"].front_default}`); 

        } 
        dataFetching();
    }, [userInput])
    
    function capitalize(text: string)
    {
        return text && String(text[0]).toUpperCase() + String(text).slice(1);
    }

    return (
        <div className="px-4 grid-cols-2">
            <div className="px-2 bg-slate-300 border-4 border-slate-400 rounded-xl">
                <h1 id="pkmnDataDexNo">National Dex No. {pkmnData?.id}</h1>
            </div>
            <div className="flex justify-center">
                <Image src={imgMain} priority={false} alt="DefaultIcon" width={"500"} height={"500"}/>
            </div>
            <div className="grid grid-cols-2">
                <div className="col-span-2 px-2 bg-slate-300 border-4 border-slate-400 rounded-xl">
                    <h1 className="text-center " id="pkmnDataName">{capitalize(`${pkmnData?.name}`)}</h1>
                </div>
                
            </div>
            <div className="grid grid-cols-2 text-center">
                {pkmnData?.types.map((type, index: number) => (
                    <h1 key={index} className={`px-2 text-md type-${type.type.name} border-4 border-gray-400 rounded-xl capitalize`}>
                        {type.type.name}
                    </h1>
                ))}
            </div>

            
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 pt-5">
                <div className="col-start-1 pe-1">
                    <button type="button" id="cryBtn" className="bg-blue-300 border-blue-400 hover:bg-blue-500 hover:border-blue-600 border-4 rounded-3xl w-full">Cries</button> 
                </div>
                <div className="col-start-2 ps-1">
                    <button type="button" id="shinyBtn" className="bg-yellow-300 border-yellow-400 hover:bg-yellow-500 hover:border-yellow-600 border-4 rounded-3xl w-full">Shiny</button> 
                </div>
            </div>
        </div>
  );
}

