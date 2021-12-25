import React from 'react';

import Lottie from "react-lottie";
import animationLoader from '../../assets/lottie/68658-creative-3d-visual-animation-website-development.json';

import styles from './Loader.module.css';

const Loader = () => {


    const defaultOptions = {
        render : "svg",
        loop: true,
        autoplay: true,
        animationData: animationLoader,
    };

    return (
        <div className={styles.container}>
            <Lottie
                options={defaultOptions}
                height={`50%`}
                width={`100%`}
                isClickToPauseDisabled={true}
            />
        </div>
    );
};

export default Loader;