import './Login.css'
import { auth, provider } from './firebase'
import { Button } from '@material-ui/core'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [state, dispatch] = useStateValue()
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" alt=""/>
                <h1>Sign in to Clone</h1>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
