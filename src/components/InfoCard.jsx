import { SunIcon } from '@heroicons/react/solid'

export default function InfoCard() {
    return (
    <article className="w-11/12 py-4 bg-white-200 dark:bg-black-200 rounded-2xl mx-auto my-2 flex flex-col items-center">
        <SunIcon className='w-12 text-black-100'/>
        <h2 className="font-Mada text-3xl text-black-100 dark:text-white-100 font-medium mt-2 text-center">19C</h2>
        <h3>City</h3>
    </article>
)
}