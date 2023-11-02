import React from 'react';
import '../../styles/GoodsList/GoodsListCategory.css'

function GoodsListCategory(){

    const categories = [
        {
            id:1,
            name : '소프라노 색소폰',
            count : 20
        },
        {
            id:2,
            name : '알토 색소폰',
            count: 29
        },
        {
            id:3,
            name : '테너 색소폰',
            count: 41
        },
        {
            name : '바리톤 색소폰',
            count: 2
        },
        {
            id:4,
            name: '마우스피스',
            count: 128
        },
        {
            id:5,
            name:'리드',
            count: 76
        },
        {
            id:6,
            name:'전자색소폰',
            count: 10
        },
        {
            id:7,
            name:'악세서리/부품/관리용',
            count: 131
        }

    ];

    return(
        <div className="goods-list-categories">
            <p className="goods-list-category-title">카테고리이름</p>
            <div className="goods-list-category">
              {categories.map((category) => (
                  <a href="#"><div
                        key={category.id}
                        className="categories">
                        {category.name}({category.count})
                  </div></a>
              ))}
            </div>
        </div>
    );
}

export default GoodsListCategory;