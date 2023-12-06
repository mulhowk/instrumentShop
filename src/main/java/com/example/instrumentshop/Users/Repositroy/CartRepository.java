package com.example.instrumentshop.Users.Repositroy;

import com.example.instrumentshop.Users.Entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}
