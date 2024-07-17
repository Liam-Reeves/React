import { useState } from "react";

const String = ()=>{

    const[username, setUsername] =useState("Unknown");

    const changeName = ()=>{
        setUsername("John Doe");
    }


    
    return(
        <>
            <h1>{username}</h1>
        <button onClick={changeName}>Change Name</button>


        </>
    );

}


export default String