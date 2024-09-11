export default function Increment({children, style, onStockChange}) {
    return <button
        onClick={onStockChange}
        className={`${style} hover:scale-110`}>{children}</button>
}