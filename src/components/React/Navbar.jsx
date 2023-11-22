import "./Navbar.css"

function Navbar () {
    return (
			<div className="navbar">
				<div className="navbar__logo">
					<a href="/">
						<img src="https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/logojust.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L2xvZ29qdXN0LnN2ZyIsImlhdCI6MTY5OTgyODc5MiwiZXhwIjoyMDE1MTg4NzkyfQ.uvmXpBARNtiYZgXeLMcA1rpVFWAwrpDUP--x8rEIS78"/>
					</a>
				</div>
				<div className="navbar__links">
					<a className="navbar__links--a" href="#">Servicios</a>
					<a className="navbar__links--a" href="/casos-de-estudio">Casos de Estudio</a>
					<a className="navbar__links--a" href="/sobre-nosotros">Sobre Nosotros</a>
					<a className="navbar__links--a" href="/contacto">Contacto</a>
					<a href="#">
						<button className="primary__button">Academy</button>
					</a>
				</div>
				
			</div>
    )
}

export default Navbar;