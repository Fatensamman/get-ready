export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">Start adding some items to your packing list 🚀</p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const donePercent = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {donePercent === 100
          ? "You got everything! Ready to go 💃🕺"
          : `
        
        💼 You have ${numItems} items on your list, and you already packed
        ${numPacked}
        (${donePercent}%)
        `}
      </em>
    </footer>
  );
}
