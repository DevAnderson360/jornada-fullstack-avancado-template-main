import MarcaOcean from "../../assets/brand.svg";
import "./Header.css"
import { Link } from "react-router-dom"

function Header(){
    return(
        <header className="cabecalho">
            <div className="container">
              <div className='row align-items-center'>
                <div className='col-1'>
                  <img src={MarcaOcean} alt="Ocean.ico" style={{height: 50}}/>
                </div>
                <div className='col-11'>
                  <Link className="link" to="/">Listar</Link>
                  <Link className="link" to="/cadastro">Adicionar Card</Link>
                </div>
              </div>
            </div>
        </header>
    );
};

export default Header;