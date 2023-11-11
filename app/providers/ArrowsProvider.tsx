import { createContext, useState } from "react"

export const ArrowsContext = createContext([])

export const ArrowsProvider = ({ children }) => {
    const [arrows, setArrows] = useState([])
    return (
        <ArrowsContext.Provider value={{ arrows, setArrows }}>
            { children }
        </ArrowsContext.Provider>
    )
}

export default ArrowsProvider