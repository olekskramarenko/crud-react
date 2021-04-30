import React, {useState} from 'react'


function Form ({onCreate}) {
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    
    function submitHandler (event) {
        event.preventDefault()
        onCreate(author, title)
        setAuthor('')
        setTitle('')
    }
    function cancelHandler() {
        setAuthor('')
        setTitle('')
    }
    return (
        <form onSubmit={submitHandler} >
            <p>Add new book to the <b>library</b></p>
            <input type="text" className="author-input" value={author} onChange={event => setAuthor(event.target.value)} />
            <input type="text" className="title-input" value={title} onChange={event => setTitle(event.target.value)}/>
            <button type="submit" className="send-btn">Send</button>
            <button type="button" className="cancel-btn" onClick={cancelHandler} >Cancel</button>
        </form>
    )
}

export default Form