import { useEffect } from "react"

import { useBlog } from "context/BlogContext"

import { getDocs, collection } from "firebase/firestore"
import { db } from "firebaseConfig/FirebaseConfig"


function Home() {

  const { postShow, setPostShow } = useBlog()
  const postCollectionRef = collection(db, "posts")

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef)
      setPostShow(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }) ))
    }
    getPosts()
  })

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-5">
        {postShow.map((post,index) => (
          <div key={index} className="border border-gray-200 rounded-sm mb-5 p-5">
            <div className="text-lg font-bold mb-3 h-10 overflow-hidden leading-10"> {post.blogTitle} </div>
            <div className="text-gray-500 leading-6 text-md mb-5"> {post.blogDesc} </div>
            <div className="text-sm text-gray-600">
              <span> Yazar : </span>
              <strong>{post.author.name }</strong>
            </div>
          </div>
        ))}
      </div>
 
    </div>
  )
}

export default Home