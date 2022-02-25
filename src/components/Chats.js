import React ,{useState, useEffect} from 'react'
import { SendMessage } from './SendMessage';
import SignOut from '../App'
import firebase from 'firebase/compat/app';
        import 'firebase/compat/firestore';
        import 'firebase/compat/auth';

export const Chats = ({user=null,db=null}) => {
    const [messages,setMessages]=useState();
    
    // useEffect(()=>{
    //     if(db){

    //         const unsubscribe= db.collection('messages').orderBy('createdAt').limit(10).onSnapshot(querySnapshot=>{
        
    //     const data=querySnapshot.docs.map(doc=>({
    //         ...doc.data(),
    //         id:doc.id,
    //     }))
    //     setMessages(data)
    // })
    // return unsubscribe
    //  } },[db])
  return (
    <div>
    {/* <SignOut/> */}
    {/* {messages.map(({id, text, photoURL})=>{
        <div key={id}>
            <img src={photoURL} alt="User Pic"/>
            <p>{text}</p>
         </div>
    })} */}
{/* 
{messages.map(message=>(
    <li key={message.id}>{message.text}</li>
))} */}

   <SendMessage/>
    </div>
  )
}
