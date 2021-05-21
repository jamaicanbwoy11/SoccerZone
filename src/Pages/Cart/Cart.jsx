import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import './Cart.scss';
function Cart() {
  const cartArr = useSelector((item) => item.ShoesReducer.cart);
  //Render Cart
  const renderCart = () => {
    return cartArr.map((item) => {
      return (
        <React.Fragment>
          <tr className="cart__items__item" key={item.id}>
            <td className="cart__items__item__product">
              <div className="cart__items__item__product__image">
                <img src={item.linkImage} alt={`cart-${item.id}`} />
              </div>
              <h1>{item.name}</h1>
            </td>
            <td>Grey</td>
            <td>
              {item.sizeShoes
                .filter((item) => item.check === true)
                .map((sizeTrue) => {
                  return <React.Fragment>{sizeTrue.size}</React.Fragment>;
                })}
            </td>
            <td className="cart__items__item__amount">
              <div>
                <NavigateBeforeIcon />
              </div>
              <span>1</span>
              <div>
                <NavigateNextIcon />
              </div>
            </td>

            <td>
              {item.priceDiscount === null ? (
                <div>
                  {item.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </div>
              ) : (
                <div>
                  {item.priceDiscount.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </div>
              )}
            </td>
            {/* <div className="cart__items__item__remove">
              <HighlightOffIcon />
            </div> */}
          </tr>
        </React.Fragment>
      );
    });
  };
  return (
    <div className="cart">
      <div className="cart__title">
        <h1>Your Shoppping Cart</h1>
        <Link
          to="/"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          <button>Continue Shopping</button>
        </Link>
      </div>
      <div className="cart__items">
        <table id="products">
          <thead>
            <tr>
              <th>Products</th>
              <th>Color</th>
              <th>Size</th>
              <th>Amount</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{renderCart()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
