import Ingredient from "./Ingredient";

const Recipe = (props) => {
    console.log(`props.title`, props.title);
    console.log(`props.ingredientList`, props.ingredientList);
  
    return (
      <div>
          <h2 className="recipe">Recipe for: {props.title}</h2>
          <div>
            <h3>List of Ingredients</h3>
            <ul>
            {props.ingredientList.map((item,index) => {
                return <Ingredient name={item} parentName={props.title}/>
            })}
            </ul>
          </div>
      </div>
    )
};

export default Recipe;
