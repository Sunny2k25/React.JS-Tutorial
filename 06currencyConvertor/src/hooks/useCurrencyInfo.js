import { useEffect, useState } from "react";

//yeh hook return karega kuch data
function useCurrencyInfo(currency){
    const [data, setdata] = useState({})

    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((res) => res.json())     //yeh response ko json me convert kar lo   
        .then((res) => setdata(res[currency]))    //aur isko store karne ke liye yeh use kiya
        console.log(data);
    },[currency])
    console.log(data);

    return data
}

export default useCurrencyInfo;

//basically humne kiya kya ek functionality design kiya aur usse return kara diya

//iske baad hum dekhenge ki kaise component ko reusable banayenge