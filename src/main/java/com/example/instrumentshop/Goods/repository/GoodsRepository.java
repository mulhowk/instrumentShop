package com.example.instrumentshop.Goods.repository;

import com.example.instrumentshop.Goods.Entity.Goods;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoodsRepository extends JpaRepository<Goods, Long> {
    List<Goods> findByParentCategory(String parentCategory);
    Long countByChildCategory(String childCategory);

    @Query("SELECT g from Goods g " +
            "where lower(g.parentCategory) LIKE %:query% " +
            "or lower(g.childCategory) like %:query% " +
            "or lower(g.goodsName) like %:query% " +
            "or lower(g.goodsDetail) LIKE %:query%")
    List<Goods> findByQueryIgnoreCase(String query);
    List<Goods> findByChildCategory(String childCategory);
}
