import React, { Component } from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div>
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map(({ id, ...OtherItemProps }) => (
                            <CollectionItem key={id} {...OtherItemProps} />
                        ))
                }
            </div>

        </div>
    </div>
)

export default CollectionPreview;