import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const {host} = props
    const [notes, setNotes] = useState([])

    // fetch all Notes
    const getNotes = async () => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchNotes`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': localStorage.getItem('token')
            }
        })
        const json = await response.json()
        // console.log(json.data)

        setNotes(json.data)
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/createNotes`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })

        // console.log(response.data)
        const note = await response.json()
        setNotes(notes.concat(note))
    }

    //Delete a Note
    const deleteNote = async (id) => {
        // API call
        const response = await fetch(`${host}/api/notes/deleteNotes/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': localStorage.getItem('token')
            }
        })
        const json = await response.json()
        console.log(json.data)
        // console.log("Deleting the note with id" + id);

        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/updateNotes/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        })
        const json = await response.json()
        console.log(json)

        let newNotes = JSON.parse(JSON.stringify(notes))
        // console.log("this is new notes", newNotes)
        // Logic to edit in client
        for (let i = 0; i < newNotes.length; i++) {
            const element = newNotes[i]
            if (element._id === id) {
                newNotes[i].title = title
                newNotes[i].description = description
                newNotes[i].tag = tag
                break
            }
        }
        setNotes(newNotes)
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState