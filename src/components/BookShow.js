import { useState, useContext } from "react";
import BooksContext from "../context/books";
import BookEdit from './BookEdit';

function BookShow({book, onDelete, onEdit})
{
    const [showEdit, setShowEdit] = useState(false);
    const {deleteBook} = useContext(BooksContext);

    const handleDeleteClick = () =>
    {
        onDelete(book.id);
    }

   const handleEditClick = () =>
   {
        setShowEdit(!showEdit);
   }

   const handleSubmit = () =>
   {
        setShowEdit(false);
   }

   let content = <h3>{book.title}</h3>;

   if (showEdit)
   {
        content = <BookEdit onSubmit={handleSubmit} book={book} />;
   }

    return (
        <div className="book-show">
            <div className ="action">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
            <img alt="random pic" src={`https://picsum.photos/seed/${book.id}/200`} />
            <div>{content}</div>
            
        </div>
    );
}

export default BookShow;