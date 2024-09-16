import Button from "./components/helper/Button.jsx";

// eslint-disable-next-line react/prop-types
export default function Authorization({token, setToken, handleFetchData}) {
    return (
        <div className="mx-auto my-auto shadow-xl rounded-xl border-2 border-rvblue-100 p-[5rem]">
            <h2 className="text-rvblue-900 py-4 text-xl">AuthThoken eingeben</h2>
            <div className="flex flex-col gap-4">
                    <textarea
                        className="h-[15rem] w-[50rem] rounded-md border-2 border-rvblue-200 focus:outline-none focus:border-b-2 focus:border-rvblue-200 text-center"
                        placeholder="Gib deinen Token ein"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                    />
                <Button
                    width="w-[25rem]"
                    action={handleFetchData}>Daten abrufen
                </Button>
            </div>
        </div>)
}