import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

const Update = (props) => {
    const navigate = useNavigate()
    const location = useLocation()

    const bookId = location.pathname.split("/")[2]
    const bookData = location.state
    
    const [book, setBook] = useState({
        title: bookData.title,
        desc: bookData.desc,
        price: bookData.price,
        cover: bookData.cover
    })

    const handleChange = (e) => {
        setBook(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        try{
            await axios.put("http://localhost:8800/books/" + bookId, book)
            navigate("/")
        } catch (err){

        }
    }

    return (
        <div className="form">
            <h1>Update the book</h1>
            <input type="text" placeholder='title' onChange={handleChange} name="title" defaultValue={bookData.title} />
            <input type="text" placeholder='desc' onChange={handleChange} name="desc" defaultValue={bookData.desc}/>
            <input type="number" placeholder='price' onChange={handleChange} name="price" defaultValue={bookData.price} />
            <input type="text" placeholder='cover' onChange={handleChange} name="cover" defaultValue={bookData.cover} />
            <button className='formButton' onClick={handleClick}>Update</button>
        </div>
    )
}

export default Update