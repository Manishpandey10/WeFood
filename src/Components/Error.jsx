import { useRouteError } from "react-router-dom"
export const Error =()=>
{
    const err = useRouteError();

    return(
        <>
            <h1>Errorr........</h1>
            <h3>{err.statusText}</h3>
            
            <img src="https://i.pinimg.com/originals/78/b0/aa/78b0aa0da2baf23cedbd353eb9d00a4b.jpg" style={{width:"100px"}}/>
        </>
    )
}