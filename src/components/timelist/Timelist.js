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
          <label> Sort By:</label> {''}
          <select>
        <option>Time(fastest first)</option>
        <option>Time(slowest first)</option>
        <option disabled>-----</option>
        <option>Tittle(a-z)</option>
        <option>Tittle(z-a)</option>
          </select>
         </div>*/}
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