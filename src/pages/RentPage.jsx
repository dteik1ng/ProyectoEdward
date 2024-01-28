import React from "react";
import Logo from "../../img/logo.png";
import "./css/RentPage.css";

const RentPage = () => {
  const description = {
    lugar: "Las Lomas, El Poblado",
    area: "420 m2",
    habitaciones: 3,
    banos: 2,
    garaje: 1,
    price: "1'200.000",
    propietario: "Juan David",
    tiempo: "2 Años",
    tipo: "Cabaña de lago",
    details:
      "lorem asdnajsdja sckj aksjdokansodkask oamso imdasomoa ksmd kmasko mdaoskm dokmas okmokd maskodm aoksmdk ",
  };

  return (
    <div className="container">
      <h2 className="title">¡Increible casa en el Poblado!</h2>
      <div className="img-container">
        <img src={Logo} alt="" />
      </div>
      <div className="details">
        <h2>{description.lugar}</h2>
        <h4>{`${description.area} | ${description.habitaciones} Habitaciones | ${description.banos} Baños | ${description.garaje} Garaje`}</h4>
        <p>{description.details}</p>
        <hr />
        <div className="propietario">
          <img src={Logo} alt="" />
          <p>Dueño: <span>{description.propietario}</span></p>
          <p>Anfitrión hace: <span>{description.tiempo}</span></p>
          <div className="button">
            <button>Visitar Perfil</button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default RentPage;
