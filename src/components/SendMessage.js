import React,{useState} from 'react'

export const SendMessage = () => {
    const [msj, setMsj]=useState('')

    const sendMsj= async(e)=>{
        e.preventDefault()

    }
  return (
    <div><form onSubmit={sendMsj}>
        <input placeholder="Message here...."  defaultValue={msj} onChange={(e)=>setMsj(e.target.value)} ></input>
        <button type="submit">Send</button>
    </form></div>
  )
}
