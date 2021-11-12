import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ArticleImage = ({ imageUrl, className }) => {
    return (
        <LazyLoadImage
            effect="blur"
            src={imageUrl}
            className={className}
            placeholderSrc={require("../images/placeholder.jpg")}
            wrapperClassName={className}
        />
    )
}

export default ArticleImage;