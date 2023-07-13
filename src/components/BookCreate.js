import { useState } from "react";

function BookCreate({onCreate})
{
    const [title, setTitle] = useState('');
    const handleChange = (event) =>
    {
        setTitle(event.target.value);
    };
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        onCreate(title);
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