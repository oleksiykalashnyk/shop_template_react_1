import React from 'react';

import styles from './Home.module.css';

import BlogNav from "../../components/blog_nav/BlogNav";
import HomeBanner from "../../components/home_banner/HomeBanner";
import ProductCard from "../../components/product_card/ProductCard";


const blogNavData = {
    title: "Best selling products",
    list: [
        {
            name: "Kitchen",
            link: "/"
        },
        {
            name: "Meat and fish",
            link: "/"
        },
        {
            name: "Special nutrition",
            link: "/"
        },
        {
            name: "Pharmacy",
            link: "/"
        },
        {
            name: "Baby",
            link: "/"
        },
    ]
}

const productsCardsData1 = [
    {
        title: "Product  1",
        description: "Space for a small product description ",
        image: "/assets/blog/1.png",
        price: "1.48",
        currency: "USD",
        link: "/product/1",
        buyLink: "#",
        sale: {
            isSale: false,
            price: "48.56",
            percent: "36"
        }
    },
    {
        title: "Product  2",
        description: "Space for a small product description ",
        image: "/assets/blog/2.png",
        price: "18",
        currency: "USD",
        link: "/product/2",
        buyLink: "#",
        sale: {
            isSale: true,
            price: "40,35",
            percent: "38"
        }
    },
    {
        title: "Product  3",
        description: "Space for a small product description ",
        image: "/assets/blog/1.png",
        price: "199,99",
        currency: "PL",
        link: "/product/3",
        buyLink: "#",
        sale: {
            isSale: true,
            price: "399.89",
            percent: "51"
        }
    }
];

const productsCardsData2 = [
    {
        title: "Product  4",
        description: "Space for a small product description ",
        image: "/assets/blog/4.png",
        price: "1.48",
        currency: "USD",
        link: "/product/4",
        buyLink: "#",
        sale: {
            isSale: false,
            price: "48.56",
            percent: "36"
        }
    },
    {
        title: "Product  5",
        description: "Space for a small product description ",
        image: "/assets/blog/10.png",
        price: "18",
        currency: "USD",
        link: "/product/5",
        buyLink: "#",
        sale: {
            isSale: false,
            price: "40,35",
            percent: "38"
        }
    },
    {
        title: "Product  6",
        description: "Space for a small product description ",
        image: "/assets/blog/6.png",
        price: "50,99",
        currency: "PL",
        link: "/product/6",
        buyLink: "#",
        sale: {
            isSale: true,
            price: "399.89",
            percent: "80"
        }
    }
];
const Home = () => {

    return (
        <div className={styles.container}>

            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <BlogNav buttonMoreCategories={true}/>
                </div>
                <div className={styles.right}>
                    <HomeBanner/>
                    <HomeBanner/>
                </div>
            </div>


            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <BlogNav {...{...blogNavData, buttonMoreCategories: true}}/>
                </div>
                <div className={styles.right}>
                    {productsCardsData1.map((item, i) => <ProductCard key={i} {...item}/> )}
                </div>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <BlogNav {...{...blogNavData, buttonMoreCategories: true}}/>
                </div>
                <div className={styles.right}>
                    {productsCardsData2.map((item, i) => <ProductCard key={i} {...item}/> )}

                </div>
            </div>
        </div>
    );
};

export default Home;