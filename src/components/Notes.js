import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from "../context/notes/NoteContext"
import NoteItem from './NoteItem'
import AddNote from './AddNote'
import { useHistory } from 'react-router-dom'

const Notes = (props) => {
    const context = useContext(NoteContext)
    const { notes, getNotes, editNote } = context
    let history = useHistory()
    
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes()
        }
        else{
            history.push("/login") // redirect to login
        }
        // eslint-disable-next-line
    }, [])
    
    const [note, setNote] = useState({id:"", etitle:"", edescription:"", etag:""})

    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
        
    }

    const ref = useRef(null)
    const refClose = useRef(null)

    const handleSubmit = (e) => {
        // console.log("Updating the note...", note)
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click()
        props.showAlert("Note updated successfully", "success")
        // setNote({title:"", description:"", tag:""})
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name] : e.target.value})
    }

    return (
        <>
            <AddNote showAlert={props.showAlert}  mode={props.mode}/>

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='container my-3'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" value={note.etitle} name='etitle' aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" value={note.edescription} name='edescription' onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<2 || note.edescription.length<5} onClick={handleSubmit} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row my-3' style={{color:props.mode==='light'?'black':'white'}}>
                <h2>Your Notes</h2>
                {notes && notes.length > 0 ? (
                    notes.map((note) => {
                        return <NoteItem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} mode={props.mode} />
                    })
                ) : (
                    <p>No notes found.</p>
                )}
            </div>
        </>
    )
}

export default Notes
