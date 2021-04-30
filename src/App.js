import React, { useState } from 'react'
import Form from './Form'
import Table from './Table'
import Context from './context'
import EditTableRow from './EditTableRow'

function App () {

    const [books, setBooks] = React.useState(
        [
            {id:1, author: 'Pushkin', title: 'Ruslan i Ludmila'},
            {id:2, author: 'Lermontov', title: 'Hero our time'}
        ]
    )

    const [editing, setEditing] = useState(false)
    const [currentBook, setCurrentBook] = useState({ id: null, author: '', title: '' })

    function deleteBook(id) {
        setBooks(books.filter(book => book.id !== id))
    }
    function addBook(author, title) {
        setBooks(books.concat([{
            id: books.length +1,
            author: author,
            title: title
        }]))
    }
    function updateBook (newBook) {
        setBooks(books.map(book =>(book.id === newBook.id ? newBook : book )))
        setEditing(false)
    }
    function editBook (book) {
        setEditing(true)
        setCurrentBook({ id: book.id, author: book.author, title: book.title })
    }
    window.books = books

    return (
        <Context.Provider value={{deleteBook, editBook}}>
            <div>
                {editing ? (
                    <EditTableRow editing={editing} setEditing={setEditing} currentBook={currentBook} updateBook={updateBook} />
                ) : (
                    <Form onCreate={addBook} />
                )}
                <Table books={books} />
            </div>
        </Context.Provider>
    )
}

export default App