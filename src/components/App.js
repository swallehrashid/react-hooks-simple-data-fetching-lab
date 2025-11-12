// create your App component here
import React, {useState, useEffect} from 'react'

function App() {
    const [imageLink, setImageLink] = useState("")
    const [isLoaded, setIsLoaded]=useState(true)
    
  

  useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
     .then((res)=>res.json())
     .then((data)=> {
        setImageLink(data.message)
        setIsLoaded(false)
     })
  },[])

    if(isLoaded) {
    return <p>Loading...</p>
    }
  return (
    <div>
      <img src={imageLink} alt= "A Random Dog"/>
    </div>
  )
}

export default App
