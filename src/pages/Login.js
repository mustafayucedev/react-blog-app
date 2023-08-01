import { FcGoogle } from "react-icons/fc"


import { auth, provider } from "firebaseConfig/FirebaseConfig"
import { signInWithPopup } from "firebase/auth"

import { useBlog } from "context/BlogContext"

import { useNavigate } from "react-router-dom"


function Login() {

  const { setIsAuth } = useBlog()
  
  const navigate = useNavigate()

  const signInWithGoogle = () => {
    signInWithPopup(auth,provider).then((result) => {
      // console.log(result.user)
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
      navigate("/")
    })
  }

  return (
    <>
      <section>
          <div className="shadow-md shadow-gray-300 w-80 mx-auto p-5 rounded-md">
            <p className="text-center font-md mb-5">Google ile Giriş Yapın</p>
            <button 
              onClick={signInWithGoogle} 
              className="w-full flex items-center justify-center gap-3 p-3 border border-gray-300 rounded-sm ease-in-out duration-500 hover:border-black">
              <FcGoogle size={20} />
              <span className="text-sm font-medium">Google ile Oturum Aç</span>
            </button>
          </div>
      </section>
    </>
  )
}

export default Login