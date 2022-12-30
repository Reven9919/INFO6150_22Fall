import { useState } from 'react';
import './App.css'

function Reorder({onReorder}){
   

    return(
        <div>
            <button className='reorder' onClick={() => {onReorder()}}>Reorder</button>
        </div>
    )
}

export default Reorder;