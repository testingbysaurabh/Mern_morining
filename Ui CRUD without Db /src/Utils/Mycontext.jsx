import React, { Children, createContext, useContext, useState } from 'react'


export const abc = createContext()
export const Mycontext = ({ children }) => {
    const [data, setData] = useState([])

    return (
        <abc.Provider value={{ data, setData }}>
            {children}
        </abc.Provider>
    )
}


export function UseGlobalContext() {
    return useContext(abc)
}

