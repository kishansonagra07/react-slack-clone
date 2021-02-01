import firebase from 'firebase'
import {useState} from 'react'
import { useStateValue } from './StateProvider'
import db from './firebase'
import './ChatInput.css'
import { Button } from '@material-ui/core'

function ChatInput({channelName, channelId}) {
    const [input,setInput] = useState('')
    const [{user}] = useStateValue()

    const sendMessage = (e) => {
        e.preventDefault()

        if(channelId){
            db
            .collection('slack-rooms')
            .doc(channelId)
            .collection("messages").add({
                message:input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                user:user.displayName,
                userImage:user.photoURL
            })
            setInput('')
        }
    }
    return (
        <div className='chatInput'>
            <form>
                <input placeholder={`Message #${channelName?.toLowerCase()}`} onChange={e => setInput(e.target.value)} value={input} type="text"/>
                 <Button type='submit' onClick={sendMessage}>SEND</Button>
            </form>
        </div>
    )
}

export default ChatInput
