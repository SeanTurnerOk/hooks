import React, {useState} from 'react'

const Form=()=>{
    const [state, setState]=useState({
        firstName: '',
        lastName:'',
        email:'',
        pass:'',
        confPass:''
    })
    const setHandler=(event)=>{
        setState({
            ...state,
            [event.target.name]:event.target.value
        })
    }
    const longEnough=(input)=>{
        if (input.length>=3 || input.length==0){
            return true;
        }
        return false;
    }
    return(

        <div>
            <form>
                <div>
                <label for="firstName">First Name:</label>
                <input type="text" name="firstName" id="firstName" onChange={setHandler}/>
                <span>{longEnough(state.firstName)?"":"Name must have at least three characters"}</span>
                </div>
                <div>
                <label for="lastName"  >Last Name:</label>
                <input type="text" name="lastName" id="lastName" onChange={setHandler}/>
                <span>{longEnough(state.lastName)?"":"Name must have at least three characters"}</span>
                </div>
                <div>
                <label for="email"  >Email:</label>
                <input type="text" name="email" id="email" onChange={setHandler}/>
                <span>{longEnough(state.email)?"":"Name must have at least three characters"}</span>
                </div>
                <div>
                <label for="pass" >Password:</label>
                <input type="text" name="pass" id="pass" onChange={setHandler}/>
                <span>{longEnough(state.pass)?"":"Name must have at least three characters"}</span>
                </div>
                <div>
                <label for="confPass" >Confirm Password:</label>
                <input type="text" name="confPass" id="confPass" onChange={setHandler}/>
                <span>{longEnough(state.confPass)?"":"Name must have at least three characters"}</span>
                </div>
            </form>
            <div>First Name: {state.firstName}</div>
            <div>Last Name:{state.lastName}</div>
            <div>Email: {state.email}</div>
            <div>Password:{state.pass}</div>
            <div>Confirm Password:{state.confPass}</div>
        </div>
    )
}

export default Form