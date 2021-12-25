import React from 'react';
import styles from './CatygoryNav.module.css';
import CategoryDropdown from "./CategoryDropdown";


const categoryObj = [
    {
        title: "Bakery",
        list: ["First", "Second", "Ok Lorem"]
    },
    {
        title: "Fruit and vegetables",
        list: ["First", "Second", "Ok Lorem"]
    },
    {
        title: "Meat and fish",
        list: ["First", "Second", "Ok Lorem"]
    },
    {
        title: "Drinks",
        list: ["First", "Second", "Ok Lorem"]
    },
    {
        title: "Kitchen",
        list: ["First", "Second", "Ok Lorem"]
    },
    {
        title: "Special nutrition",
        list: ["First", "Second", "Ok Lorem"]
    },
    {
        title: "Baby",
        list: ["First", "Second", "Ok Lorem"]
    },
    {
        title: "Pharmacy",
        list: ["First", "Second", "Ok Lorem"]
    }
];

const CategoryNav = () => {
    return (
        <div className={styles.wrapper}>
            {categoryObj.map(item => <CategoryDropdown title={item.title} list={item.list}/>)}
        </div>
    );
};

export default CategoryNav;