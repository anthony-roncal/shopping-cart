import '../styles/Shop.css';
import Item from './Item';

const Shop = () => {
  return (
    <div className="shop">
        <h2>Shop</h2>
        <div className="item-container">
          <Item name='test1' />
          <Item name='test2' />
          <Item name='test3' />
          <Item name='test4' />
          <Item name='test5' />
          <Item name='test6' />
          <Item name='test7' />
          <Item name='test8' />
          <Item name='test9' />
          <Item name='test10' />
        </div>
    </div>
  );
}

export default Shop;
