import React, { useEffect } from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

const About = () => {
  const a = useContext(NoteContext)

  useEffect(() => {
    a.update()
  },[])

  return (
    <div>
      This is about {a.state.name} and He is in {a.state.class} 
    </div>
  )
}

export default About
