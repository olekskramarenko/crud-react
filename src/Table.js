import React from 'react'
import TableRow from './TableRow'
import PropTypes from 'prop-types'

function Table(props) {
    return (
        <div>
            <p>The <b>library:</b></p>
            <table className="table">

                <tbody>
                    <tr>
                        <th>#</th>
                        <th>Author</th>
                        <th>Title</th>
                    </tr>
                    {props.books.length ? props.books.map((book, index) => {
                        return <TableRow book={book} key={book.id} index={index} />
                    }) : <p>No books</p>}

                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    books: PropTypes.array.isRequired
}

export default Table