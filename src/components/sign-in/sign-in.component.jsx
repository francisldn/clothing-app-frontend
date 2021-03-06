import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:'' })
    }

    // name is in [] so that it can correspond to the object dynamically, ie: [name] = email if email changes
    // don't need to write separate handleChange function for each email and password
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>
                    I already have an account
                </h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name = 'email' 
                        type='email' 
                        label = 'email'
                        value={this.state.email} 
                        onChange={this.handleChange} required
                    />
                    
                    <FormInput 
                        name='password' 
                        type='password' 
                        label = 'password'
                        value={this.state.password} 
                        onChange={this.handleChange}
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;