import React, { useState } from 'react';


const AdminProductFilter = ({onFilterChange }) => {

    const [filter, setFilter] = useState('');

    const handleFilterChange = (event) => {
      setFilter(event.target.value);
      onFilterChange(event.target.value);
    };
    
    return(
    <>
        <div className="admin-product-filter">
        <form>
      <label>
        <input
          type="radio"
          value="option1"
          checked={filter === 'option1'}
          onChange={handleFilterChange}
        />
        옵션 1
      </label>
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