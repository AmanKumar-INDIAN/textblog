interface LabelProps {
    label:string,
    placeholder:string,
    onchange:(e:any)=>void,
    type?:string
}

function LabelInput({label,placeholder,type,onchange}:LabelProps) {
  return (
    <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 ">{label}</label>
    <input type={type}  id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required  onChange={onchange}/>
  </div>
  )
}

export default LabelInput