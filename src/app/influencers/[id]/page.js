"use client"

import { useParams } from 'next/navigation'
import { useEffect } from 'react'

export default function Influencer(){
  const params = useParams();
  
  useEffect(()=>{
    const init = async () => {
      try{
        const response = await fetch(
          `/influencers/${params.id}/api`,
          {
            method: "GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          }
        )
        const res = await response.json();
        console.log(res, "whats the response")
        if(response.ok){
          //setFeedback({status: "success", message: res.message})
        }else{
          //setFeedback({status: "danger", message: res.message})
        }
      }catch(e){
        console.log(e)
        //setFeedback({status: "danger", message: e.message})
      }
    }
    init();
  }, [params.id]);

  return(
    <div>Hi, I am an influencer</div>
  )
}