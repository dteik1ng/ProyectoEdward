import React from "react";
import "./Css/CardsStyle.css";
import logo from "../../img/logo.png";


const Card = () => {
  const cardDetails = {
    area: "420 m2",
    habitaciones: 3,
    banos: 2,
    price: "1'200.000",
    propietario: "Juan David",
    tipo: "Cabaña de lago",
  };
  return (
    <div className="card">
      <div>
        <img className="image" src={logo} alt="Imagen de muestra" />
      </div>
      <div className="body">
        <h2>${cardDetails.price} Por Noche</h2>
        <h4>Cocorná, Antioquia</h4>
        <p>{`${cardDetails.area} | ${cardDetails.habitaciones} Habitaciones | ${cardDetails.banos} Baños |`}</p>
      </div>
      <div className="foot">
        <p>{`${cardDetails.tipo}`}</p>
        <p>
          Por <span className="propietario">{cardDetails.propietario}</span>
        </p>
      </div>
      <div className="button-container">
        <button className="button">Reservar</button>
      </div>
    </div>
  );
};

export default Card;
