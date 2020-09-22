import React from 'react'
import { useSelector } from 'react-redux'

import Login from "../login/Login"
import LoginCpf from "../login/LoginCpf"
import Principal from "../principal/Principal"
import EmBreve from "../principal/EmBreve"


const Entrada = () => {

    const auth = useSelector(state => state.auth.auth)
    
    return (<div>
        {auth ? (
            <div>
                <Principal />
                {/* <EmBreve /> */}
            </div>
        ) : (
            <div>
                <Login />
            </div>
        )}
    </div>  
    )
}
 
export default Entrada


