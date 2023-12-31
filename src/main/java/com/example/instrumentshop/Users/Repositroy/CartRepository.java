package com.example.instrumentshop.Users.Repositroy;

import com.example.instrumentshop.Users.Entity.Cart;
import com.example.instrumentshop.Users.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Long> {

    List<Cart> findByUsers_MEMBERUID(Long MEMBERUID);

    @Query("SELECT COALESCE(sum(c.goodsQuantity), 0) from Cart c where c.users.MEMBERUID = :MEMBERUID")
    Integer sumByMEMBERUID(Long MEMBERUID);

    void deleteByCartNo(Long cartNo);

}
