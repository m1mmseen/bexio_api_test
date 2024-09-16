export default function Button({children, action, width}) {
    return <button
        onClick={action}
        className={`bg-rvblue-400 text-rvblue-100 text-lg h-[3rem] px-4 rounded-xl hover:bg-rvblue-200 hover:text-rvblue-800 ${width}`}>
        {children}
    </button>;
}