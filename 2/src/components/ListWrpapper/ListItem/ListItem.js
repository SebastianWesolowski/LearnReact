import React from 'react';
import {string} from 'prop-types';
import './ListItem.css';

const ListItem = ({
    image,
    name,
    description,
    twitterLink
}) => (
        <li className="listItem__wrapper">
            <img
                src={image}
                alt={name}
                className="listItem__image" />
            <div>
                <h2 className="listItem__name">{name}</h2>
                <p className="listItem__description">{description}</p>
                <a
                    href={twitterLink}
                    className="listItem__button
                "> visit twitter page</a>
            </div>
        </li>
    )

    ListItem.propTypes ={
        image:string.isRequired, 
        name: string.isRequired, 
        description: string,
        twitterLink: string.isRequired,
    };
    ListItem.defaultProps ={
        description: 'One of the React Crator'
    }
export default ListItem
