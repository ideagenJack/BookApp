import React, { useState } from 'react';
import axios from "axios";

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [filename, setFileName] = useState('');
    const [submitted, setSubmitted] = useState(false)
    const inputRef = useRef(null)
    let message;

    const handleSubmit= (e) => {
        e.preventDefault();
        if (title) {
            setSubmitted(true)
            message = "Book submitted"
            axios.post('/addBook', {
                title: title,
                author: author,
                year: year,
                file: filename
        }).then (() => {
            setSubmitted(false)
            alert(message);
        })
        setTitle('')
        setAuthor('')
        setYear('')
        inputRef.current.value = null
        
        } else {
            message = "Book title required"
            alert(message)
        };  
    }

    const onFileChange = (e) => {
        if (submitted) {
            e.target.value = null
        }
        setFileName(e.target.files[0].name)
    }

    return (
    <form onSubmit={handleSubmit} >
        <label for="title">Title:</label>
        <input placeholder="Enter book title" type="text" id="title" name="title" value={title} onChange={(e)=> {setTitle(e.target.value)}}/><br />
        <label for="author">Author:</label>
        <input placeholder="Enter author" type="text" id="author" value={author} onChange={(e)=> {setAuthor(e.target.value)}} name="author"/><br />
        <label for="year">Year:</label>
        <input placeholder="Enter year (if known)" type="text" id="year" name="year" value={year} onChange={(e)=> {setYear(e.target.value)}}/><br />
        <input type="file" onChange={onFileChange} ref={inputRef}/>
        <input type="submit" value="Submit" className="submitButton"></input>
    </form>
    )
};
export default BookForm;