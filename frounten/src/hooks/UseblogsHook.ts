import axios from "axios"
import { useEffect, useState } from "react"
import { DATA_BASEURL } from "../config"


interface blogprops {
    "id": string,
    "title": string,
    "disc": string,
    "cretateAt": string,
    "cratedby": {
        "name": string,
        "email": string
    }

}



function UseblogsHook() {
    const [loading, Setloading] = useState<boolean>(true)
    const [blogdata, Setblogdata] = useState<blogprops[]>([])

    useEffect(() => {


        axios.get(`${DATA_BASEURL}api/v1/blog/bulk/all`, {
            headers: {
                "Authorization": `${localStorage.getItem("token")}`
            }
        })
            .then((responce) => {
                console.log(responce.data.posts)
                Setblogdata(responce.data.posts)
                Setloading(false)
            })
            .catch((err) => {
                console.log(err)

            })

    }, [])

    return {
        loading,
        blogdata
    }
}

interface SingleblogProp {
    post: {
        "title": string,
        "disc": string,
        "cretateAt": string,
        "cratedby": {
            "name": string,
            "lastname": string
        }
    }

}

export function UseSingleblog({ id }: { id: string }) {
    const [loading, Setloading] = useState<boolean>(true)
    const [singleblogdata, Setblogdata] = useState<SingleblogProp>()

    useEffect(() => {


        axios.get(`${DATA_BASEURL}api/v1/blog/${id}`, {
            headers: {
                "Authorization": `${localStorage.getItem("token")}`
            }
        })
            .then((responce) => {

                Setblogdata(responce.data)
                Setloading(false)
            })
            .catch((err) => {
                console.log(err)

            })

    }, [])

    return {
        loading,
        singleblogdata
    }
}



export default UseblogsHook
