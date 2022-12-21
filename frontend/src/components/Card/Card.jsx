import API from '../../api/api';

function Card({ item }) {

  async function deleteItem(e) {
    const buttonEle = e.target;

    buttonEle.disabled = true;

    console.log(item._id);

    const req = await API.item.delete(item._id);

    if (req.status === 200) {
      alert("Item deletado com sucesso!");
      document.querySelector(`#item-${item._id}`).remove();
    }

    buttonEle.disabled = false;
  }

  return (
    <div className="col-md-3" id={`item-${item._id}`}>
      <div className="card mb-5">
        <img
          src={item.imageUrl}
          className='card-img-top border-bottom'
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.category.name}</p>
          
          <button
            onClick={deleteItem}
            type="button"
            className='btn btn-danger'>
            Remover
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card