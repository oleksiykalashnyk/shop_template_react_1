import React from 'react';

import styles from './BlogPreviewSmall.module.css';

const BlogPreviewSmall = ({title, image, tags, author, data}) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image}/>
            <div className={styles.top}>
                {tags.map(tag => <div className={styles.tag}>{tag}</div>)}
            </div>
            <p className={styles.title}>{title}</p>
            <div className={styles.bottomMeta}>
                <p>{author.name}</p>
                <p>{data}</p>
            </div>
        </div>
    );
};

export default BlogPreviewSmall;