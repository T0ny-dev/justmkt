import React, { useState } from "react";
import "./NavbarMobile.css";

function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar__mobile">
        <a href="/">
          <img className="navbar__logo"
            src="https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/logojust.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L2xvZ29qdXN0LnN2ZyIsImlhdCI6MTY5OTgyODc5MiwiZXhwIjoyMDE1MTg4NzkyfQ.uvmXpBARNtiYZgXeLMcA1rpVFWAwrpDUP--x8rEIS78"
            alt="logotipo Medicos Sin Fronteras"
          />
        </a>
        <img
          className="navbar__mobile--menu"
          src="https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/menu-bar.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L21lbnUtYmFyLnN2ZyIsImlhdCI6MTY5OTk5MDU5MCwiZXhwIjoxNzMxNTI2NTkwfQ.jwESIG105CaiiMbTaCAVLVFQolvDWRg8UbvPmQRNfBc&t=2023-11-14T19%3A36%3A30.354Z"
          alt="imagen de 3 barras Medicos Sin Fronteras"
          onClick={toggleMenu}
        />
      </div>
      {menuOpen && (
        <div className="navbar__mobile--menu--content">
          {/* Menu Mobile*/}
					<a className="navbar__links--a" href="#">Servicios</a>
					<a className="navbar__links--a" href="/casos-de-estudio">Casos de Estudio</a>
					<a className="navbar__links--a" href="/sobre-nosotros">Sobre Nosotros</a>
					<a className="navbar__links--a" href="/contacto">Contacto</a>
					<a href="#">
						<button className="primary__button">Academy</button>
					</a>
        </div>
        )}
    </>
  );
}

export default NavbarMobile;