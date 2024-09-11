// eslint-disable-next-line react/prop-types
export default function Decrement({children, style, onStockChange}) {
    return <button
        onClick={onStockChange}
        className={`${style} hover:scale-90`}>{children}</button>
}