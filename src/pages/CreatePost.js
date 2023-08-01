import { useEffect } from "react"

import { useBlog } from "context/BlogContext"
import { useNavigate } from "react-router-dom"

import { addDoc , collection } from "firebase/firestore"
import { db , auth } from "firebaseConfig/FirebaseConfig"


function CreatePost() {

  const { blogTitle, setBlogTitle, blogDesc, setBlogDesc , isAuth } = useBlog()

  const navigate = useNavigate()
  
  const postCollectionRef = collection(db, "posts")
  
  const createPost = async () => {
    if(blogTitle !== "" && blogDesc !== "") {
      await addDoc(postCollectionRef, {
        blogTitle,
        blogDesc,
        author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      })
      navigate("/")
    }
    else {
      alert("Lütfen İlgili Alanları Doldurunuz !")
    }
  }

  useEffect(() => {
    if(!isAuth) {
      navigate("/login")
    }
  },[])

  return (
    <div className='border border-gray-200 rounded-md w-[600px] mx-auto p-5'>
      <div className='mb-5'>
        <label className='block text-md font-medium mb-5'>Blog Başlığı</label>
        <input 
          type="text" 
          placeholder='Blog Başlığı..' 
          className='block w-full border border-gray-200 p-3 outline-none'
          onChange={(e) => {setBlogTitle(e.target.value)}}
        />
      </div>
      <div className='mb-5'>
        <label className='block text-md font-medium mb-5'>Blog Açıklama</label>
        <textarea
          placeholder="Blog Açıklama.." 
          className='block w-full border border-gray-200 p-3 outline-none' 
          rows="15"
          onChange={(e) => {setBlogDesc(e.target.value)}}
          />
      </div>
      <button 
      onClick={createPost}
      className='w-full bg-purple-500 text-white text-md font-semibold p-3 rounded-sm ease-in-out duration-500 hover:bg-purple-600'>Kaydet</button>
    </div>
  )
}

export default CreatePost