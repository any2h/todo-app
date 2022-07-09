import { useRef, useEffect } from 'react'

export function usePrevios(value) {
    const ref = useRef()
    useEffect(() => {
        ref.current = value
    })
    return ref.current
}
