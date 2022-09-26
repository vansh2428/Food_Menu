import Style from "./Recipie.module.css"


function Recipie(props){
    // console.log(props.ingredients)
    console.log(props)
    return (
<div className={Style.recipe}>
    <h1>{props.title}</h1>
    <ol>
        {props.ingredients.map(ing=>
        <li>{ing.text}</li>
        )}
    </ol>
    <p>{props.cal}</p>
    <img src={props.image} className={Style.image}/>
</div>


    )

}
export default Recipie