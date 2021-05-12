import React, { useEffect, useState } from 'react';

//These are all componoents improts
import Vault from './vaults';
import Categories from './categories';
import Passwords from './passwords';
import Details from './details';

//Data import
//import data from '../../lib/data/dataV2.json'

export const dataProvider = React.createContext();


export default function Home() {

  const [userdata, setuserdata] = useState(0);

  useEffect(() => {
    setuserdata(0)
  }, []

  )

  return (
    <dataProvider.Provider value={userdata}>
      <main className="h-screen w-screen flex">
        {/* This should be the vault listin*/}
        <Vault />

        {/*This should be the password category column*/}
        <Categories />

        {/*	This should be the individual password listings*/}
        <Passwords />

        {/*This should give details of each password*/}
        <Details />

      </main>

      {/*<div>
        {userdata.map(post => {
          return (
            <h6>{post.folder_title}</h6>
          )
        })}
      </div>*/}
    </dataProvider.Provider>
  );
}
