import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './BlogPreviewBig.module.css';

const BlogPreviewBig = ({title, image, tags, author, data}) => {

    let navigate = useNavigate();

    return (
        <div className={styles.card}  onClick={() => navigate(`/post/3`)}>
            <img src={image} className={styles.image} alt={title}/>
            <div className={styles.wrapper}>
                <div className={styles.top}>
                    {tags.map(tag => <div className={styles.tag}>{tag}</div>)}
                </div>
                <div className={styles.bottom}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.bottomMeta}>
                        <img src={author.avatar} alt={author.name}/>
                        <p>{author.name}</p>
                        <p>{data}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPreviewBig;