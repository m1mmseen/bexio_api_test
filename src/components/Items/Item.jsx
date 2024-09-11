import {CircleCheckBig} from "lucide-react";
import Decrement from "../helper/Decrement.jsx";
import Increment from "../helper/Increment.jsx";
import { useState} from "react";

export default function Item({item}) {
    const buttonClasses = "px-2 w-12 h-12 bg-rvblue-400 rounded-full shadow-xl text-rvblue-100 font-bold text-xl"
    const [stockNr, setStockNr] = useState(item.stock_nr);

    const handleStockIncrement = () => {
        setStockNr(stockNr + 1)
    }
    const handleStockDecrement = () => {
        if(stockNr > 0) {
            setStockNr(stockNr - 1)
        }
    }


    return (
        <div className="flex flex-col justify-between max-w-96 p-6 shadow-xl border-2 border-rvblue-200 hover:translate-x-1 hover:border-rvblue-400 hover:duration-300 rounded-xl">
            <div className="flex flex-row justify-between py-2">
                <h2 className="font-bold text-xl w-2/3">
                    {item.intern_code}
                </h2>
                <button className=""><CircleCheckBig size={16}/></button>

            </div>
            <div className="h-16 overflow-clip">
            <p>{item.intern_name}</p>
            </div>
            <div className="flex flex-row justify-between py-2 mt-3">
                <Decrement style={buttonClasses} onStockChange={handleStockDecrement}>-</Decrement>
                <div className="w-24 flex justify-center items-center">
                    <span
                        className="w-full border-2 border-rvblue-400 rounded text-center p-2 focus:outline-none focus:border-2 focus:border-rvblue-700 focus:shadow-xl"
                    >
                        {stockNr}
                    </span>
                </div>
                <Increment style={buttonClasses} onStockChange={handleStockIncrement}>+</Increment>
            </div>
            {/*            <div className="self-center ps-2">
                <button><Check className="hover:scale-125"/></button>
            </div>*/}
        </div>
    )
}