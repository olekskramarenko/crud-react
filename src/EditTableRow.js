import React, { useState } from 'react'

function EditTableRow (props) {
    const [book, setBook] = useState(props.currentBook)
    function handleSubmit (evt) {
        evt.preventDefault()
        if (!book.author || !book.title ) return
        props.updateBook(book)
    }
    function handleInputChange(event) {
        const { name, value} = event.target
        setBook({ ...book, [name]: value })
    }

    return (
        <form onSubmit={handleSubmit} >
        <p>Rename book in the <b>library</b></p>
        <input type="text" name="author" value={book.author} onChange={handleInputChange} />
        <input type="text" name="title" value={book.title} onChange={handleInputChange} />
        <button type="submit" className="save-btn">Save</button>
        <button type="button" className="cancel-btn" onClick={()=> props.setEditing(false) } >Cancel</button>
    </form>
    )
}

export default EditTableRow