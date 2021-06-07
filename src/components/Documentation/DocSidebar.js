import React from 'react';
import './doc-sidebar.css'

import shopify from '../../images/webflow-to-shopify.svg';
import jamstack from "../../images/webflow-to-jamstack.svg";
import wordpress from "../../images/webflow-to-wordpress.svg";
import ghost from "../../images/webflow-to-ghost.svg"
import { Link } from 'gatsby';


const DocSidebar = ({cms, sidebar, location}) => {


    const images = {
        "shopify": shopify,
        "jamstack": jamstack,
        "wordpress": wordpress,
        "ghost": ghost
    }


    return <div className="doc-sidebar">
        <img src={images[cms]} alt={"webflow to " + cms} />
        <div className="pages-tree">
            {Object.keys(sidebar).map(folder => {
                return <div className="doc-folder" key={folder}><div className="doc-folder-name">{folder}</div>
                {(sidebar[folder]).map( (item, index) => {
                    return <Link className={"doc-folder-link" + (location.pathname === item.path ? " current" : "")} key={folder + index } to={item.path}>{item.title}</Link>
                })}</div>
            })}
        </div>
    </div>
}

export default DocSidebar;