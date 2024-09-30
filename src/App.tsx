// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert.tsx";
import Button from "./components/Button.tsx";
import {useState} from "react";

function App() {
    const [alertVisible, setAlertVisible] = useState<boolean>(false);

    // let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
    //
    // const handleSelectItem = (item: string) => {
    //     console.log(item);
    // }
    //
    // return (
    //     <div>
    //         <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    //     </div>
    // );

        return (
            <div>
                { alertVisible && <Alert onClose={() => setAlertVisible(false)}>That's craaaazy</Alert> }
                <Button onClick={() => setAlertVisible(true)}>My Fancy Button</Button>
            </div>
        );
}

export default App;