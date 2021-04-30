import React, {useContext} from 'react'
import Context from './context'

function TableRow ({book, index}) {
    const {deleteBook, editBook} = useContext(Context)
    const deleteBtnListener = () => {
        let answer = window.confirm('Are you sure')
        if (answer) {
            deleteBook(book.id)
        } 
    }
    const changeBtnListener = () => {
        editBook(book)
    }

    return (
            <tr>
                <td>{index+1}</td>
                <td>{book.author}</td>
                <td>{book.title}</td>
                <td><button onClick={deleteBtnListener} >Delete</button></td>
                <td><button onClick={changeBtnListener} >Change</button></td>
            </tr>
    )
}

export default TableRow