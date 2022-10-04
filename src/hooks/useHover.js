import {useState, useEffect, useRef} from "react"

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
   
    
    function enter() {
        setHovered(true)
    }
    
    function leave() {
        setHovered(false)
    }
    
    useEffect(() => {
        const myref = ref.current
        myref.addEventListener("mouseenter", enter)
        myref.addEventListener("mouseleave", leave)
        
        return () => {    
            myref.removeEventListener("mouseenter", enter)
            myref.removeEventListener("mouseleave", leave)
        }
    }, [])
    
    return [hovered, ref]
}

export default useHover