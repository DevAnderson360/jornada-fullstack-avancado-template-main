function Card() {
    return (
        <div className="col-3">
            <div className="card mb-3">
                <img src="https://picsum.photos/300/200" alt="..." className='card-img-top' />
                <div className="card-body">
                    <h5 className="card-title">Nome do Item</h5>
                    <p className="card-text">Categoria
                    </p>
                    <a href="#" className='btn btn-danger'>
                        Remover
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;