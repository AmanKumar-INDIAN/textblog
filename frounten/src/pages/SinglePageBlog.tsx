import { useParams } from "react-router-dom"
import { UseSingleblog } from "../hooks/UseblogsHook"
import { Avatar } from "../components/BlogCard"
import Appbar from "../components/Appbar"
import Loading from "../components/Loading"

function SinglePageBlog() {
    const { id } = useParams()
    const { loading, singleblogdata } = UseSingleblog({
        id: id || ""
    })

    if (loading) {
        return <Loading />
    }
    console.log(singleblogdata)
    return (

        <div className="">
            <Appbar />
            <div className=" flex flex-col h-screen w-full md:flex-row ">
                <div className="  h-screen mx-10 px-10 flex justify-center items-center ">

                    <div className="w-full">

                        <h1 className=" text-4xl font-bold my-4">{singleblogdata?.post.title}</h1>
                        <h1 className="text-2xl text-gray-600 my-4" >{singleblogdata?.post.cretateAt}</h1>
                        <p className="text-xl text-gray-800 shrink-0">{singleblogdata?.post.disc}</p>
                    </div>

                </div>
                <div className=" p-2 h-screen mx-10 px-5 flex justify-center items-center ">

                    <div className="">

                        <h1 className=" my-4">Author</h1>
                        <div className="flex gap-5 my-3">
                            <Avatar name={singleblogdata?.post.cratedby.name || "Anonomus"} />

                            <h1 className=" text-2xl font-semibold ">{singleblogdata?.post.cratedby.name}</h1>
                        </div>

                        <div className=" my-5 shrink-0 text-nowrap">Lorem ipsum, dolor sit amet consectetur adipisicing.</div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SinglePageBlog