import React from 'react'

const AddTimeEntry = () => {
    return (
        <div>
           
            <form action="">
            <h3>Add Time Entry</h3>
                <div>
            <label htmlFor=""> Tittle</label>
            <input type="text" />
            </div>
            <div>
            <label htmlFor=""> Time</label>
            <input type="number" />
            </div>
            <button>Add Time Entry</button>
            </form>
        </div>
    )
}

export default AddTimeEntry
