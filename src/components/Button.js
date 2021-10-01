import React from 'react'

export default function Button({ title, color}) {

  return (
    <button
    type="submit"
    style={{
      backgroundColor:color,
      color:'#fff',
      padding:5
    }}>{title}</button>
  )
}
