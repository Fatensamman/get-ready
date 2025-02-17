import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import "../index.css";
import PackagingList from "./PackagingList";
import Stats from "./Stats";
function App() {
  const [items, setItems] = useState([]);
  function addItemToPackage(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    const confirmed = window.confirm(
      "Are you sure? this will clear your list permenantly"
    );
    if (confirmed) {
      setItems(() => []);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItemToPackage={addItemToPackage} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
