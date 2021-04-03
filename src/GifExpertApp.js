import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
 // const categories = ['One Punch', 'Samuray X', 'Dragon Ball'];
 const [categories, setCategories] = useState(['One Punch'])  
 
/*  const handleAdd = () => {
    // setCategories([...categories, 'Nueva'])
     setCategories(['Nueva',...categories])
 
    } */
 
 return (
        <>
           <h2>GifExpertApp</h2> 
           <AddCategory setCategories={setCategories}></AddCategory>
           <hr/>
           <ol>
              {
                   categories.map(item => (
                       <GifGrid
                       key= {item}
                       category = {item}
                       ></GifGrid>
                   ))
              }
           </ol>
        </>
    )
}
