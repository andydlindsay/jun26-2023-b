function Ingredient(props) {
  
    return (
      <div>
          <span className="ingredient">Ingredient: {props.name} <em>{props.parentName}</em></span>
      </div>
    )
  }
  
  export default Ingredient;
  