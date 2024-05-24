"use client"

import { useParams } from 'next/navigation'
export default function Influencer(){
  const params = useParams()
  console.log(params.id)
  return(
    <div>Hi, I am an influencer</div>
  )
}