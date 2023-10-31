import '../styles/Header.css';
import '../styles/MainCategory.css';
import React, {useState} from 'react';
import '../styles/globalStyles.css'

function MainCategory(){

    const [isCategoryVisible, setCategoryVisible] = useState(false);

    const handleMouseOver = () => {
        setCategoryVisible(true);
    };

    const handleMouseOut = () => {
        setCategoryVisible(false);
    };

    return(
        <div className="main-category">

        </div>
    );
}

export default MainCategory;