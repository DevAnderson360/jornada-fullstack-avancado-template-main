import { useEffect, useState } from "react";
import Card from "../Card/Card";

import API from '../../api/api';

function ItemList() {
  const [items, setItems] = useState([]);
  
  async function getItems(){
    const resp = await API.item.list();
    const respJson = await resp.json();

    setItems(respJson);
  }

  useEffect(function(){

    getItems();

  },[]);
  
  return (
    <div className='content container mb-3 mt-3'>
      <div className="row">
        {
          items.map(
            item => <Card key={item._id} item={item} />
          )
        }
      </div>
    </div>
  );
}

export default ItemList;