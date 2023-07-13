import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookCreate()
{
    const [title, setTitle] = useState('');
    const { createBook } = useContext(BooksContext);

    const handleChange = (event) =>
    {
        setTitle(event.target.value);
    };
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        createBook(title);
        setTitle('');
    };

    return <div className="book-create"> 
        <h3>Add Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Book Title</label>
            <input value={title} onChange={handleChange} />
            <button className="button">Create Book</button>
        </form>

    </div>;
}

export default BookCreate;