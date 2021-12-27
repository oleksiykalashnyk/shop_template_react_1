import React, {Suspense, lazy} from 'react';
import {Route, Routes} from "react-router-dom";

import LayoutFirst from "./layouts/LayoutFirst";

import Loader from './components/loader/Loader'
import ScrollToTop from "./components/scroll_to_top/ScrollToTop";

const Home = lazy(() => import('./pages/home/Home'));
const Product = lazy(() => import('./pages/product/Product'));
const BlogList = lazy(() => import('./pages/blog_list/BlogList'));
const Post = lazy(() => import('./pages/post/Post'));


const App = () => {
    return (
        <LayoutFirst>
            <Suspense fallback={<Loader/>}>
                <ScrollToTop>
                    <Routes>
                        <Route path='/' exact element={<Home/>}/>
                        <Route path='/blog' element={<BlogList/>}/>
                        <Route path='/post/:id' element={<Post/>}/>

                        <Route path='/product/:id' element={<Product/>}/>

                        <Route
                            path="*"
                            element={
                                <main style={{padding: "1rem", textAlign: "center"}}>
                                    <h1>404</h1>
                                    <p>There's nothing here!</p>
                                </main>
                            }
                        />
                    </Routes>
                </ScrollToTop>

            </Suspense>
        </LayoutFirst>
    )
        ;
};

export default App;