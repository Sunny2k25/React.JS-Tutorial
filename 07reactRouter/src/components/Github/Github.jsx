import React, { useEffect, useState } from 'react'

function Github() {

    const [data,setdata] = useState([])
    useEffect (()=>{
        fetch('https://api.github.com/users/Sunny2k25')
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            setdata(data)
        })

    },[])
  return (
    <div className=' text-center m-4 bg-gray-700 text-white p-4 text-3xl'>Github Followes: {data.followers} </div>
  )
}

export default Github