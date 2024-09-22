import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación

const Navbar = () => {
  const total = 25000; // Total estático
  const token = false; // Cambia esto según la lógica de autenticación

  return (
    <nav className="navbar navbar-expand-lg bg-black">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">Pizzería Mamma Mia!</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav box me-auto">
            <li className="nav-item me-3">
              <Link className="nav-link text-white border border-white rounded px-2 py-1" to="/">🍕Home</Link>
            </li>
            {token ? (
              <>
                <li className="nav-item me-3">
                  <Link className="nav-link text-white border border-white rounded px-2 py-1" to="/profile">🔓Profile</Link>
                </li>
                <li className="nav-item me-3">
                  <Link className="nav-link text-white border border-white rounded px-2 py-1" to="/logout">🔒Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item me-3">
                  <Link className="nav-link text-white border border-white rounded px-2 py-1" to="/login">🔐Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white border border-white rounded px-2 py-1" to="/register">🔐Register</Link>
                </li>
              </>
            )}
          </ul>
          <ul className="nav box">
            <li className="nav-item">
              <Link className="nav-link border border-white rounded px-2 py-1 active" to="/cart">
                🛒Total: ${total.toLocaleString()}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;