import { Link } from "react-router-dom"

type Blogcardprops = {
    id: string,
    authorname: string,
    Publushdate: string,
    title: string,
    disc: string,
    email: string
}
function BlogCard({ authorname, Publushdate, title, disc, email, id }: Blogcardprops) {
    return (
        <Link to={`/singleblog/${id}`}>
            <div className=" my-8 mx-2 p-1 border-b border-gray-400 cursor-pointer">
                <div className=" flex flex-row gap-4 items-center">
                    <Avatar name={authorname} />
                    <div className="">{authorname}</div>
                    {Publushdate}
                </div>
                <div className=" my-3 py-2 px-2">
                    <h1 className=" font-semibold text-2xl">{title}</h1>
                </div>
                <div className="my-3">
                    <p className=" text-xl text-gray-600">  {disc.slice(0, 100)}....</p>

                </div>
                <div className="my-2 flex justify-around items-center">
                    <p className=" text-gray-600 text-[20px]">{Math.ceil((disc.length / 100))}minets</p>
                    <p>Email <span className=" font-semibold">{email}</span></p>
                </div>
            </div>
        </Link>
    )
}


export function Avatar({ name }: { name: string }) {
    return <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">{name.charAt(0)}</span>
    </div>

}


export default BlogCard