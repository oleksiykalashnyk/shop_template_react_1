import React from 'react';

import styles from './Breadcrumbs.module.css';

const breadcrumbsData = ['Homepage', 'Fruit and vegetables', 'Blog list'];

const Breadcrumbs = () => {
    return (
        <div className={styles.container}>
            {breadcrumbsData.map((element, key, arr) => (
                (arr.length - 1 !== key) ? (<p className={styles.element}>{element}&nbsp; / &nbsp;</p>) : <p> {element}</p>
            ))}
        </div>
    );
};

export default Breadcrumbs;