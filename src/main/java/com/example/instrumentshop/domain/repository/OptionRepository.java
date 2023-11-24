package com.example.instrumentshop.domain.repository;

import com.example.instrumentshop.domain.Entity.Goods;
import com.example.instrumentshop.domain.Entity.Options;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OptionRepository extends JpaRepository<Options, Long> {
}
