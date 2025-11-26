import axios from 'axios'
import React, { useState } from 'react'
import { UseGlobalContext } from '../Utils/Mycontext'

const Data = () => {
    const [name, setName] = useState("")
    const [age, SetAge] = useState(0)
    const [degination, setDegination] = useState("")
    const { data, setData } = UseGlobalContext();
    // console.log(name,age,degination)



    function SubmitbtnHandler() {

        async function PostData(params) {
            if (!name || !age || !degination) {
                alert("enter all field")
                return
            }
            try {
                //  let abc={name, age, degination }
                const res = await axios.post("http://localhost:8080/api/adddata", { name, age, degination }, {})
                // setData(...Data, { name, age, degination })
                setName("")
                setDegination("")
                SetAge(0)
            } catch (error) {
                console.log(error.message)
            }
            console.log("btnClicked")
        } PostData()

    }

    return (
        <div className='w-[49vw] h-screen p-3 border'>
            <div className='flex flex-col mx-2 gap-3'>
                <input onBlur={(e) => setName(e.target.value)} placeholder=' Enter name ' className='border' type="text" />
                <input onBlur={(e) => SetAge(e.target.value)} placeholder=' Enter age' className='border' type="number" min="5" max="130" />
                <input onBlur={(e) => setDegination(e.target.value)} placeholder=' Enter desiganation' className='border' type="text" />
                <button onClick={SubmitbtnHandler} className='rounded w-[30%] bg-green-400'>SubMit</button>
            </div>
        </div>
    )
}

export default Data
