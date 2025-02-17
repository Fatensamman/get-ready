import { useState } from "react";
import "./index.css";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Charger", quantity: 1, packed: true },
//   { id: 3, description: "T-shirt", quantity: 3, packed: false },
// ];
function App() {
  const [items, setItems] = useState([]);
  function addItemToPackage(item) {
    setItems(() => [...items, item]);
  }
  return (
    <div className="app">
      <Logo />
      <Form addItemToPackage={addItemToPackage} />
      <PackagingList items={items} />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>🏝️ get ready 🧳</h1>;
}
function Form({ addItemToPackage }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleAddItem(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description: description,
      quantity: quantity,
      id: Date.now(),
      passed: false,
    };
    console.log(newItem);
    addItemToPackage(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleAddItem}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="add Item ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>add</button>
    </form>
  );
}
function PackagingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have 3 items on your list, and you already packed 2 (67%)</em>
    </footer>
  );
}
export default App;
