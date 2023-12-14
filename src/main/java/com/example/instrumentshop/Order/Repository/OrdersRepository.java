package com.example.instrumentshop.Order.Repository;

import com.example.instrumentshop.Order.Entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrdersRepository extends JpaRepository<Orders, Long> {

    List<Orders> findByUsers_MEMBERUID(Long MEMBERUID);
}
