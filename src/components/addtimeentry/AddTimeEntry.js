import React from 'react'
import{useState}from 'react';
import firebase from "firebase";
import { db } from "../../firebase";

const AddTimeEntry = () => {

    const[title,setTitle]=useState('')
    const[time,setTime]=useState('')

    const needTitle=(e)=>{
        
        setTitle(e.target.value)
    }

    const needTime=(e)=>{
     
        setTime(e.target.value)
    }

    const submit=(e)=>{
        e.preventDefault()
        db.collection("times").add({
            time_seconds:(time),
            title:(title),
          
            })
            .then(()=>{
                setTitle('')
                setTime('')
            }

            )

    }
    return (
        <div>
           
            <form>
            <h3>Add Time Entry</h3>
                <div>
            <label htmlFor=""> Tittle</label>
            <input type="text" onChange={needTitle}/>
            </div>
            <div>
            <label htmlFor=""> Time</label>
            <input type="number" onChange={needTime} />
            </div>
            <button  onClick={submit}>Add Time Entry</button>
            </form>
        </div>
    )
}

export default AddTimeEntry
