import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

    function Github() {
        const [data , setData] = useState([])
        useEffect(() =>{
         fetch ('https://api.github.com/users/syedabdd')
         .then (res => res.json())
         .then (data => {
             console.log(data);
             setData(data)
         })
        }) 

  return (
    <div className='bg-wheet-600 text-center m-4 text-ehite p-4 text-3xl'> 
      Github Followers : {data.followers}
      <div className='flex justify-center my-3 '>
      <img className=' rounded-full' src={data.avatar_url} alt=""  width={300}/>
      </div>
    </div>
  )
}

export default Github
