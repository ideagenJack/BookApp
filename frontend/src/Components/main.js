import { useState, useRef } from "react";
import axios from "axios";
import { NavLink, Navlink } from 'react-router-dom';

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
        <div className="header">
            <div className="row1">
                <h1>Book world</h1>
            </div>
            <div className="row2">
                <h2>
                <div className="links">
                    <a to="/" className="link" activeClassName="active" exact>
                        Books list
                    </a>
                    <a to="/" className="link" activeClassName="active" exact>
                        Add book

                    </a>
                </div>
                </h2>
            </div>
            <div className="row3">
                <h3>Take a look around</h3>
                <div className="search">
                    <input type="text" placeholder="Search book"/> 
                    <button><img src='/Imgs/zoom.png' style={{width: "10px"}} alt='Background'></img></button>
                </div>
            </div>
        </div>
    )
}

export default Main;