import { createContext, useContext, useState } from "react";

const Context = createContext()

const Provider = ({ children }) => {

    const [isAuth,setIsAuth] = useState(localStorage.getItem("isAuth"))
    const [blogTitle,setBlogTitle] = useState("")
    const [blogDesc,setBlogDesc] = useState("")
    const [postShow,setPostShow] = useState([])

    const data = {
        isAuth,
        setIsAuth,
        blogTitle,
        setBlogTitle,
        blogDesc,
        setBlogDesc,
        postShow,
        setPostShow
    }

    return (
        <Context.Provider value={data}>
        { children }
        </Context.Provider>
    )
}

export const useBlog = () => useContext(Context)

export default Provider