import React, {useState} from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
  return(
  <div className={style.recipe}>
    <h1>{title}</h1>
    <section className={style.about}>
  <img src={image} alt="{title}" className={style.image} />
  <aside className={style.nutrition}>
  <p>Calories per serving:{' '+Math.floor(calories)}</p>
  </aside>
  </section>
  <ul className={style.ingredients}>{ingredients.map(ingredient=>(
  <li className={style.ingredient}><input type="checkbox" className={style.checkbox}/><span>{ingredient.text}</span></li> ))}
  </ul>
  </div>
);
};

export default Recipe;
