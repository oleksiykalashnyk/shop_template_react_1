import React from 'react';

import styles from './BlogList.module.css';
import { BiGridAlt, BiListUl } from "react-icons/bi";
import {InputGroup, FormControl, Button} from 'react-bootstrap';

import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import BlogPreviewBig from "../../components/blog_preview_big/BlogPreviewBig";
import BlogPreviewSmall from "../../components/blog_preview_small/BlogPreviewSmall";
import Pagination from  "../../components/pagination/Pagination";
import BlogNav from "../../components/blog_nav/BlogNav";

const blogListData = {
    bigPosts: [
        {
            title: "It can be long don’t worry about that",
            data: "21. 6. 1993",
            tags: ['super', 'tag_65'],
            image: "/assets/blog/2.png",
            author: {
                name: "Author",
                avatar: "/assets/avatar/avatar1.png"
            }
        },
        {
            title: "This is a space for your blog headline, it can be long don’t worry about that",
            data: "01. 5. 2021",
            tags: ['tag1', 'tag_152'],
            image: "/assets/blog/1.png",
            author: {
                name: "Alexey",
                avatar: "/assets/avatar/avatar1.png"
            }
        }
    ],
    smallPosts: [
        {
            title: "Space for your heding is here, write what you need",
            data: "21. 6. 1993",
            tags: ['super', 'tag'],
            image: "/assets/blog/3.png",
            author: {
                name: "Author",
                avatar: "/assets/avatar/avatar1.png"
            }
        },
        {
            title: "Space for your heding is here, write what you need",
            data: "21. 6. 1993",
            tags: ['super', 'tag'],
            image: "/assets/blog/4.png",
            author: {
                name: "Author",
                avatar: "/assets/avatar/avatar1.png"
            }
        },
        {
            title: "Space for your heding is here, write what you need",
            data: "21. 6. 1993",
            tags: ['super', 'tag_65'],
            image: "/assets/blog/5.png",
            author: {
                name: "Author",
                avatar: "/assets/avatar/avatar1.png"
            }
        },
        {
            title: "Space for your heding is here, write what you need",
            data: "21. 6. 1993",
            tags: ['super', 'tag_65'],
            image: "/assets/blog/6.png",
            author: {
                name: "Author",
                avatar: "/assets/avatar/avatar1.png"
            }
        },
        {
            title: "Space for your heding is here, write what you need",
            data: "21. 6. 1993",
            tags: ['tag', 'tag', 'tag'],
            image: "/assets/blog/7.png",
            author: {
                name: "Author",
                avatar: "/assets/avatar/avatar1.png"
            }
        },
        {
            title: "Space for your heding is here, write what you need",
            data: "21. 6. 1993",
            tags: ['tag', 'tag'],
            image: "/assets/blog/8.png",
            author: {
                name: "Author",
                avatar: "/assets/avatar/avatar1.png"
            }
        },
        {
            title: "Space for your heding is here, write what you need",
            data: "21. 6. 1993",
            tags: ['super', 'tag'],
            image: "/assets/blog/9.png",
            author: {
                name: "Author",
                avatar: "/assets/avatar/avatar1.png"
            }
        },
        {
            title: "Space for your heding is here, write what you need",
            data: "21. 6. 1993",
            tags: ['tag'],
            image: "/assets/blog/10.png",
            author: {
                name: "Author",
                avatar: "/assets/avatar/avatar1.png"
            }
        }
    ]
}



const breadcrumbsData = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Blog list",
        link: "/blog"
    },
];

const blogNavArchivesData = {
    title: "Archives",
    list: [
        {
            name: "March 2020",
            link: "#"
        },
        {
            name: "February 2020",
            link: "#"
        },
        {
            name: "January 2020",
            link: "#"
        },
        {
            name: "November 2019",
            link: "#"
        },
        {
            name: "December 2019",
            link: "#"
        },
    ]
}
const blogNavCategoryData = {
    title: "Category",
    list: [
        {
            name: "Food",
            link: "#"
        },
        {
            name: "Chefs specialities",
            link: "#"
        },
        {
            name: "Vegetable",
            link: "#"
        },
        {
            name: "Meat",
            link: "#"
        },
        {
            name: "Recommendations",
            link: "#"
        },
    ]
}
const BlogList = () => {
    return (
        <>
            <Breadcrumbs data={breadcrumbsData}/>

            <div className={styles.blogListNavigation}>
                <h1>Fruit and vegetables</h1>
                <div className={styles.blogListNavigationElements}>
                    <div className={styles.blogListNavigationElements}>
                        <BiGridAlt color='#6A983C'/>
                        <p>Grid view</p>
                    </div>
                    <div className={styles.blogListNavigationElements}>
                        <BiListUl className={styles.blogListNavigationElementsMutedText}/>
                        <p className={styles.blogListNavigationElementsMutedText}>List view</p>
                    </div>
                    <div className={styles.blogListNavigationElements}>
                        <p className={styles.blogListNavigationElementsTag}>117</p>
                        <p className={styles.blogListNavigationElementsMutedText}>Products</p>
                    </div>
                </div>
            </div>

            <div className={styles.wrapper}>
                {blogListData.bigPosts.map(post => <BlogPreviewBig {...post}/>)}
            </div>

            <div className={styles.mainWrapper}>
                <div className={styles.left}>
                    <BlogNav {...blogNavArchivesData}/>

                    <BlogNav {...{...blogNavCategoryData, mutted: true}}/>


                    <div className={styles.list}>
                        <h5>Join our list</h5>
                        <p className={styles.mutted}>Signup to be the first to hear about exclusive deals, special offers, recepies from our masters and others.</p>
                        <InputGroup className="my-3" >
                            <FormControl
                                placeholder="Your email address"
                                aria-label="Your email address"
                            />
                            <Button variant="outline-dark" className=" border-0 fw-bold" >
                                Subscribe
                            </Button>
                        </InputGroup>
                    </div>
                </div>

                <div className={styles.right}>
                    {blogListData.smallPosts.map(post => <BlogPreviewSmall {...post}/>)}
                </div>
            </div>

            <Pagination/>
        </>
    );
};

export default BlogList;