import { Component } from "react"
import { User } from "./User"
import Type from "typed-js"
import UserClass from "./UserClass"

class About extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // console.log("parent component mounted !!!!");
    }

    render() {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center">
                <h1 className="text-3xl font-bold mb-4">About Me</h1>
                <h2 className="text-lg text-gray-700 mb-6">
                    Hey, this is Manish. I am an engineering graduate.
                </h2>
                <UserClass name={"mxp"} contact={"@mxp23"} />
            </div>
        )
    }
}

export default About
