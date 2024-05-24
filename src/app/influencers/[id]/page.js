"use client"

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Influencer(){
  // const [id, setId]= useState(undefined);
  const params = useParams();
  
  useEffect(()=>{
    const init = async () => {
      try{
        const response = await fetch(
          "/influencers/api",
          {
            method: "GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
          }
        )
        const res = await response.json();
        if(response.ok){
          setFeedback({status: "success", message: res.message})
        }else{
          setFeedback({status: "danger", message: res.message})
        }
      }catch(e){
        setFeedback({status: "danger", message: e.message})
      }
    }
    init();
  }, [params.id]);

  return(
    <div>Hi, I am an influencer</div>
  )
}