
export default function Search() {
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }
    return (
        <form className="w-11/12 mx-auto flex flex-col">
        <label className="font-Montserrat font-medium text-secondary text-xl mt-3" htmlFor="city">City Name</label>
        <input className="py-1.5 px-4 border-2 border-primary border-solid rounded-full mt-1 text-black-100 font-Montserrat" type="text" id="city" placeholder="Insert City"/>

        <label className="font-Montserrat font-medium text-secondary text-xl mt-3" htmlFor="country">Country Name</label>
        <input className="py-1.5 px-4 border-2 border-primary border-solid rounded-full mt-1 text-black-100 font-Montserrat" type="text" id="country" placeholder="Insert Country"/>

        <button onClick={onSubmit} className="w-2/3 mx-auto bg-primary text-white-100 rounded-full py-1.5 mt-5 mb-3 text-xl">Search</button>
        </form>
)
}