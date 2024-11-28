import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../utilities/constants"

interface Blog {
    id: string,
    title: string,
    content: string,
    published: boolean,
    author: {
        name: string,
    }
}

export const useBlog = (id: string) => {
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog>()

    useEffect(() => {
        axios.get(`${BACKEND_URL}api/v1/blog/` + id, {
            headers: {
                Authorization: localStorage.getItem("token") || ""
            }
        }).then((res) => {
            setBlog(res.data.blog)
            setLoading(false)
        }).catch((e) => {
            console.log("Error occured", e.toString())
        })
    }, [])

    return {
        loading,
        blog
    }

}

export const useBlogs = () => {

    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(() => {
        axios.get(`${BACKEND_URL}api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token") || ""
            }
        }).then((res) => {
            setBlogs(res.data.blogs)
            setLoading(false)
        }).catch((e) => {
            console.log("Error occured", e.toString())
        })
    }, [])

    return {
        loading,
        blogs
    }
}