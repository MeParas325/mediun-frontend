import { ChangeEvent, useState } from "react"
import LabelledInput from "./LabelledInput"
import { SignupInput } from "@paras325/mediun-common"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../utilities/constants"

const Auth = ({type}: {type: "signup" | "signin"}) => {

    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: "",
    })
    const navigate = useNavigate()

    async function signupUser() {
        try {
            const res = await axios.post(`${BACKEND_URL}api/v1/user/${type == "signin" ? "signin" : "signup"}`, postInputs)
            const jwt = res.data.token
            localStorage.setItem("token", jwt)
            navigate("/blogs")
        } catch (error) {
            alert("Error while signing up")
        }
        
        
    }

    return (
        <div className="max-w-md w-full px-4 mx-auto">
            <h1 className="text-center text-3xl font-bold">{type === "signin" ? "Log in" : "Create an Account"}</h1>
            <p className="text-center font-medium text-xs text-gray-400 mt-1 mb-4">{type === "signin" ? "New User?" : "Already have and account?"} <Link to={type === "signin" ? "/signup" : "/signin"} className="text-purple-700 hover:text-blue-600 font-normal cursor-pointer hover:underline">{type === "signin" ? "Signup" : "Login"}</Link></p>
            <div>
               { type == "signup" && <LabelledInput label={"Username"} placeholder={"Enter your username"} type={"text"} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} /> }
                <LabelledInput label={"Email"} placeholder={"example@gmail.com"} type={"email"} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setPostInputs({
                        ...postInputs,
                        email: e.target.value
                    })
                }}>
                </LabelledInput>
                <LabelledInput label={"Password"} placeholder={"Enter password"} type={"password"} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }} ></LabelledInput>
                <button onClick={signupUser} className="w-full bg-black text-white rounded-lg p-2">Sign Up</button>
            </div>

        </div>
    )
}

export default Auth