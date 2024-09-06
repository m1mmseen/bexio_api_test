export default function SearchBar() {

    return <div className="w-full flex flex-row gap-4 py-3">
        <input className="w-3/4 rounded-md" type="text"/>
        <div className="w-1/4 flex flex-row justify-between gap-2">
            <button className="w-1/2">Filter</button>
            <button className="w-1/2">Search</button>
        </div>
    </div>

}