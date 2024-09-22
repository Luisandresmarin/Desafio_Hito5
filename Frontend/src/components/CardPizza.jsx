import React from 'react';

const CardPizza = ({ pizza }) => {
  
  const handleError = (e) => {
    e.target.src = 'ruta/a/imagen/predeterminada.jpg'; // Cambia la imagen predeterminada en la tarjeta (acuerdate!)
  };

  return (
    <div className="card-pizza">
      <img src={pizza.img} alt={pizza.name} onError={handleError} />
      <h2>{pizza.name}</h2>
      <p>{pizza.desc}</p>
      <h4>Ingredientes:</h4>
      <ul>
        {pizza.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li> // identificador único
        ))}
      </ul>
      <p>Precio: ${pizza.price}</p>
      <button className="btn btn-outline-dark" style={{ fontSize: 'small' }}>
        <span className="material-icons"></span> Ver más 👀
      </button>
      <button className="btn btn-dark" style={{ fontSize: 'small' }}>
        <span className="material-icons"></span> Añadir 🛒
      </button>
    </div>
  );
};

export default CardPizza;
