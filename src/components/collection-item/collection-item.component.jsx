import React from 'react'

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className="collection-item">
        <div className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }} />
        <div className="collection-footer">
            <dov className="name">{name}</dov>
            <dov className="price">{price}</dov>
        </div>
    </div>
)

export default CollectionItem;