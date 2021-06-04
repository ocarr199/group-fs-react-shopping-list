import Item from "../Item/Item";
import './ItemList.css';

function ItemList({itemList}) {
  return (
    <section class="itemList">
      <h3>Shopping List</h3>
      <button class="listButton btn btn-danger">Reset</button>&nbsp; &nbsp; 
      <button class="listButton btn btn-dark">Clear</button>
      <div>
          {itemList.map(item => (
            <Item key={item.id} item={item} />
          ))}
      </div>
    </section>
  ) // End return
} // End ItemList

export default ItemList;