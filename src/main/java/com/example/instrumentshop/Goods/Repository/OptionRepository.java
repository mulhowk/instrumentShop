package com.example.instrumentshop.Goods.Repository;

import com.example.instrumentshop.Goods.Entity.Options;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OptionRepository extends JpaRepository<Options, Long> {

    void deleteByGoods_GoodsId(Long goodsId);
}
