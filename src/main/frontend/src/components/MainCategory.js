import '../styles/MainCategory.css';
import React, {useState} from 'react';
import '../styles/globalStyles.css'

const categories = [
    {
        id: 1,
        name: '색소폰',
        subcategories: ['소프라노색소폰','알토색소폰', '테너색소폰', '바리톤색소폰', '악세사리/관리용품']
    },
    {
        id: 2,
        name: '관악기',
        subcategories: ['플룻/피콜로', '클라리넷/오보에', '트럼펫/코넷/프루겔혼', '트롬본', '관악기악세사리/관리용품']
    },
    {
        id: 3,
        name: '타악기',
        subcategories: ['드럼스틱', '드럼세트', '심벌', '전자드럼', '타악기악세사리/관리용품']
    },
    {
        id: 4,
        name: '현악기',
        subcategories: ['바이올린', '사일런트바이올린', '비올라', '첼로', '콘트라베이스', '현악기악세사리/유지관리용품']
    },
    {
        id: 5,
        name: '기타베이스',
        subcategories: ['어쿠스틱기타', '일렉기타', '클래식기타', '베이스기타', '우쿠렐레', '기타악세사리/유지관리용품']
    },
    {
        id: 6,
        name: '건반악기',
        subcategories: ['디지털피아노', '신디사이저', '스테이지피아노', '포터블키보드', '건반악기악세서리/유지관리용품']
    },
    {
        id: 7,
        name: '교재악기',
        subcategories: ['하모니카', '오카리나', '교재용타악기', '피아니카', '리코더']
    },
    {
        id: 8,
        name: 'etc',
        subcategories: ['엠프', '마이크', '믹서', '반주기/녹음기']
    }
];
function MainCategory(){
    const [activeCategory, setActiveCategory] = useState(null);


    return (
        <div className="main-category">
         <div className="category-menu" onMouseLeave={() => setActiveCategory(null)}>
            {categories.map((category) => (
                <div
                    key={category.id}
                    className="category"
                    onMouseEnter={() => setActiveCategory(category.id)}
                >
                    <a href={`/goodsList/category/${category.name}`}>
                        {category.name}
                    </a>
                    {activeCategory === category.id && (
                        <ul className="subcategories">
                            {category.subcategories.map((subcategory, index) =>
                                (<li key={index}>
                                    <a href={`/goodsList/category/${category.name}/${subcategory}`}>
                                        {subcategory}
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