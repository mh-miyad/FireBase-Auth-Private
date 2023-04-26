import React, { useContext } from 'react'
import { UserProvider } from '../Auth/AuthProvider'

const Home = () => {

  const user = useContext(UserProvider)
  return (
    <div>

      {
        user && <>
             <p> Ki Obostha </p>
        </>
      }
    </div>
  )
}

export default Home