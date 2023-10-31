import '../styles/MainCategory.css';
import React, {useState} from 'react';
import '../styles/globalStyles.css'

const categories = [
    {
        id: 1,
        name: '카테고리 1',
        subcategories: ['세부 카테고리 1-1', '세부 카테고리 1-2', '세부 놀러가고싶다', '대만은 재밌었니'],
    },
    {
        id: 2,
        name: '카테고리 2',
        subcategories: ['세부 카테고리 2-1', '세부 카테고리 2-2'],
    },
    {
        id: 3,
        name: '카테고리 3',
        subcategories: ['세부 카테고리 3-1', '세부 카테고리 3-2'],
    },
    {
        id: 4,
        name: '카테고리 4',
        subcategories: ['세부 카테고리 4-1', '세부 카테고리 4-2'],
    },
    {
        id: 5,
        name: '카테고리 5',
        subcategories: ['세부 카테고리 5-1', '세부 카테고리 5-2'],
    },
    {
        id: 6,
        name: '카테고리 6',
        subcategories: ['세부 카테고리 6-1', '세부 카테고리 6-2'],
    },
    {
        id: 7,
        name: '카테고리 7',
        subcategories: ['세부 카테고리 7-1', '세부 카테고리 7-2'],
    },
    {
        id: 8,
        name: '카테고리 8',
        subcategories: ['세부 카테고리 8-1', '세부 카테고리 8-2'],
    }
];
function MainCategory(){
    const [activeCategory, setActiveCategory] = useState(null);


    return (
        <div className="main-category">
         <div className="category-menu">
            {categories.map((category) => (
                <div
                    key={category.id}
                    className="category"
                    onMouseEnter={() => setActiveCategory(category.id)}
                    onMouseLeave={() => setActiveCategory(null)}
                >
                    {category.name}
                    {activeCategory === category.id && (
                        <ul className="subcategories">
                            {category.subcategories.map((subcategory, index) =>
                                (<li key={index}><a href="/">{subcategory}</a></li>))
                            }
                        </ul>
                    )}
                </div>
            ))}
         </div>
        </div>
    );
}

export default MainCategory;