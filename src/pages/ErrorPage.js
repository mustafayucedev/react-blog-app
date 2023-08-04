import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

function ErrorPage() {

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 3000);
  },{})

  return (
    <div className='container mx-auto'>
      <div className='font-bold text-center text-3xl mb-3'> Sayfa Bulunamadı..</div>
      <p className="text-center"> Yönlendiriliyorsunuz.. </p>
    </div>
  )
}

export default ErrorPage