package com.example.instrumentshop.Goods.Repository;

import com.example.instrumentshop.Goods.Entity.QNA;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QNARepository extends JpaRepository<QNA, Long> {

    List<QNA> findByGoods_GoodsId(Long goodsId);
    QNA findByQnaNo(int qnaNo);

    void deleteByGoods_GoodsId(Long goodsId);
}
