import axios from "axios"
import { useState } from "react"
import Main from "../main"
import Header from "../header"

function GetPerfil() {
   const [perfil , setPerfil] = useState([])
   const [repos, setRepos] = useState([])
   const [userInput, setUserInput] = useState("mariana549")

   const axiosData = async (user) => {
      try {
         const baseUrl = `https://api.github.com/users/${user}`
         const response = await axios.get(`${baseUrl}`)
         const data = response.data

         const reposUrl = data.repos_url
         const getRepos = await axios.get(`${reposUrl}`)
         const getReposData = getRepos.data

         setPerfil(data)
         setRepos(getReposData)
      } catch (error) {
         console.error(`Error fetching GitHub: ${error.message}`)
      }
      
   }

   const getUser = (user) => {
      setUserInput(user)
      axiosData(userInput)
   }
   
   return (
      <>
         <Header 
            github={perfil.html_url}
            getUser={getUser}
         />
         <Main 
            name={perfil.name} bio={perfil.bio} foto={perfil.avatar_url}
            repos={repos}
         />
      </>
   )
}

export default GetPerfil