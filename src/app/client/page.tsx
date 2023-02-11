"use client";

import { useEffect, useState } from 'react'
import io from 'socket.io-client'
let socket: any

const Home = () => {
  const [input, setInput] = useState('')

  useEffect(() => {socketInitializer();}, [])

  const socketInitializer = async () => {
    //await fetch('server');
    socket = io()

    socket.on('connect', () => {
      console.log('connected')
    })

    socket.on('update-input', (msg:any) => {
      setInput(msg)
    })
  }

  const onChangeHandler = () => {
    setInput("hello")
    socket.emit('input-change', "hello")
  }

  return (
    <button onClick={onChangeHandler}>Clicke here {input}</button>
  )
}

export default Home;