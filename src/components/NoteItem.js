import React, {useContext} from 'react'
import NoteContext from "../context/notes/NoteContext"

const NoteItem = (props) => {
    const context = useContext(NoteContext)
    const { deleteNote } = context
    const { note, updateNote } = props
    return (
        <div className='col-md-3' >
            <div className="card my-3">
                <div className="card-body" style={{backgroundColor: props.mode==='light'?'rgb(34 34 34)':'white', color: props.mode==='light'?'white':'black'}}>
                    <div className='d-flex align-items-center'>
                        <h5 className="card-title" >{note.title}</h5>
                        <i className="fa-sharp fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id) 
                            props.showAlert("Note deleted successfully", "success")}} ></i>
                        <i className="fa-solid fa-file-pen mx-2" onClick={()=>updateNote(note) }></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
