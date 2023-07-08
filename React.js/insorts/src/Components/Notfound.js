
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Notfound() {
  const navigate = useNavigate();
  useEffect(()=>{
   setTimeout(()=>{
    navigate(-1)
   },1000) 
  })
  return (
    <h1>Not Found</h1>
  )
}
