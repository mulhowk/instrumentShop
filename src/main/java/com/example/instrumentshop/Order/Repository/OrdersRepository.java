package com.example.instrumentshop.Order.Repository;

import com.example.instrumentshop.Order.Entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdersRepository extends JpaRepository<Orders, Long> {
}
