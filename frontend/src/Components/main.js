// import react from "react";

import { useState, useRef } from "react";
import axios from "axios";


const Main = () => {
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
        }).then ((response) => {
            console.log(message)
            setSubmitted(false)
        })
        
        setTitle('')
        setAuthor('')
        setYear('')
        inputRef.current.value = null
        
        } else {
            alert("Enter title")
            console.log(message);
        };  
    }

    const onFileChange = (e) => {
        if (submitted) {
            e.target.value = null
        }
        setFileName(e.target.files[0].name)
    }

    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>
                        Book world
                    </h1>
                </div>
                <div className="row2">
                    <h2>
                        <form onSubmit={handleSubmit} >
                            <label for="title">Title:</label>
                            <input type="text" id="title" name="title" value={title} onChange={(e)=> {setTitle(e.target.value)}}/><br />
                            <label for="author">Author:</label>
                            <input type="text" id="author" value={author} onChange={(e)=> {setAuthor(e.target.value)}} name="author"/><br />
                            <label for="year">Year:</label>
                            <input type="text" id="year" name="year" value={year} onChange={(e)=> {setYear(e.target.value)}}/><br />
                            <input type="file" onChange={onFileChange} ref={inputRef}/>
                            <input type="submit" value="Submit" className="submitButton"></input>
                        </form>
                    </h2>
                </div>
                <div className="row3">
                    <h3>
                        Take a look around
                    </h3>
                    <div className="search">
                        <input type="text" placeholder="Search book"/> 
                        <button><img src='/Imgs/zoom.png' style={{width: "10px"}} alt='Background'></img></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;