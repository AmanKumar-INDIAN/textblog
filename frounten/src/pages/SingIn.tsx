import { Link } from "react-router-dom"
import Formside from "../components/Formside"
import Quites from "../components/Quites"

function SingIn() {
  return (
    <div className=" lg:grid-cols-2  flex  justify-center items-center">

<div className=" w-1/2 flex  items-center justify-center"> 

    <div className=" flex justify-center items-center flex-col h-screen">
        <div className="my-5">
            <h1 className="text-3xl text-center my-3"> Sing In</h1>
            <p className="text-xl"> Not have an account ?  
            <Link to={"/singup"} className=" underline">   SingUP</Link>
            </p>
        </div>
    <Formside type={"SingIn"} />
    </div>
</div>


<div className="w-1/2 hidden lg:block">
    <Quites/>
</div>

    </div>
  )
}

export default SingIn