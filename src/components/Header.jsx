import { MoonIcon } from '@heroicons/react/solid'

const handleDarkMode = () => {
    const root = document.documentElement
    root.classList.toggle('dark')
}

export default function Header() {
    return (
    <header className="flex h-14 justify-evenly items-center bg-white-200 dark:bg-black-200">
        <h1 className="font-Mada text-4xl text-primary font-bold mt-2">Weather app</h1>
        <MoonIcon onClick={handleDarkMode} className="h-7 w-7 text-secondary"/>
    </header>
)
}