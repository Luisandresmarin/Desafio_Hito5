import React, { useState, useEffect } from 'react'; 
import { pizzaCart } from '../pizzas'; 


const Cart = () => {
  const [cart, setCart] = useState(pizzaCart); // Inicializa el carrito con pizzaCart
  const [total, setTotal] = useState(0);       //Inicializa el estado del total a 0

  // Calcula el total cada vez que cart cambie
  useEffect(() => {
    calcularTotal();
  }, [cart]);

  const calcularTotal = () => {
    let totalPizza = 0;
    cart.forEach((pizza) => {
      totalPizza += pizza.price * pizza.count; 
    });
    setTotal(totalPizza);
  };

  const handleIncrement = (id) => {
    const updatedCart = cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 }; 
      }
      return pizza;// retorna la pizza sin cambios ojo!!!
    });
    setCart(updatedCart); // Actualiza el estado del carrito
  };

  const handleDecrement = (id) => {
    const updatedCart = cart.map((pizza) => {
      if (pizza.id === id) {
        const newCount = pizza.count - 1; // Disminuye la cantidad
        if (newCount <= 0) {
          return null; // Elimina la pizza si la cantidad es 0
        }
        return { ...pizza, count: newCount }; // Retorna la pizza con la nueva cantidad
      }
      return pizza; // Retorna la pizza sin cambios
    }).filter(pizza => pizza !== null); // Filtra las pizzas eliminadas
    setCart(updatedCart); // Actualiza el estado del carrito
  };

  return (
    <div className='homecart'>
      <h1>Carrito de compras</h1>
      {cart.map((pizza) => (
        <div key={pizza.id} className="pizza-item">
          <img src={pizza.img} alt={pizza.name} style={{ width: '100px' }} />
          <h2>{pizza.name}</h2>
          <p>Precio: ${pizza.price}</p>
          <p>Cantidad: {pizza.count}</p>
          <button onClick={() => handleDecrement(pizza.id)}> - </button>
          <button onClick={() => handleIncrement(pizza.id)}> + </button>
        </div>
      ))}
      <h2>Total: ${total}</h2> {/* Mostrar el total */}
  
    </div>
  );
};

export default Cart;