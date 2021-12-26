import React from 'react';
import {useParams} from "react-router-dom";
import styles from './Product.module.css';
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";


const breadcrumbsData = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Category",
        link: "/category"
    },
    {
        name: "Product name",
        link: "/product/2"
    },
];

const Product = () => {
    let {id} = useParams();
    return (
        <div >
            <Breadcrumbs data={breadcrumbsData}/>
            <h1>Product is {id}</h1>
            <p>Product desc:</p>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, blanditiis consectetur dolore doloribus facere impedit inventore ipsa laudantium molestias odio odit officia officiis quaerat quas quidem sapiente totam ut velit!</span><span>Ab alias amet animi consequuntur, culpa cupiditate eaque ex explicabo fugit illo illum in, laboriosam laudantium magnam modi nostrum possimus provident qui quisquam rem temporibus totam veritatis voluptatum. Adipisci, earum?</span><span>Ab alias aspernatur assumenda at consectetur cum deleniti dolore dolorum eius enim esse eveniet impedit in iure modi nesciunt, obcaecati odit omnis quaerat qui ratione sed, sint voluptas voluptates, voluptatum?</span><span>Accusamus consequuntur laborum quo sapiente unde? Earum impedit magnam quae quaerat voluptatum! Alias, ex molestiae. Accusamus alias autem cumque cupiditate enim fugiat, impedit maiores minima modi nostrum quidem quisquam repellendus!</span>
            </p>
        </div>
    );
};

export default Product;