import { Link , useNavigate } from "react-router-dom"
import { useBlog } from "context/BlogContext"

import { auth } from "firebaseConfig/FirebaseConfig"
import { signOut } from "firebase/auth"

export default function Header() {

    const { isAuth, setIsAuth } = useBlog()

    const navigate = useNavigate()

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false)
            navigate("/login")
        })
    }

  return (
    <>
        <header className="py-4 mb-5">
            <div className="container mx-auto">
                <nav>
                    <ul className="flex items-center justify-center flex-wrap gap-4">
                        <li>
                            <Link className="text-sm font-medium text-white bg-purple-500 shadow-lg shadow-gray-200 rounded-sm inline-block py-3 px-5 ease-in-out duration-500 hover:bg-purple-500" to="/">Anasayfa</Link>
                        </li>
                        <li>
                            <Link className="text-sm font-medium text-white bg-purple-500 shadow-lg shadow-gray-200 rounded-sm inline-block py-3 px-5 ease-in-out duration-500 hover:bg-purple-500" to="/createpost">Blog Yaz</Link>
                        </li>
                        { !isAuth ? (
                           <Link className="text-sm font-medium text-white bg-purple-500 shadow-lg shadow-gray-200 rounded-sm inline-block py-3 px-5 ease-in-out duration-500 hover:bg-purple-500" to="/login">Giriş Yap</Link>

                        ) : (
                            <button 
                            onClick={signUserOut} 
                            className="text-sm font-medium text-white bg-purple-500 shadow-lg shadow-gray-200 rounded-sm inline-block py-3 px-5 ease-in-out duration-500 hover:bg-purple-500">Çıkış Yap</button>
                        )}
                        <li>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}