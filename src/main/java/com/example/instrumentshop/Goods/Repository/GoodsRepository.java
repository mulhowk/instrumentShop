package com.example.instrumentshop.Goods.Repository;

import com.example.instrumentshop.Goods.Entity.Goods;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoodsRepository extends JpaRepository<Goods, Long> {

    Goods findByGoodsId(Long goodsId);
    List<Goods> findByParentCategoryOrderByGoodsIdDesc(String parentCategory);
    Long countByChildCategory(String childCategory);

    @Query(value = "SELECT g from Goods g " +
            "where lower(g.parentCategory) LIKE %:query% " +
            "or lower(g.childCategory) like %:query% " +
            "or lower(g.goodsName) like %:query% " +
            "or lower(g.goodsDetail) LIKE %:query% " +
            "order by g.goodsId desc ")
    List<Goods> queryMethod(String query);
    List<Goods> findByChildCategoryOrderByGoodsIdDesc(String childCategory);
}
