import { createContext, useContext, useState } from "react";

const Context = createContext()

const Provider = ({ children }) => {

    const [isAuth,setIsAuth] = useState(false)

    const data = {
        isAuth,
        setIsAuth
    }

    return (
        <Context.Provider value={data}>
        { children }
        </Context.Provider>
    )
}

export const useBlog = () => useContext(Context)

export default Provider