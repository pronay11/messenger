import React,{useState,useContext} from 'react';
import { ContextProvider } from '../context/ContextProvider';
const Input = () => {
    const {sendMessage}=useContext(ContextProvider);
    const [msg,setMsg]= useState("");
    const sendMsg =e=>{
        e.preventDefault();
        sendMessage(msg);
        setMsg("");
    }
    return (
        <div className="Input__form">
                <form onSubmit={sendMsg}>
                    <input 
                    type="text" 
                    name="" 
                    className="Input__control"
                    placeholder="Write a message ..."
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                    required
                    />
                </form>
        </div> 
    )
}

export default Input
