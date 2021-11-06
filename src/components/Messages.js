import React from 'react'
import Input from './Input'
import { ContextProvider } from '../context/ContextProvider'

const Messages = () => {
    const {allMsg,user}= React.useContext(ContextProvider);
    return (
        <div className="Messages">

            { allMsg.map((message) =>
                    message.email === user.email ? (
                    <div className="Messages__my" key={message.id}>
                    <div className="Messages__my_mgs">
                        <p>{message.msg}</p>
                    </div>
                </div>) : (
                <div className="Messages__other" key={message.id}>
                <div className="Messages__other_img">
                    <img src={message.photo} alt={message.photo} />
                </div>
                <div className="Messages__other_mgs">
                    <span>{message.username}</span>
                    <p>{message.msg}</p>
                </div>
                
              </div>
            )
                )
            }
            

            
            

            <Input/>

        </div>
    )
}

export default Messages
