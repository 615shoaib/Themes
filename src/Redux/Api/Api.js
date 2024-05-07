import React from 'react'
import { apikesy } from './apikesy'


export const ProductsApi = async() => {

try {
    const APIDATA = await fetch('https://whatshopify.vercel.app/products',{
      method: "GET",
     
    })
    if(!APIDATA){
      throw('error messahe')
    }
    return await APIDATA.json()
} catch (error) {
    console.log(`error message dispaly ${error.message}`)
} 
}
