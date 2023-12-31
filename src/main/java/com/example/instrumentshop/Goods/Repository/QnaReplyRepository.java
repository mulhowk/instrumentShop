package com.example.instrumentshop.Goods.Repository;

import com.example.instrumentshop.Goods.Entity.QnaReply;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QnaReplyRepository extends JpaRepository<QnaReply, Long> {
    List<QnaReply> findByGoods_GoodsIdOrderByQnaAsc(Long goodsId);

    void deleteByGoods_GoodsId(Long goodsId);
}
