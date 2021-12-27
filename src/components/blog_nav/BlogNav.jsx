import React from 'react';
import {Link} from "react-router-dom";
import {FiChevronRight} from "react-icons/fi";


import styles from './BlogNav.module.css';

const blogNavData = {
    title: "Category menu",
    list: [
        {
            name: "Bakery",
            link: "/"
        },
        {
            name: "Fruit and vegetables",
            link: "/"
        },
        {
            name: "Meat and fish",
            link: "/"
        },
        {
            name: "Drinks",
            link: "/"
        },
        {
            name: "Kitchen",
            link: "/"
        },
    ]
}


const BlogNav = ({title = blogNavData.title, list = blogNavData.list, mutted = false, buttonMoreCategories = false}) => {
    return (
        <div className={styles.list}>
            <h5>{title}</h5>
            {list.map(item => <Link to={item.link} className={`${mutted ? styles.mutted: ''}`} >{item.name}</Link>)}
            {buttonMoreCategories && <div className={styles.button}><p className={styles.buttonText}>More categories <FiChevronRight/></p></div>}
        </div>
    );
};

export default BlogNav;