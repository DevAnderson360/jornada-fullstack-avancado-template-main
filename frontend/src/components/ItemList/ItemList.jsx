import Card from "../Card/Card";

function ItemList() {
    return (
        <div className='content container mb-3 mt-3'>
            <div className="row">
              <div className="col-3">
                <Card />
              </div>
              <div className="col-3">
                <Card />
              </div>
              <div className="col-3">
                <Card />
              </div>
              <div className="col-3">
                <Card />
              </div>
              <div className="col-3">
                <Card />
              </div>
            </div>
        </div>
    );
}

export default ItemList;