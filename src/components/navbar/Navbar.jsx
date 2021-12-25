import React from 'react';
import {Dropdown, FormControl, InputGroup, DropdownButton} from "react-bootstrap";

import {BiUser, BiBasket, BiSearch} from "react-icons/bi";

import {ReactComponent as Logo} from '../../assets/svg/Freshnesecom.svg';

import styles from './Navbar.module.css';
import {Link} from "react-router-dom";
import CategoryNav from "../nav_category/CategoryNav";


const Navbar = () => {


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>


                {/*Small navigation panel*/}
                <div className={styles.smallNav}>
                    <div className={styles.smallNav_left}>
                        <p className={styles.greenText}>Chat with us</p>
                        <p>+420 336 775 664</p>
                        <p>info@freshnesecom.com</p>
                    </div>
                    <div className={styles.smallNav_right}>
                        <Link to={`/blog`}>
                            <p>Blog</p>
                        </Link>
                        <p>About Us</p>
                        <p>Careers</p>
                    </div>
                </div>

                {/*Big navigation panel*/}
                <div className={styles.bigNav}>
                    <Link to="/" className={styles.bigNav_link}>
                        <Logo className={styles.bigNav_logo}/>
                    </Link>
                    <div className={styles.bigNav_center}>
                        <InputGroup className={styles.inputGroup}>
                            <DropdownButton
                                variant="outline-light"
                                title="All categories"
                                id="input-group-dropdown-1"
                            >
                                <Dropdown.Item>
                                    <Link to={`/product/1`}>Men</Link>
                                </Dropdown.Item>
                                <Dropdown.Item>Women</Dropdown.Item>
                                <Dropdown.Item>Children</Dropdown.Item>
                            </DropdownButton>
                            <FormControl id="navSearchInput" placeholder={'Search Products, categories ...'}/>
                            <BiSearch size={`26px`} style={{marginRight: "20px"}}/>
                        </InputGroup>
                    </div>
                    <div className={styles.bigNav_right}>
                        <div className={styles.bigNav_right_icon}>
                            <BiUser size={`32px`}/>
                        </div>
                        <div className={styles.bigNav_right_icon}>
                            <div className={styles.num}>
                                4
                            </div>
                            <BiBasket size={`32px`}/>
                        </div>
                    </div>
                </div>

            </div>

            {/*Category navigation panel*/}
            <CategoryNav/>

        </div>
    );
};

export default Navbar;