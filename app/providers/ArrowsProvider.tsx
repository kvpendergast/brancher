import { createContext, useState } from "react"

export const ArrowsContext = createContext([])

export const ArrowsProvider = ({ children }) => {
    const [arrows, setArrows] = useState([])
    const [nodes, setNodes] = useState([])
    return (
        <ArrowsContext.Provider value={{ arrows, setArrows, nodes, setNodes }}>
            { children }
        </ArrowsContext.Provider>
    )
}

export default ArrowsProvider