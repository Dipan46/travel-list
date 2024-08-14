import './App.css';
import { useState } from 'react';
import Logo from './component/Logo';
import Form from './component/Form';
import { PackingList } from './component/PackingList';
import { Stats } from './component/Stats'; 


export default function App() {
    const [items, setItems] = useState([]);

    function addItems(item) {
        setItems((items) => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems((items) =>
            items.filter(item => item.id !== id)
        );
    }

    function handleCheck(id) {
        setItems(items => items.map((item) =>
            item.id === id ? { ...item, packed: !item.packed } : item)
        );
    }
 
    function handleClear() {
        const confirmd = window.confirm("Are you sure");

        if (confirmd)
            setItems([]);
    }

    return (
        <div className="App">
            <Logo />
            <Form
                addItems={addItems}
            />
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onHandleCheck={handleCheck}
                onClearList={handleClear}
            />
            <Stats
                items={items}
            />
        </div>
    );
}
