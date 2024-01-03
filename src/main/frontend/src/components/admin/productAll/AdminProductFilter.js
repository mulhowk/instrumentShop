import React, { useState } from 'react';
import './adminProductFilter.css';

const AdminProductFilter = ({onFilterChange }) => {

    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
      setFilter(event.target.value);
      onFilterChange(event.target.value);
    };
    
    return(
    <>
        <div className="admin-product-filter">
        <div className="tab">
            <button className="tablinks" onClick="openCategory(event, 'Category1')">카테고리1</button>
            <button className="tablinks" onClick="openCategory(event, 'Category2')">카테고리2</button>

            </div>

            <div id="Category1" className="tabcontent">
            <h3>카테고리1</h3>
            <p>카테고리1에 대한 내용입니다.</p>
            </div>

            <div id="Category2" className="tabcontent">
            <h3>카테고리2</h3>
            <p>카테고리2에 대한 내용입니다.</p>
            </div>

        </div>
    </>
    );
}

export default AdminProductFilter;