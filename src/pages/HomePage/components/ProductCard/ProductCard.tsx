import { Product } from '../../../../types/Product';
import './ProductCard.scss';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, price, screen, capacity, ram, image } = product;

  const wishlistIconPath = './icons/heart-black.svg';

  return (
    <article className="product">
      <img src={image} className="product__image" alt="Image of the product" />
      <h3 className="product__name">{name}</h3>
      <p className="product__price">${price}</p>

      <div className="details product__details">
        <div className="detail details__detail">
          <p className="detail__title">Screen</p>
          <p className="detail__info">{screen}</p>
        </div>
        <div className="detail details__detail">
          <p className="detail__title">Capacity</p>
          <p className="detail__info">{capacity}</p>
        </div>
        <div className="detail details__detail">
          <p className="detail__title">RAM</p>
          <p className="detail__info">{ram}</p>
        </div>
      </div>

      <div className="buttons">
        <button className="buttons__cart">Add to cart</button>
        <button className="wishlist-button buttons__wishlist">
          <img
            className="wishlist-button__icon"
            src={wishlistIconPath}
            alt="Heart icon image, adds the product to wishlist when clicked"
          />
        </button>
      </div>
    </article>
  );
};
