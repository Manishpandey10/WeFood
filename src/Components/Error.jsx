import { useRouteError } from "react-router-dom"
export const Error =()=>
{
    const err = useRouteError();

    return(
        <>
            <h1>Bhut tej hore hooo...</h1>
            <h3>{err.statusText}</h3>
            <h1>Tension mat ley Error 404 hae normal</h1>
            <img src="https://i.pinimg.com/originals/78/b0/aa/78b0aa0da2baf23cedbd353eb9d00a4b.jpg" style={{width:"100px"}}/>
        </>
    )
}