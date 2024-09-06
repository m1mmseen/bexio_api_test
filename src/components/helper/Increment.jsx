export default function Increment({children, style}) {
    return <button className={`${style} hover:scale-110`}>{children}</button>
}