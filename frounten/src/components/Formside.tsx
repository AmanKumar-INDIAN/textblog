import { useState } from "react"
import LabelInput from "./LabelInput"
import { singupinputType } from "@amankumar95/commonfile"

import axios from "axios"
import { DATA_BASEURL } from "../config"
import { useNavigate } from "react-router-dom"




function Formside({ type = "SingIn" || "SingUp" }: { type: string }) {


  const Navigaet = useNavigate()

  const [SingUPdata, setSingUpData] = useState<singupinputType>({
    name: "",
    lastname: "",
    email: "",
    password: ""

  })
  function senddata() {

    axios.post(`${DATA_BASEURL}user/${type == "SingUp" ? "singup" : "singin"}`, JSON.stringify(SingUPdata))
      .then((responce) => {
        console.log(responce.data)
        localStorage.setItem("token", `"barear" ,${responce.data.token}`)


        if (type == "SingUp" && responce.data.token) {
          Navigaet("/singin")
        } else {
          Navigaet("/blogs")
        }
      }).catch((err) => {
        console.log(err)
        if (type == "SingIn") {
          alert("Invalid codentials")
        }
      })

  }
  return (

    <div className=" w-full">
      {type}

      <form className="max-w-sm mx-auto" >

        {type == "SingUp" && <> <LabelInput placeholder="Enter you name" type={"text"} label={"Name"} onchange={(e) => setSingUpData({
          ...SingUPdata,
          name: e.target.value
        })} />
          <LabelInput placeholder="Enter you Lastname" type={"text"} label={"Lastname"} onchange={(e) => setSingUpData({
            ...SingUPdata,
            lastname: e.target.value
          })} />  </>}

        <LabelInput placeholder="abc@gmail.com" type={"email"} label={"email"} onchange={(e) => setSingUpData({
          ...SingUPdata,
          email: e.target.value
        })} />
        <LabelInput placeholder="12345678" type={"password"} label={"Password"} onchange={(e) => setSingUpData({
          ...SingUPdata,
          password: e.target.value
        })} />
        <button onClick={senddata} type="button" className="text-center bg-black text-white p-2 rounded-md w-full">Submit</button>
      </form>
    </div>
  )
}









export default Formside