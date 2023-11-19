import { useEffect, type RefObject } from 'react'

// Specify the type for the callback function
type CallbackFunction = () => void

export const useClickOff = (
  ref: RefObject<HTMLElement>, // Specify the type for ref
  callback: CallbackFunction // Specify the type for callback
): void => {
  useEffect(() => {
    // Type the event parameter in the handleClickOutside function
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])
}
