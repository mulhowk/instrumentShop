package com.example.instrumentshop.Goods.repository;

import com.example.instrumentshop.Goods.Entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    List<Category> findByParentCategory(String parentCategory);
}
