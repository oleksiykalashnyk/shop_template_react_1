import React from 'react';
import {Link} from "react-router-dom";


import styles from './Home.module.css';


const Home = () => {

    return (
        <div className={styles.wrapper}>
            <h1 className="pt-4">This  Home  page</h1>

            <Link to={"/blog"} className='text-danger'><h2 className="my-5">Blog page</h2></Link>

            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut commodi culpa dicta distinctio
                ducimus ex excepturi expedita explicabo facere neque non numquam obcaecati odio odit pariatur provident,
                quam veniam?</h5>
        </div>
    );
};

export default Home;