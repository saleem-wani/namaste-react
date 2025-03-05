import { useRouteError } from "react-router";

const Error=()=>{
    const err=useRouteError();
    console.log(err)
    return(
        <div>
           <h1>{err.statusText}</h1> 
        <h1>{err.data}</h1>
        <h1>{err.status}</h1>
        </div>
    )
}
export default Error;