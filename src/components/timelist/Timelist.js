import React from 'react'
import {useEffect, useState} from 'react'
import firebase from "firebase";
import { db } from "../../firebase";

const Timelist = () => {
    const[times,setTimes]=useState([{}])

    useEffect(() => {
       
        db.collection("times").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                const newTimes =querySnapshot.docs.map((doc)=>({ 
                    id: doc.id,
              ... doc.data()
             
                }))
                console.log(newTimes)
                setTimes(newTimes)

    
                
            });
        });
        
     
   
    
    
        
    }, [])

  
console.log(times)
    
    return (
        <div>
        
         {/* <div>
       
        <ol>
            {times.map((time)=>
        <li key={time.id}>
          {time.title}    {''} : {''}
            <code>{time.time_seconds} seconds</code>
            
        </li>
            )}
        </ol>
        
     
        </div>
    )
}

export default Timelist