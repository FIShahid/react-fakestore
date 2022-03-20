import React, { useState } from 'react';

const Test = ({props}) => {
    const [count, setCount] =useState(0)

    // const plus = ()=>{
    //     setCount(count+1)
    // }
    // const minus = () =>{
    //     setCount(count-1)
    // }
    //console.log(count);
    return (
        <div className='count mt-5'>
            <h1>Count : {count}</h1>
            <button onClick={()=>setCount(count+1)} className='p-3 ms-3 bg-success text-white fw-bold rounded'>+</button>
            <button onClick={()=>setCount(count-1)} className='p-3 ms-3 bg-danger text-white fw-bold rounded'>-</button>


        </div>
    );
};

export default Test;