// import { MoonIcon } from '@heroicons/react/solid'

// const handleDarkMode = () => {
//     const root = document.documentElement
//     root.classList.toggle('dark')
// }

export default function Header() {
    return (
    <header className="flex w-11/12 h-14 mt-3 mx-auto justify-evenly items-center bg-white-200 rounded-2xl">
        <h1 className="font-Mada text-4xl text-primary font-bold mt-2">Weather app</h1>
        {/* <MoonIcon onClick={handleDarkMode} className="h-7 w-7 text-secondary"/> */}
    </header>
)
}