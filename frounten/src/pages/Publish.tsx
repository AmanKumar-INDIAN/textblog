import { useState } from "react"
import Appbar from "../components/Appbar"
import axios from "axios"
import { DATA_BASEURL } from "../config"
import { useNavigate } from "react-router-dom"

function Publish() {

    const [title, setTitle] = useState("")
    const [dist, SetDist] = useState("")

    const Navgate = useNavigate()


    return (
        <div>
            <Appbar />

            <div className="flex justify-center items-center">
                <div className="mt-10 max-w-screen-lg w-1/2">
                    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">

                        <div className="px-4 py-2 bg-white rounded-t-lg ">
                            <label htmlFor="title" className="sr-only">title.....</label>
                            <textarea id="title" rows={2} className="w-full px-0 text-sm text-gray-900 bg-white border-0  " placeholder="Write a Title..." required onChange={(e) => {
                                setTitle(e.target.value)
                            }} />
                            <label htmlFor="dis" className="sr-only">Discription....</label>
                            <textarea id="dis" rows={4} className="w-full px-0 text-sm text-gray-900 bg-white border-0   " placeholder="Write a Discription..." required onChange={(e) => {
                                SetDist(e.target.value)
                            }} />
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 border-t ">
                            <button type="submit" className="p-1 text-xl w-full items-center py-2.5 px-4  font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800" onClick={(e) => {
                                axios.post(`${DATA_BASEURL}api/v1/blog`, {
                                    title: title,
                                    disc: dist

                                }, {
                                    headers: {
                                        Authorization: localStorage.getItem("token")
                                    }
                                }).then((responce) =>
                                    Navgate("/blogs")
                                ).catch((err) =>
                                    alert(err)
                                )
                            }} >
                                Publish post
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Publish