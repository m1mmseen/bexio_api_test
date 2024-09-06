import Button from "../helper/Button.jsx";
import {Check} from "lucide-react";
import Decrement from "../helper/Decrement.jsx";
import Increment from "../helper/Increment.jsx";

export default function Item({item}) {
    const buttonClasses = "px-2 w-12 h-12 bg-rvblue-400 rounded-full shadow-xl text-rvblue-100 font-bold text-xl"
    return (
        <div className="flex flex-col justify-between max-w-96 p-6 shadow-xl border-2 border-rvblue-200 hover:translate-x-1 hover:border-rvblue-400 hover:duration-300 rounded-xl">
            <div className="flex flex-row justify-between py-2">
                <h2 className="font-bold text-xl w-2/3">
                    {item.intern_code}
                </h2>
                <span className="bg-rvblue-200 px-3 rounded w-1/4 text-center text-black font-bold">{item.stock_nr}</span>
            </div>
            <div className="h-16 overflow-clip">
                <p>{item.intern_name}</p>
            </div>
            <div className="flex flex-row justify-between py-2 mt-3">
                <Decrement style={buttonClasses}>-</Decrement>
                <Increment style={buttonClasses}>+</Increment>
            </div>
{/*            <div className="self-center ps-2">
                <button><Check className="hover:scale-125"/></button>
            </div>*/}
        </div>
    )
}