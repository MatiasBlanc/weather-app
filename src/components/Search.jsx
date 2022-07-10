import { useState, useEffect } from 'react'
export default function Search() {
    const apiKey = import.meta.env.VITE_API_KEY;
    // const [city, setCity] = useState('');
    // const [userData, setUserData] = useState({});
    useEffect(() => {
      getWeatherWithFetch();
    }, []);
  
    const getWeatherWithFetch = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        const jsonData = await response.json();
        console.table(jsonData)
        // setUserData(jsonData);
        // console.log(userData)
    };
    return (
    <>
    <form onSubmit={(evt) => onSubmit(evt)} className="flex w-full px-4 bg-white-200 dark:bg-black-200 my-2">
        <input
            className="py-1.5 px-4 border-2 border-primary border-solid rounded-full mt-1 text-black-100 text-base font-Montserrat placeholder:text-black-200 dark:bg-black-100 dark:text-white-100 dark:border-secondary dark:placeholder:text-white-200"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Insert City"
            type="text"
        />
    </form>
        <article className="w-11/12 py-4 bg-white-200 dark:bg-black-200 rounded-2xl mx-auto my-2 flex flex-col items-center">
        <h2 className="font-Mada text-3xl text-black-100 dark:text-white-100 font-medium mt-2 text-center">°C</h2>
        <h3>{city}</h3>
    </article>
    </>
)
}