import { useState } from 'react'
import keywordsData from "../assets/data/keywords.json"
import '../assets/css/keywords.css';

function Keywords() {
  const getKeywords = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    const data = await api.json();
    console.log(data);
  }

  const [onHover, setOnHover] = useState(false)


  return (
    <div className="keywords-wrapper"
    >
      {keywordsData.map((e) => {
        return(
          <p 
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
          className={onHover ? "blue" : "keyword"} key={e.id} >{e.keyword}</p>
        )
      })}
    </div>
  )
}

export default Keywords;