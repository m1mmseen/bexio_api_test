
import {useState} from "react";
import Authorization from "./Authorization.jsx";
import ItemList from "./components/Items/ItemList.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx"; // Zweite Komponente importieren
import { LifeBuoy, Receipt, Boxes, House } from "lucide-react";
import SidebarItem from "./components/Sidebar/SidebarItem.jsx";
import Dashboard from "./components/Dashboard.jsx";


const App = () => {
    const [token, setToken] = useState(''); // State für den Input-Wert
    const [items, setItems] = useState([]); // State für die API-Antwort
    const [tabContent, setTabContent] = useState("Dashboard"); //State für den gewählten Tab

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

    function handleSelectedTab(tab) {
        setTabContent(tab);
    }

    let content;

    if (items.length === 0) {
        content = <Authorization token={token} setToken={setToken} handleFetchData={handleFetchData} />
    } else {
        switch (tabContent) {
            case "Dashboard":
                content = <Dashboard/>;
                break;
            case "Inventory":
                content = <ItemList items={items} setItems={setItems} />;
                break;
            case "Billings":
                content = <p>Rechnungen (ausstehend)</p>;
                break;
            case "Help":
                content = <h2>Help needed? Ask a pro :)</h2>;
                break;
            default: content = <h2>Please select Tab</h2>

        }
    }

    return <>
        <Sidebar>
            <SidebarItem icon={<House  size={20} />} text="Dashboard" onSelectTab={handleSelectedTab} active={tabContent === 'Dashboard'}/>
            {items.length > 0 && <>
                <SidebarItem icon={<Boxes size={20} />} text="Inventory" onSelectTab={handleSelectedTab} active={tabContent === 'Inventory'}/>
                <SidebarItem icon={<Receipt size={20} />} text="Billings" onSelectTab={handleSelectedTab} active={tabContent === 'Billings'}/>
                <SidebarItem icon={<LifeBuoy size={20} />} text="Help" onSelectTab={handleSelectedTab} active={tabContent === 'Help'}/>
            </>}
        </Sidebar>
        <div className="flex flex-col h-screen w-full p-5 overflow-y-scroll">
            {content}
        </div>
    </>

};

export default App;
