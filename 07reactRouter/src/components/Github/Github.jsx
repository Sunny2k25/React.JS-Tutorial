import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

    // const [data,setdata] = useState([])
    // useEffect (()=>{
    //     fetch('https://api.github.com/users/Sunny2k25')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setdata(data)
    //     })
    // },[])
  return (
    <div className=' text-center m-4 bg-gray-700 text-white p-4 text-3xl'>Github Followes: {data.followers} 
    <img className=' text-center flex-wrap' src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch ('https://api.github.com/users/Sunny2k25')
    return response.json()
}