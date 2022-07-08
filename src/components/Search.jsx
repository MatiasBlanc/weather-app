import { useState } from 'react'

export default function Search() {
    const apiKey = '13f7ba95fc1a4e708a2171901222506';
    const [city, setCity] = useState('')
    const [temp, setTemp] = useState({})
    let tempC = !temp ? parseInt(temp.temp - 273.15) : 0;
    function onSubmit (evt) {
        evt.preventDefault();
        if (!city) return;
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => setTemp(data.main))
        .catch(err => console.error(err))
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
        <h2 className="font-Mada text-3xl text-black-100 dark:text-white-100 font-medium mt-2 text-center">{tempC}°C</h2>
        <h3>{city}</h3>
    </article>
    </>
)
}