import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Search.scss';
import { Link } from 'react-router-dom';
import StorefrontIcon from '@material-ui/icons/Storefront';
import { createAction } from '../../Redux/Action';
function Search() {
  const shoeItem = useSelector((item) => item.ShoesReducer.shoe);
  const search = useSelector((item) => item.ShoesReducer.search);
  const dispatch = useDispatch();

  const handleDetailShoe = (item) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    dispatch(createAction('ITEM-DETAIL', item));
  };
  const renderShoeSearch = () => {
    return shoeItem
      .filter((val) => {
        if (search === '') {
          return val;
        } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
          return val;
        }
      })
      .map((item) => {
        return (
          <React.Fragment>
            <div className="search__items__item">
              <Link
                to={`/shoe-detail/${item.id}`}
                onClick={() => handleDetailShoe(item)}
              >
                <div className="search__items__item__image">
                  <img src={item.linkImage} alt={`shoe${item.id}`} />
                </div>
              </Link>
              <div className="search__items__item__name">
                <h1>{item.name}</h1>
              </div>
              <div className="search__items__item__priceAndPriceDiscount">
                {item.priceDiscount === null ? (
                  <div className="search__items__item__priceAndPriceDiscount__price">
                    <span>
                      {item.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </span>
                    <div>
                      <StorefrontIcon />
                    </div>
                  </div>
                ) : (
                  <div className="search__items__item__priceAndPriceDiscount__priceDiscount">
                    <div>
                      <del>
                        {item.priceDiscount.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </del>
                      <span>
                        {item.price.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </span>
                    </div>
                    <div>
                      <StorefrontIcon />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </React.Fragment>
        );
      });
  };
  return (
    <div className="search">
      <div className="search__items">{renderShoeSearch()}</div>
    </div>
  );
}

export default Search;
