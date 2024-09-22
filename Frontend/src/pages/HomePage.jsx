import React, { useEffect, useState } from 'react';
import CardPizza from '../components/CardPizza';

const Home = () => {

  const [pizzas, setPizza] = useState([])

  useEffect(() => {
    const fetchPizza = async () => {
    const response = await fetch('http://localhost:5000/api/pizzas')
    const data = await response.json ()
    setPizza(data)
    }
    fetchPizza ()
    }, [])
  

  return (
    <div className='titulo-principal'>
      <h1>Nuestras Pizzas</h1>
      <div className="pizza-list">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} /> 
          // Renderiza CardPizza por cada pizza
        ))}
      </div>
    </div>
  );
};

export default Home;