import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './ShoeDetail.scss';
// import StorefrontIcon from '@material-ui/icons/Storefront';
function ShoeDetail(props) {
  const shoeDetail = useSelector((item) => item.ShoesReducer.shoe);
  const player = useSelector((state) => state.ShoesReducer.player);
  const idParams = props.match.params.id;

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
                    <div className="shoeDetail__items__item__image__detail__imageDetail">
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
            </div>
          </div>
        );
      });
  };
  return (
    <div className="shoeDetail">
      <div className="shoeDetail__items">{renderShoeDetail()}</div>{' '}
      <h1 className="shoeDetail__titlePlayer">SELECT YOUR PLAYER</h1>
      <div className="shoeDetail__player">{renderPlayer()}</div>
    </div>
  );
}

export default ShoeDetail;
