import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        // console.log(props)
        this.state = {
            userInfo:{
                name:"default",
                followers:null,
                // avatar_url:"https//link"
            }
        }

        // console.log(this.props.name+ " "+"this is child constructor!!");
    }
// componentDidMount(){
//     // console.log(this.props.name +" " +"child component is mountedd yeh heeheheh !!!!!");
// }
async componentDidMount(){
    const data = await fetch("https://api.github.com/users/Manishpandey10")
    const apiData = await data.json();

    console.log(apiData);
    this.setState({
        userInfo:apiData,
    })
}
    render(){
        const {name, followers,avatar_url} = this.state.userInfo
        // console.log(this.props.name + " "+"this is child render !!!!");
        return(
            //destructure it tommorow plis
            <div className="user-card">
            <img src={avatar_url} style={{width:200, height:200}}/>
            <h3>Name :{name}</h3>
            <h4>Followers: {followers} </h4>
        </div>
        )
    }
}
export default UserClass