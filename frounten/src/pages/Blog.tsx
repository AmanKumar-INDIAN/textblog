import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import Loading from "../components/Loading"
import UseblogsHook from "../hooks/UseblogsHook"

function Blog() {

  const { loading, blogdata } = UseblogsHook()
  console.log(blogdata)
  if (loading) {
    return <Loading />
  }

  return (
    <div>

      <Appbar />
      <div className=" flex justify-center w-full">
        <div className="w-1/2">
          {blogdata.length > 1 && blogdata.map((blog, index) => (

            <BlogCard id={blog.id} key={index} authorname={blog.cratedby.name} title={blog.title} disc={blog.disc} Publushdate={blog.cretateAt} email={blog.cratedby.email} />



          ))}
        </div>

      </div>

    </div>
  )
}

export default Blog