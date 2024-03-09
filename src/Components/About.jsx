import { Component } from "react"
import { User } from "./User"
import Type from "typed-js"
import UserClass from "./UserClass"

class About extends Component{
    constructor(props){
    super(props)     
    
    // console.log("this is parent constructor in about!");
    
    }
componentDidMount(){
    // console.log("parent component mounted !!!!");
}
    render(){
        // console.log("parent render function!");
        return(        
        <div>
            <h1>About me </h1>
            <h2> hey this is manish . i am engineering graduate.</h2>
            <UserClass name = {"mxp"}contact={"@mxp23"}/>

        </div>
        )
    }
}
export default About;