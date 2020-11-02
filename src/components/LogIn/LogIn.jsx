import { Button } from '@material-ui/core'
import React from 'react'
import './LogIn.css'
import { auth, provider } from '../fairbase';
import {useStateValue} from '../ContextApi/StateProvider';
import {actionType} from '../ContextApi/Reducer'

function LogIn() {

    const [state,dispatch]=useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
           .then(result => {
            //    console.log(result);
                dispatch({
                    type:actionType.SET_USER,
                    user:result.user,
                })
            })
            .catch(e => {
                 alert(e.message);
            })
}

return (
    <div className="logIn" >
        <div className="logo">
            <img src="https://cdn.iconscout.com/icon/free/png-64/facebook-2038471-1718509.png" alt="" />

            <h6>Facebook</h6>
        </div>

        <Button
            type="submit"
            onClick={signIn}
        >
            Sign In
            </Button>
    </div>
)
}

export default LogIn
