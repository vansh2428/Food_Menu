import './App.css';
import {useEffect , useState} from "react";
import Recipie from './Recipie';


function App() {

  const [recepies,setrecipes]=useState([])
// console.log(recepies)
const [search,setsearch]=useState("")
const [query,setquery]=useState("")

const submithandler =(e)=>{
  e.preventDefault()
  setquery(search)
  setsearch("")
}

  const APP_ID = 'dc34792b';
  const APP_KEY = '3eab1a651f78f58e8b394f905f3efa21'

useEffect(()=>{
getrecepies()
},[query])



const getrecepies= async ()=>{
  const responce = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data= await responce.json()
  setrecipes(data.hits)
  // console.log(data.hits)
    
}







  return (
    <div className="App">
    <form className='search-form' onSubmit={submithandler}>
      <input type="text" className='search-bar' value={search} onChange={(e=> setsearch(e.target.value))}/>
      <button type='submit' className='search-button'>search</button>
    </form>
    {
      recepies.map((rec,i)=>{
     return   <Recipie 
        key={i}
        title={rec.recipe.label}
        image={rec.recipe.image}
        ingredients={rec.recipe.ingredients}
        cal={rec.recipe.calories}

        />
      }
      )
    }
    

    </div>
  );
}

export default App;
