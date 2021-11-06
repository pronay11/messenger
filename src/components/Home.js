import React from 'react'
import Welcome from './Welcome';
import Messages from './Messages';
import {ContextProvider} from '../context/ContextProvider';
import { createContext } from 'react/cjs/react.development';
const Home = () => {
    const {loader,user}=React.useContext(ContextProvider);
    return (
        <div>
            {!loader ? user ? <Messages/>: <Welcome/> :"loading ..."}
        </div>
    )
}

export default Home
