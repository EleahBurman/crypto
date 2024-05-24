"use client"

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Influencer(){
  const params = useParams();
  const [influencer, setInfluencer] = useState(undefined)
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
        setInfluencer(res)
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
    <main className="container text-center">
      <div className="row">
        <div className="main-col col d-flex flex-column justify-content-center">
          <h1>Crypto Patreon</h1>
          <p>Tip your favorite influencer!</p>
          {influencer ? (
            <ul className="list-group">
              <li className="list-group-item">Name: {influencer.name}</li>
              <li className="list-group-item">Description: {influencer.description}</li>
              <li className="list-group-item">Youtube Channel: {influencer.youtubeChannel}</li>
              <li className="list-group-item">Wallet: {influencer.wallet}</li>
              <li className="list-group-item">
                <button type="submit" className="btn btn-secondary">Pay</button>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </main>
  )
}