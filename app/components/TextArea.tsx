import React, { useEffect, useRef, useState } from 'react'

interface TextAreaProps {
  onTextChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
}

export default function TextArea ({ onTextChange, placeholder }: TextAreaProps): JSX.Element {
  const [value, setValue] = useState('')
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'auto'
      ref.current.style.height = `${ref.current.scrollHeight}px`
    }
  }, [value])

  function handleOnChange (e: React.ChangeEvent<HTMLTextAreaElement>): void {
    if (onTextChange) onTextChange(e)
    setValue(e.target.value)
  }

  return (
        <textarea
            ref={ref}
            onChange={handleOnChange}
            placeholder={placeholder}
            className='overflow-y-hidden resize-none bg-transparent text-white border-0 outline-none text-center'
        />
  )
}
