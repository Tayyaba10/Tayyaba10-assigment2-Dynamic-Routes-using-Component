'use client'

import { useState } from "react";
import Australia from "./components/countries/australia";
import Canada from "./components/countries/canada";
import Mexico from "./components/countries/maxico";
import UnitedKingdom from "./components/countries/unitedKingdom";
import UnitedStates from "./components/countries/unitedState";

export default function Home() {
  const [country, setcountry] = useState<string | null >(null);

  const countryComponent = () => {
    switch (country) {
      case 'Australia':
        return <Australia/>
      case 'Canada':
        return <Canada/>;  
      case 'Mexico':
        return <Mexico/>;
      case 'UnitedKingdom':
        return <UnitedKingdom/>;
      case 'UnitedState':
        return <UnitedStates/>;      
    
    default:
        return <p className="text-center justify-center bg-red-400 mt-4 p-4">Select the country to see the detail</p>
    }
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-red-200">
      <h1 className="text-3xl font-bold mb-5 underline">Select a country</h1>
      <ul>
        <li>
          <button
          className="text-2xl text-red-950 hover:underline"
            onClick = {() => setcountry('Australia')}>
           Australia
          </button>
        </li>
        <li>
          <button
          className="text-2xl text-red-950 hover:underline"
          onClick={() => setcountry('Canada')}>
            Canada
          </button>
        </li>
        <li>
          <button
          className="text-2xl text-red-950 hover:underline"
          onClick={() => setcountry('Mexico')}>
            Mexico
          </button>
        </li>
        <li>
          <button
          className="text-2xl text-red-950 hover:underline"
          onClick={() => setcountry('UnitedKingdom')}>
            UnitedKingdom
          </button>
        </li>
        <li>
          <button
          className="text-2xl text-red-950 hover:underline"
          onClick={() => setcountry('UnitesState')}>
            Unitedstate
          </button>
        </li>
      </ul >
      <div>{countryComponent()}</div>
    </main>
  );

};
