// import { getRecommendedUsers } from '@/actions/getRecommendedUsers'
import React from 'react'



interface IProps { 
    params:{
        username: string
    }
}
const UserPage = ({params}:IProps) => {
    // getUserByUsername
    // getRecommendedUsers()
    // check if Following 


    // Throw 404 if there is not user found
  return (
    <div>Username : {params.username}</div>
  )
}

export default UserPage