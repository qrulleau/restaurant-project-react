import React, { useState } from 'react';
import Header from '../components/header';

import Burger from '../assets/menu/burger.jpg'
import Burger1 from '../assets/menu/burger1.jpg'
import Dessert from '../assets/menu/dessert.jpg'
import Dessert2 from '../assets/menu/dessert2.jpg'
import Dessert3 from '../assets/menu/dessert3.jpg'
import Salade from '../assets/menu/salade.jpg'
import Specialite from '../assets/menu/specialite.jpg'
import Specialite1 from '../assets/menu/specialite1.jpg'
import Specialite2 from '../assets/menu/specialite2.jpg'
import Specialite3 from '../assets/menu/specialite3.jpg'
import Specialite4 from '../assets/menu/specialite4.jpg'
import Specialite5 from '../assets/menu/specialite5.jpg'

const mealsData = [
  { id : 1, category : 'burger', name : 'Black angus', image : Burger, price : '17.50$'},
  { id : 2, category : 'burger', name : 'The montagnard', image : Burger1, price : '15.00$'},
  { id : 3, category : 'dessert', name : 'White lady', image : Dessert, price : '6.00$'},
  { id : 4, category : 'dessert', name : 'Blueberry tart', image : Dessert2, price : '4.00$'},
  { id : 5, category : 'dessert', name : 'Strawberry crepe', image : Dessert3, price : '5.80$'},
  { id : 6, category : 'salade', name : 'Chicken salade', image : Salade, price : '8.00$'},
  { id : 7, category : 'speciality', name : 'Egg benedict', image : Specialite, price : '12.00$'},
  { id : 8, category : 'speciality', name : 'Pan of scallops', image : Specialite1, price : '11.99$'},
  { id : 9, category : 'speciality', name : 'Peach carpaccio', image : Specialite2, price : '18.00$'},
  { id : 10, category : 'speciality', name : 'Veal stew', image : Specialite3, price : '14.10$'},
  { id : 11, category : 'speciality', name : 'Tomato soupe', image : Specialite4, price : '16.99$'},
  { id : 12, category : 'speciality', name : 'Salmon soupe', image : Specialite5, price : '20.00$'},
]

function Menu() {

  const [ selectedCategory, setSelectedCategory ] = useState('all');

  const filterMeals = (category) => {
    setSelectedCategory(category);
  };

  const filteredMeals = selectedCategory === 'all'
    ? mealsData
    : mealsData.filter((meal) => meal.category === selectedCategory)

  return (
    <div className='menu'>
      <Header className="border" background={false} />
      <div className="content">
        <h2>Menu</h2>
        <div className="d-flex">
          <button onClick={() => filterMeals('all')}>All</button>
          <button onClick={() => filterMeals('burger')}>Burger</button>
          <button onClick={() => filterMeals('salade')}>Salade</button>
          <button onClick={() => filterMeals('dessert')}>dessert</button>
          <button onClick={() => filterMeals('speciality')}>Speciality</button>
        </div>
        <div className="meals-container">
          <div className="d-flex flex-wrap">
            {filteredMeals.map((meal) => (
              <div className="meal-item">
                <img src={meal.image} alt="" />
                <div className="description">
                  <h4 className='white'>{meal.price}</h4>
                  <h3 className='white'>{meal.name}</h3>
                </div>
              </div>
            ))}
         </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;