import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createAction } from '../../Redux/Action';
import StorefrontIcon from '@material-ui/icons/Storefront';
import './ShoeDetail.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ADD_TO_CART, ITEM_DETAIL } from '../../Redux/Constants';
// import StorefrontIcon from '@material-ui/icons/Storefront';
function ShoeDetail(props) {
  const shoeDetail = useSelector((item) => item.ShoesReducer.shoe);
  const player = useSelector((state) => state.ShoesReducer.player);
  const shoeDetailRedux = useSelector((state) => state.ShoesReducer.shoeDetail);
  const idParams = props.match.params.id;

  const dispatch = useDispatch();
  //Dispatch Shoe In Store Redux
  const handleShoeDetail = (item) => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`,
    });
    dispatch(createAction(ITEM_DETAIL, item));
  };
  //Render Player
  const renderPlayer = () => {
    return player.map((item) => {
      return (
        <div key={item.id} className="shoe__items__player">
          <div className="shoe__items__player__image">
            <Link
              to={`/${item.idType}`}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: `smooth`,
                })
              }
            >
              <img src={item.linkImage} alt={`player-${item.idType}`} />
            </Link>
          </div>
        </div>
      );
    });
  };

  //Handle Add To Cart
  const handleAddToCart = (item) => {
    dispatch(createAction(ADD_TO_CART, item));
  };
  //Render Shoe Detail
  const renderShoeDetail = () => {
    return shoeDetail
      .filter((item) => item.id === Number(idParams))
      .map((item) => {
        return (
          <div key={item.id} className="shoeDetail__items__item">
            <div className="shoeDetail__items__item__image">
              <img src={item.linkImage} alt={`img-shoe${item.id}`} />
              <div className="shoeDetail__items__item__image__detail">
                {/* if Image Detail DEFINE MAP  */}
                {item.imageDetail?.map((imageDetail) => {
                  return (
                    <div
                      key={imageDetail.id}
                      className="shoeDetail__items__item__image__detail__imageDetail"
                    >
                      <img
                        src={imageDetail.linkImage}
                        alt={`detail-${imageDetail.id}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="shoeDetail__items__item__name">
              <h1>{item.name}</h1>
              <h3>{item.typeName}</h3>
              <p>
                Price:
                <span className="shoeDetail__items__item__name__price">
                  {item.priceDiscount === null ? (
                    <span className="price">
                      {item.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </span>
                  ) : (
                    <span className="priceDiscount">
                      <del>
                        {item.price.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </del>
                      <span>
                        {item.priceDiscount.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </span>
                    </span>
                  )}
                </span>
              </p>
              <div className="shoeDetail__items__item__name__addToCart">
                <p onClick={() => handleAddToCart(item)}>ADD TO CART</p>
                <div>
                  <ShoppingCartIcon />
                </div>
              </div>
            </div>
          </div>
        );
      });
  };

  const renderOtherShoes = () => {
    return shoeDetail
      .filter(
        (item) =>
          item.brand === shoeDetailRedux.brand &&
          item.type === shoeDetailRedux.type
      )
      .slice(1, 7)
      .map((item) => {
        return (
          <div key={item.id} className="shoeDetail__other__item">
            <Link
              to={`/shoe-detail/${item.id}`}
              onClick={() => handleShoeDetail(item)}
            >
              <div className="shoeDetail__other__item__image">
                <img src={item.linkImage} alt={`shoe-${item.id}`} />
              </div>
            </Link>
            <div className="shoeDetail__other__item__name">
              <h1>{item.name}</h1>
            </div>
            <div className="shoeDetail__other__item__price">
              <div className="shoeDetail__other__item__price__money">
                {item.priceDiscount === null ? (
                  <span>
                    {item.price.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}
                  </span>
                ) : (
                  <div>
                    <del>
                      {item.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </del>
                    <span>
                      {item.priceDiscount.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </span>
                  </div>
                )}
              </div>
              <div className="shoeDetail__other__item__price__iconCard">
                <StorefrontIcon />
              </div>
            </div>
          </div>
        );
      });
  };
  return (
    <div className="shoeDetail">
      <div className="shoeDetail__items">{renderShoeDetail()}</div>{' '}
      <h1 className="shoeDetail__titleOther">Other shoes</h1>
      <div className="shoeDetail__other">{renderOtherShoes()}</div>
      <h1 className="shoeDetail__titlePlayer">SELECT YOUR PLAYER</h1>
      <div className="shoeDetail__player">{renderPlayer()}</div>
    </div>
  );
}

export default ShoeDetail;
