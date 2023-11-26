package com.example.instrumentshop.Goods.repository;

import com.example.instrumentshop.Goods.Entity.Goods;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoodsRepository extends JpaRepository<Goods, Long> {
    List<Goods> findByParentCategory(String parentCategory);
    Long countByChildCategory(String childCategory);
}
