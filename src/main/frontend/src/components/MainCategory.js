import '../styles/MainCategory.css';
import React, {useState} from 'react';
import '../styles/globalStyles.css'

const categories = [
    {
        id: 1,
        name: '카테고리 1',
        subcategories: [
            {
                id : 1,
                name : '서브 카테고리 1'
            },
            {
                id : 2,
                name : '서브 카테고리 2'
            }
        ]
    },
    {
        id: 2,
        name: '카테고리 2',
        subcategories: [
            {
                id : 1,
                name : '서브 카테고리 1'
            },
            {
                id : 2,
                name : '서브 카테고리 2'
            }
        ]
    },
    {
        id: 3,
        name: '카테고리 3',
        subcategories: [
            {
                id : 1,
                name : '서브 카테고리 1'
            },
            {
                id : 2,
                name : '서브 카테고리 2'
            }
        ]
    },
    {
        id: 4,
        name: '카테고리 4',
        subcategories: [
            {
                id : 1,
                name : '서브 카테고리 1'
            },
            {
                id : 2,
                name : '서브 카테고리 2'
            }
        ]
    },
    {
        id: 5,
        name: '카테고리 5',
        subcategories: [
            {
                id : 1,
                name : '서브 카테고리 1'
            },
            {
                id : 2,
                name : '서브 카테고리 2'
            }
        ]
    },
    {
        id: 6,
        name: '카테고리 6',
        subcategories: [
            {
                id : 1,
                name : '서브 카테고리 1'
            },
            {
                id : 2,
                name : '서브 카테고리 2'
            }
        ]
    },
    {
        id: 7,
        name: '카테고리 7',
        subcategories: [
            {
                id : 1,
                name : '서브 카테고리 1'
            },
            {
                id : 2,
                name : '서브 카테고리 2'
            }
        ]
    },
    {
        id: 8,
        name: '카테고리 8',
        subcategories: [
            {
                id : 1,
                name : '서브 카테고리 1'
            },
            {
                id : 2,
                name : '서브 카테고리 2'
            }
        ]
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
                    <a href={`/goodsList/category/${category.id}`}>
                        {category.name}
                    </a>
                    {activeCategory === category.id && (
                        <ul className="subcategories">
                            {category.subcategories.map((subcategory, index) =>
                                (<li key={index}>
                                    <a href={`/goodsList/category/${category.id}/${subcategory.id}`}>
                                        {subcategory.name}
                                    </a>
                                </li>))
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