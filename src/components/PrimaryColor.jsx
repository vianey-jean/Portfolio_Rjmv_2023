import React from 'react'
import { useDispatch } from 'react-redux'
import { handlePrimary } from '../store/themeSlice'

const PrimaryColor = ({ className }) => {
  const dispatch = useDispatch()
  return (
    <button
      className={`${className}`}
      onClick={() => dispatch(handlePrimary(className))}
    ></button>
  )
}

export default PrimaryColor
