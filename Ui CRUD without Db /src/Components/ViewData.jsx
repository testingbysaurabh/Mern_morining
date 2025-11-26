import React, { useContext, useEffect } from 'react'
import { UseGlobalContext } from '../Utils/Mycontext'
import axios from 'axios';


const ViewData = () => {
    const { data, setData } = UseGlobalContext();
    useEffect(() => {

        async function getData() {

            const res = await axios.get("http://localhost:8080/api/data")
            // console.log(res.data)
            setData(res.data)
        } getData()

    }, [])

    return (
        <div className='w-[49vw] h-screen p-3 border'>
            {
                data && data.length > 0 ?
                    data.map((items, index) => {
                        return (
                            <div key={index}>
                                <p>{items.name}</p>
                                <p>{items.age}</p>
                                <p>{items.degination}</p>
                            </div>
                        )
                    })
                    :
                    <p>No data found</p>
            }
        </div>
    )

}

export default ViewData
