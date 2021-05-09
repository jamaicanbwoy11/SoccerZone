import React from 'react';
import { useSelector } from 'react-redux';
import './Shoe.scss';
import StorefrontIcon from '@material-ui/icons/Storefront';
function Shoe() {
  const shoeItem = useSelector((state) => state.ShoesReducer.shoe);
  const renderListShoe = () => {
    return shoeItem
      .filter((item) => item.type === 1)
      .slice(0, 10)
      .map((item) => {
        return (
          <div key={item.id} className="shoe__items__item">
            <div className="shoe__items__item__image">
              <img src={item.linkImage} alt={`img-shoe${item.id}`} />
            </div>
            <div className="shoe__items__item__name">
              <h3>{item.typeName}</h3>
              <h1>{item.name}</h1>
            </div>
            <div className="shoe__items__item__price">
              <div className="shoe__items__item__price__money">
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
              <div className="shoe__items__item__price__iconCard">
                <StorefrontIcon />
              </div>
            </div>
          </div>
        );
      });
  };
  //Render Clothes
  const renderListClothes = () => {
    return shoeItem
      .filter((item) => item.type === 2)
      .slice(0, 10)
      .map((item) => {
        return (
          <div key={item.id} className="shoe__items__item">
            <div className="shoe__items__item__image">
              <img src={item.linkImage} alt={`img-shoe${item.id}`} />
            </div>
            <div className="shoe__items__item__name">
              <h3>{item.typeName}</h3>
              <h1>{item.name}</h1>
            </div>
            <div className="shoe__items__item__price">
              <div className="shoe__items__item__price__money">
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
              <div className="shoe__items__item__price__iconCard">
                <StorefrontIcon />
              </div>
            </div>
          </div>
        );
      });
  };
  return (
    <div className="shoe">
      <h1>BASKETBALL SHOES</h1>
      <div className="shoe__items">{renderListShoe()}</div>
      <h1 className="shoe__titleClothes">BASKETBALL CLOTHES</h1>
      <div className="shoe__items">{renderListClothes()}</div>
    </div>
  );
}

export default Shoe;
