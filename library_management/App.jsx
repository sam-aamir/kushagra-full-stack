import React, { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    { title: "The Alchemist", author: "Paulo Coelho" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddBook = () => {
    if (newBook.title.trim() && newBook.author.trim()) {
      setBooks([...books, newBook]);
      setNewBook({ title: "", author: "" });
    }
  };

  const handleRemoveBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  function BookItem({ title, author, onRemove }) {
    return (
      <li className="book-item">
        <span>
          <strong>{title}</strong> by {author}
        </span>
        <button onClick={onRemove}>Remove</button>
      </li>
    );
  }

  return (
    <div className="app-container">
      <h1>Library Management</h1>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="add-book">
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>
      <ul className="book-list">
        {filteredBooks.map((book, index) => (
          <BookItem
            key={index}
            title={book.title}
            author={book.author}
            onRemove={() => handleRemoveBook(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
