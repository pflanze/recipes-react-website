import React, {useState} from 'react';
import style from './recipe.module.css';

let currentId= 0;
const nextMId = () => "M" + currentId++
// using "M" as a 'namespace' to hopefully avoid potential conflicts


const Ingredient = ingredient => {
    const id= nextMId();
    return (
        <li className={style.ingredient}>
        <input id={id} type="checkbox" className={style.checkbox}/>
        <label for={id}>{ingredient.text}</label>
        </li>
    )
}

const Label = text => (
        <li className={style.text}>
        <span>{text}</span>
        </li>
)


const Recipe = ({title, calories, image, ingredients, healthLabels }) => {
    return(
    <div className={style.recipe}>
    <h1>{title}</h1>
    <section className={style.about}>
  <img src={image} alt="{title}" className={style.image} />
  <aside className={style.nutrition}>
            <p>Health labels:{ healthLabels.map(Label) }</p>
  <p>Calories per serving:{' '+Math.floor(calories)}</p>
  </aside>
  </section>
    <ul className={style.ingredients}>{ingredients.map(Ingredient)}
  </ul>
  </div>
    );
};

export default Recipe;
