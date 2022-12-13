import ImgLogoOcean from '../../assets/brand.svg';

import "./Header.css";

function Header() {
    return (
        <header className='cabecalho'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-2">
                        <img src={ImgLogoOcean} alt="logo-marca da ocean" style={{ height: 50 }} />
                    </div>
                    <div className="col-10">
                        <a href="#" className='link'>Link 1</a>
                        <a href="#" className='link'>Link 2</a>
                        <a href="#" className='link'>Link 3</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;