package com.example.instrumentshop.Users.Repositroy;

import com.example.instrumentshop.Users.Entity.WishList;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WishListRepository extends JpaRepository<WishList, Long> {

    List<WishList> findByUsers_MEMBERUID(Long MEMBERUID);
    void deleteByWishNo(Long wishNo);
}
