
        import React, { useRef, useState } from 'react';
        import './App.css';
       
        import { Login } from './components/Login';

        import firebase from 'firebase/compat/app';
        import 'firebase/compat/firestore';
        import 'firebase/compat/auth';
        // import 'firebase/compact/analytics';

        import { useAuthState } from 'react-firebase-hooks/auth';
        import { useCollectionData } from 'react-firebase-hooks/firestore';



        firebase.initializeApp({
        apiKey: "AIzaSyDuuPk0L87BoL4rCm6Lhvo_8GnWQ-dvido",
        authDomain: "firechat-bbf4f.firebaseapp.com",
        databaseURL:"http://firechat-bbf4f.firebaseio.com",
        projectId: "firechat-bbf4f",
        storageBucket: "firechat-bbf4f.appspot.com",
        messagingSenderId: "162512340988",
        appId: "1:162512340988:web:b25b5b17997ffca0261479",
        measurementId: "G-K76H5W8CXQ"

        })

        const auth = firebase.auth();
        const firestore = firebase.firestore();
        // const analytics = firebase.analytics();



        function App() {

        // const [user] = useAuthState(auth);
       const [user]="Surya"
        
          return (
             <>
            <p >{user} </p>   
            { user? <ChatRoom />: <Login/>
           }
           </>
          );
        }



        function SignOut() {
          return auth.currentUser && (
            <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
          )
        }
        
        
        function ChatRoom() {
          const dummy = useRef();
          const messagesRef = firestore.collection('messages');
          const query = messagesRef.orderBy('createdAt').limit(5);
        
          const [messages] = useCollectionData(query, { idField: 'id' });
        
          const [formValue, setFormValue] = useState('');
        
        
          const sendMessage = async (e) => {
            e.preventDefault();
        
            const { uid, photoURL } = auth.currentUser;
        
            await messagesRef.add({
              text: formValue,
              createdAt: firebase.firestore.FieldValue.serverTimestamp(),
              uid,
              photoURL
            })
        
            setFormValue('');
            dummy.current.scrollIntoView({ behavior: 'smooth' });
          }
        
          return (<>
            <main>
        
              {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        
              <span ref={dummy}></span>
        
            </main>
        
            <form onSubmit={sendMessage}>
        
              <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
        
              <button type="submit" disabled={!formValue}>Send</button>
        
            </form>
          </>)
        }
        
        
        function ChatMessage(props) {
          const { text, uid, photoURL } = props.message;
        
          const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
        
          return (<>
            <div className={`message ${messageClass}`}>
              <img src={photoURL || 'https://3s81si1s5ygj3mzby34dq6qf-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/ab_multi-cloud-1024x959.jpg'} width="50px"/>
              <p>{text}</p>
            </div>
          </>)
        }
        
        

        export default App;




