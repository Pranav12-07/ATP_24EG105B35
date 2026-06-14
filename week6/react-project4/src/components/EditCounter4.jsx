import { useContext } from "react"
import { counterContextObj } from "../contexts/ContextProvider"


function EditCounter4() {
    const {counter,increment,decrement}=useContext(counterContextObj)
  return (
    <div className="bg-sky-300 p-4 rounded">
        <h1 className="text-xl mb-2">EditCounter4</h1>
        <p className="mb-2">Count: {counter}</p>
        <button className="bg-red-500 text-white px-4 py-2 m-2 rounded"  onClick={increment}>+</button>
        <button className="bg-red-500 text-white px-4 py-2 m-2 rounded"  onClick={decrement}>-</button>
    </div>
  )
}

export default EditCounter4