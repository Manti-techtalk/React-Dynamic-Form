import React from 'react';
import style from './Form.module.css'
import { useState } from 'react';

function Form() {
  const [text,setText] = useState('')
  const [textt,setTextt] = useState('')
  const [comment,setComment] = useState('About yourself')
  const [user,setUser] = useState('')
  const [contact,setContact] = useState('')
  const [email,setEmail] = useState('')
  const handlefChange = (event)=>{
    setText(event.target.value)
  }
  const handlesChange = (event)=>{
    setTextt(event.target.value)
  }
  const handleComment = (event)=>{
    setComment(event.target.value)
  }
  const handleInput = (event)=>{
    setUser(event.target.value)
  }
  const handleEmail = (event)=>{
    setEmail(event.target.value)
  }
  const handleContacts = (event)=>{
    setContact(event.target.value)
  }
  const handleReset = ()=>{
    setText('')
    setTextt('')
    setContact('')
    setEmail('')
  }
  return (
    <div className={style.all}>
    <form action="" className={style.form}>
        <h1>{text} {textt}</h1>
        <div className={style.div}>
          <label htmlFor="">First Name*</label>
          <input value={text} onChange={handlefChange} type="text" name='name' required placeholder='Enter Your Name' />
          <label htmlFor="">Second Name*</label>
          <input value={textt} onChange={handlesChange} type="text" name='name' required placeholder='Enter Your Name' />
          <label htmlFor="" >Enter Email*</label>
          <input type="text" name='namee'onChange={handleEmail} required placeholder='Enter Your Name' />
          <label htmlFor="">Contacts*</label>
          <input type="text" name='name' onChange={handleContacts} required placeholder='Enter Your Contacts' />
        </div>
        <div className={style.second}>
          <p>Gender*</p>
          <input type="radio" name='first'/>Male 
          <input type="radio" name='first'/> Female 
          <input type="radio" name='first'/>Other
        </div>
        <div className={style.third}>
          <p>Your Best Subjects</p>
          <input type="checkbox" name='second'/>English
          <input type="checkbox" name='second'/> Math
          <input type="checkbox" name='second'/>Physics
        </div>
        <div className={style.fourth}>
          <p>Upload Resume</p>
          <div>
            <input onChange={handleInput} type="file" name="" id="" placeholder='' />
          </div>
        </div>
        <div className={style.tidth}>
          <p>Enter URL</p>
          <div>
            <input type="text" name="" id="" placeholder='Enter url' />
          </div>
        </div>
        <div className={style.sixth}>
          <select name="" id="">Select Your Choise
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
        </div>
        <div className={style.last}>
          <p>About</p>
          <textarea onChange={handleComment} value={comment} name="" id="">
            About Yourself
          </textarea>
        </div>
        <div className={style.divv}> 
          <button>Submit</button>
          <button onClick={handleReset}>Reset</button>
        </div>
    </form>
    </div>
  )
}

export default Form