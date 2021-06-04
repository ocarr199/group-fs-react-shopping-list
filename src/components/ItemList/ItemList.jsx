import Item from "../Item/Item";

function ItemList({itemList}) {
  return (
    <>
      <h3>Shopping List</h3>
      <div>
        <ul>
          {itemList.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </>
  ) // End return
} // End ItemList

export default ItemList;