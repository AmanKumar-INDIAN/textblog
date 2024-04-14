import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"


function Appbar() {
  return (
    <div className=" py-4 my-2 px-6 mx-2  flex justify-between border-b border-gray-400">
      <Link to={"/blogs"}>
        <div className=" text-2xl font-bold">
          Medium
        </div>
      </Link>
      <div className=" ">
        <Link to={"/publish"}>
          <button type="button" className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-2xl text-sm px-5 mx-2
         py-2.5 me-2 mb-2">Add Blog +</button>
        </Link>
        <Avatar name="Aman" />
      </div>
    </div>
  )
}

export default Appbar