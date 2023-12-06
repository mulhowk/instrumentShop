package com.example.instrumentshop.Goods.Repository;

import com.example.instrumentshop.Goods.Entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    @Query("SELECT AVG(r.reviewScore) FROM Review r where r.goods.goodsId = :goodsId")
    double findAverageReviewScoreByGoodsId(@Param("goodsId") Long goodsId);

    Long countByGoods_GoodsId(Long goodsId);

    List<Review> findByGoods_GoodsId(Long goodsId);

    void deleteByGoods_GoodsId(Long goodsId);
}
