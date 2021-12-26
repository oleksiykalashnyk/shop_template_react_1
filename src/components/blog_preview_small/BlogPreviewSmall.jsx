import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './BlogPreviewSmall.module.css';

const BlogPreviewSmall = ({title, image, tags, author, data}) => {
    let navigate = useNavigate();

    return (
        <div className={styles.card} onClick={() => navigate(`/post/3`)}>
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