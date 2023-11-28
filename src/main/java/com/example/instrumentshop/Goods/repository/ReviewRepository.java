package com.example.instrumentshop.Goods.repository;

import com.example.instrumentshop.Goods.Entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    @Query("SELECT AVG(r.reviewScore) FROM Review r where r.goods.goodsId = :goodsId")
    double findAverageReviewScoreByGoodsId(@Param("goodsId") Long goodsId);

    Long countByGoods_GoodsId(Long goodsId);
}
