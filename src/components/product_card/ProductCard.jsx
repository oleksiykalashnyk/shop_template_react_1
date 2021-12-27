import React from 'react';

import styles from './ProductCard.module.css';
import {Link} from "react-router-dom";

const productCardData = {
    title: "Product  1",
    description: "Space for a small product description ",
    image: "/assets/blog/1.png",
    price: "1.48",
    currency: "USD",
    link: "/product/1",
    buyLink: "#",
    sale: {
        isSale: true,
        price: "48.56",
        percent: "36"
    }
}

const ProductCard = ({
    title = productCardData.title,
    description = productCardData.description,
    image = productCardData.image,
    price = productCardData.price,
    currency = productCardData.currency,
    link = productCardData.link,
    buyLink = productCardData.buyLink,
    sale = productCardData.sale
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.topWrapper}>
                <img className={styles.image} src={image} alt='title'/>
                {sale.isSale && <div className={styles.tag}>- {sale.percent} %</div>}
            </div>
            <Link to={link} className={styles.title}>{title}</Link>
            <p>{description}</p>
            <div className={styles.bottomWrapper}>
                <div className={styles.prices}>
                    <h5>{price} {currency}</h5>
                    {sale.isSale && <p>{sale.price}</p>}
                </div>
                <Link to={buyLink} className={styles.button}><p>Buy now</p></Link>
            </div>
        </div>
    );
};

export default ProductCard;