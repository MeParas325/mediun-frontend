import Auth from "../components/Auth"
import Quote from "../components/Quote"

const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex justify-center items-center lg:h-screen min-h-screen">
        <Auth type="signup" />
        </div>
        <div className="hidden lg:block">
        <Quote />
        </div>
    </div>
  )
}

export default Signup