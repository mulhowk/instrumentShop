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
        <div class="tab">
            <button class="tablinks" onclick="openCategory(event, 'Category1')">카테고리1</button>
            <button class="tablinks" onclick="openCategory(event, 'Category2')">카테고리2</button>

            </div>

            <div id="Category1" class="tabcontent">
            <h3>카테고리1</h3>
            <p>카테고리1에 대한 내용입니다.</p>
            </div>

            <div id="Category2" class="tabcontent">
            <h3>카테고리2</h3>
            <p>카테고리2에 대한 내용입니다.</p>
            </div>
        <form className='filter-form-label'>
      <label>
        <input
          type="radio"
          value="option1"
          checked={filter === 'option1'}
          onChange={handleFilterChange}
        />
        옵션 1 
      </label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <label>
        <input
          type="radio"
          value="option2"
          checked={filter === 'option2'}
          onChange={handleFilterChange}
        />
        옵션 2
      </label>
      {/* 다른 필터 옵션들을 여기에 추가할 수 있습니다 */}
    </form>
        </div>
    </>
    );
}

export default AdminProductFilter;