import { useState } from "react";
import Appbar from "../components/Appbar.tsx"
import {BACKEND_URL} from "../utilities/constants.ts"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Publish = () => {

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate()

  async function submitBlog() {
    

    try {
        await axios.post(`${BACKEND_URL}api/v1/blog`, {title, content}, {
          headers: {
            'Authorization': localStorage.getItem("token")
          }
        })
        navigate("/blogs")

    } catch (error) {
        console.log("Error occured: ", error)
    }


  }
  return (
    <>
    <Appbar />
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-md p-6">
        {/* Title Field */}
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your title"
          className="w-full text-xl font-bold text-gray-700 placeholder-gray-400 outline-none border border-gray-300 rounded-md p-3 mb-4 focus:ring-2 focus:ring-black"
        />

        {/* Description Field */}
        <textarea
          onChange={(e) => setContent(e.target.value)}
          placeholder="Tell your story..."
          className="w-full text-gray-600 placeholder-gray-400 outline-none border border-gray-300 rounded-md p-3 mb-4 focus:ring-2 focus:ring-black resize-none"
          rows={5}
        ></textarea>

        {/* Publish Button */}
        <button onClick={submitBlog} className="w-full bg-blue-900 text-white text-lg font-medium py-2 rounded-md hover:bg-blue-600 transition">
          Publish
        </button>
      </div>
    </div>
    </>
  );
};

export default Publish;
