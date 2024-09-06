export default function Button({children, action}) {
    return <button
        onClick={action}
        className="bg-rvblue-400 text-rvblue-900 h-[3rem] px-4 rounded-xl hover:bg-rvblue-200 hover:text-rvblue-800">
        {children}
    </button>;
}