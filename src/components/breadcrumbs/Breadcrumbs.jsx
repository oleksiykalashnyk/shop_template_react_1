import React from 'react';
import {Link} from "react-router-dom";

import styles from './Breadcrumbs.module.css';



const breadcrumbsData = [
    {
        name: "Home",
        link: "/"
    }

];

const Breadcrumbs = ({data = breadcrumbsData}) => {

    return (
        <div className={styles.container}>
            {data.map((element, key, arr) => (
                (arr.length - 1 !== key) ? (
                    <>
                        <Link className={styles.element} to={element.link}>{element.name}</Link>
                        <p className={styles.element}> &nbsp; / &nbsp;</p>
                    </>
                ) : <Link className={styles.element} to={element.link}>{element.name}</Link>

            ))}

        </div>
    );
};

export default Breadcrumbs;