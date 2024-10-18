import "./book.css";
export default function ({ book }) {
  const { id, name, price } = book;
  return (
    <div className="book">
      <h3>Book id: {id}</h3>
      <p>Book Name: {name}</p>
      <p>Book price: {price}</p>
    </div>
  );
}
