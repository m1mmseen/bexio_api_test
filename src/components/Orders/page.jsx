import Order from "./Order.jsx";

export default function Orders() {
    return <div className="flex flex-col gap-1">
        <Order orderNr="0123" orderTitle="Test Product 1" />
        <Order orderNr="0124" orderTitle="Test Product 2" />
        <Order orderNr="0125" orderTitle="Test Product 3" />
        <Order orderNr="0126" orderTitle="Test Product 4" />
        <Order orderNr="0127" orderTitle="Test Product 5" />
        <Order orderNr="0128" orderTitle="Test Product 6" />
    </div>
}