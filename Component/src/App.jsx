//============================================================App.jsx



import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  

  return (
    <>
    <div className='container'>
    <Card title="frist" description="This is my frist"/> 
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card title="Seconed" description="This is my seconed"/>
    
    </div>
    </>
  )
}

export default App
