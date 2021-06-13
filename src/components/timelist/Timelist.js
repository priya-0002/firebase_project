import React from 'react'
import {useEffect, useState} from 'react'
import firebase from "firebase";
import { db } from "../../firebase";

const Timelist = () => {
    const[times,setTimes]=useState({})

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


    
    return (
        <div>
          <h2> Times List</h2> 
          <div>
          <label> Sort By:</label> {''}
          <select>
        <option>Time(fastest first)</option>
        <option>Time(slowest first)</option>
        <option disabled>-----</option>
        <option>Tittle(a-z)</option>
        <option>Tittle(z-a)</option>
          </select>
        </div>
        
        <ol>
            <li>
                <div className="time-entry">
                    My Tittle
                    <code className="time-entry">18 seconds</code>
                </div>

            </li>
        
        
            <li>
                <div className="time-entry">
                    Wearing Shoes
                    <code className="time-entry">89 seconds</code>
                </div>

            </li>
        
        
            <li>
                <div className="time-entry">
                    Drinking
                    <code className="time-entry">10 seconds</code>
                </div>

            </li>
        </ol>
        </div>
    )
}

export default Timelist
