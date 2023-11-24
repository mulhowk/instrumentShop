package com.example.instrumentshop.domain.repository;

import com.example.instrumentshop.domain.Entity.Goods;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GoodsRepository extends JpaRepository<Goods, Long> {
}
