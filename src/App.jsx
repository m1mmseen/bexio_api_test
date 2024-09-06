
import {useState} from "react";
import ItemList from "./components/Items/ItemList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx"; // Zweite Komponente importieren
import { LifeBuoy, Receipt, Boxes, House } from "lucide-react";
import SidebarItem from "./components/Sidebar/SidebarItem.jsx";
import Button from "./components/helper/Button.jsx";


const App = () => {
    const [token, setToken] = useState(''); // State für den Input-Wert
    const [items, setItems] = useState([]); // State für die API-Antwort

    // Funktion für den API-Call
    const handleFetchData = async () => {
        try {
            const response = await fetch('/api/2.0/article', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            // Check if response is OK
            if (!response.ok) {
                const errorText = await response.json(); // Versuche, den Fehler als Text zu lesen
                console.error('Fehler:', errorText);
                throw new Error(`HTTP-Fehler: ${response.status}`);
            }

            // Parse response as JSON
            const data = await response.json();
            setItems(data);

        } catch (error) {
            console.error('API Call Fehler:', error);
        }
    };
    let content;

    if (items.length === 0) {
        content = (
            <div className="shadow-xl rounded-xl border-2 border-rvblue-100 p-[5rem]">
                <h2 className="text-rvblue-900 py-4 text-xl">AuthThoken eingeben</h2>
                <div className="flex gap-4">
                    <textarea
                        className="h-[15rem] w-[20rem] rounded-md border-2 border-rvblue-200 focus:outline-none focus:border-b-2 focus:border-rvblue-200 text-center"
                        placeholder="Gib dein Token ein"
                        value={token}
                        onChange={(e) => setToken(e.target.value)} // Setzt den Input-Wert
                    />
                    <Button
                        action={handleFetchData}>Daten abrufen
                    </Button>
                </div>
            </div>)
    } else {
        content = <div>
            <ItemList items={items} />
        </div>
    }

    return <>
        <Sidebar>
            <SidebarItem icon={<House  size={20} />} text="Dashboard" active/>
            <SidebarItem icon={<Receipt size={20} />} text="Billings" />
            <SidebarItem icon={<LifeBuoy size={20} />} text="Help" alert/>
            <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
        </Sidebar>
        <div className="flex flex-col h-screen w-full pt-[5rem] overflow-y-scroll">
            {content}
        </div>
    </>

};

export default App;
