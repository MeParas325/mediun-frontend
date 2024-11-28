import { ChangeEvent } from "react"

interface labelledInput {
    label: string,
    placeholder: string,
    type: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void

}

const LabelledInput = ({label, placeholder, type, onChange}: labelledInput) => {
    return (
        <div className="mb-5">
            <p className="text-sm font-bold mb-2">{ label }</p>
            <input onChange={onChange} className="p-2 w-full border border-gray-400 rounded-lg" type={type} placeholder={placeholder}/>
        </div>
    )
}

export default LabelledInput