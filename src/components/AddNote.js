import React, {useContext, useState} from 'react'
import NoteContext from "../context/notes/NoteContext"

const AddNote = (props) => {
    const context = useContext(NoteContext)
    const { addNote } = context
    
    const [note, setNote] = useState({title:"", description:"", tag:""})
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote({title:"", description:"", tag:""})
        props.showAlert("Note added successfully", "success")
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name] : e.target.value})
    }
    return (
        <div className='container mt-2' style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Add a Note</h2>
            <form className='container my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" style={{backgroundColor: props.mode==='light'?'rgb(34 34 34)':'white', color: props.mode==='light'?'white':'black'}} value={note.title} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name='description'
                    style={{backgroundColor: props.mode==='light'?'rgb(34 34 34)':'white', color: props.mode==='light'?'white':'black'}} value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag'
                    style={{backgroundColor: props.mode==='light'?'rgb(34 34 34)':'white', color: props.mode==='light'?'white':'black'}} value={note.tag} onChange={onChange}/>
                </div>
                <button disabled={note.title.length<2 || note.description.length<5} type="submit" className="btn btn-primary btn-sm" onClick={handleSubmit}>Add Note</button>
            </form>

        </div>
    )
}

export default AddNote
