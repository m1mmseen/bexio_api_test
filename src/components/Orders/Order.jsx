export default function Order({orderNr, orderTitle}) {
    return <div className="w-full cursor-pointer border-2 border-rvblue-100 rounded-lg p-2 hover:translate-x-1 hover:shadow-lg duration-300 flex flex-row justify-between h-24">
        <h4>{orderTitle}</h4>
        <p>{orderNr}</p>
    </div>
}