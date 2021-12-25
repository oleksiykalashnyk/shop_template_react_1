import React from 'react';
import {Dropdown, DropdownButton} from "react-bootstrap";

const CategoryDropdown = ({title, list}) => {
    return (
        <DropdownButton
            variant="outline-dark"
            title={title}
            className="text-white"
        >
            {list.map(item => <Dropdown.Item align="start" >{item}</Dropdown.Item>)}

        </DropdownButton>
    );
};

export default CategoryDropdown;