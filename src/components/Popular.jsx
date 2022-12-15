import { useEffect, useState } from "react";
// import styled from "styled-components";

function Popular() {

const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);
  
  const getPopular = async () => {
  const check = localStorage.getItem('diets');

  if(check) {
    setPopular(JSON.parse(check));
    console.log(check);
  }else {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    const data = await api.json();
    localStorage.setItem('diets', JSON.stringify(data.recipes));
    setPopular(data.recipes)
    console.log(data)
  }
}

  return(
    <div>
            <h3>Popular Picks</h3>
            {popular.map((recipe) => {
              return(
                <div>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title}></img>
                </div>
              )
            })}
    </div>
  )
}

export default Popular