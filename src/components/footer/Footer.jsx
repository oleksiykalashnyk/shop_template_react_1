import React from 'react';
import {Link} from "react-router-dom";

import styles from './Footer.module.css';

const footerData = {
    topFooterData: [
        {
            title: "Get in touch",
            links: [
                {
                    title: 'About Us',
                    link: '/'
                },
                {
                    title: 'Careers',
                    link: '/'
                },
                {
                    title: 'Press Releases',
                    link: '/'
                },
                {
                    title: 'Blog',
                    link: '/blog'
                },
            ]
        },
        {
            title: "Connections",
            links: [
                {
                    title: 'Facebook',
                    link: '/'
                },
                {
                    title: 'Twitter',
                    link: '/'
                },
                {
                    title: 'Instagram',
                    link: '/'
                },
                {
                    title: 'Youtube',
                    link: '/'
                },
                {
                    title: 'LinkedIn',
                    link: '/'
                }
            ]
        },
        {
            title: "Earnings",
            links: [
                {
                    title: 'Become an Affiliate',
                    link: '/'
                },
                {
                    title: 'Advertise your product',
                    link: '/'
                },
                {
                    title: 'Sell on Market',
                    link: '/'
                }
            ]
        },
        {
            title: "Account",
            links: [
                {
                    title: 'Your account',
                    link: '/'
                },
                {
                    title: 'Returns Centre',
                    link: '/'
                },
                {
                    title: '100 % purchase protection',
                    link: '/'
                },
                {
                    title: 'Chat with us',
                    link: '/'
                },
                {
                    title: 'Help',
                    link: '#'
                },
            ]
        },
    ],
    tags: ['Beans', 'Carrots', 'Apples', 'Garlic', 'Mushrooms', 'Tomatoes', 'Chilli peppers', 'Broccoli', 'Watermelons', 'Oranges', 'Bananas', 'Grapes', 'Cherries', 'Meat', 'Seo tag', 'Fish', 'Seo tag', 'Seo tag', 'Lemons']
}

const Footer = ({data = footerData}) => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.block}>
                {data.topFooterData.map(block => (
                    <div className={styles.blockWrapper}>
                        <h4 className={styles.blockTitle}>{block.title}</h4>
                        {block.links.map(link => <p><Link className={styles.blockLinks}
                                                          to={link.link}>{link.title}</Link></p>)}
                    </div>
                ))}
            </div>

            <div className={styles.tags}>
                <h4 className={styles.tagsTitle}>Product tags</h4>
                <div className={styles.tagWrapper}>
                    {data.tags.map(tag => <p className={styles.tag}>{tag}</p>)}
                </div>
            </div>

            <p style={{marginTop: "20px"}}>Copyright © 2020 petrbilek.com</p>
        </div>
    );
};

export default Footer;