import { useState, useEffect} from "react"

export default function Timer() {
    const [seconds, setSeconds] = useState(0)
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <h2>{seconds}</h2>
    )
}