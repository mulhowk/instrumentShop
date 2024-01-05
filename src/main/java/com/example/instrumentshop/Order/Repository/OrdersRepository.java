package com.example.instrumentshop.Order.Repository;

import com.example.instrumentshop.Order.Entity.Orders;
import com.example.instrumentshop.Users.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrdersRepository extends JpaRepository<Orders, Long> {

    List<Orders> findByUsers_MEMBERUID(Long MEMBERUID);

    // 특정 사용자의 주문 개수 조회
    int countByUsers_MEMBERUID(Long MEMBERUID);

    Orders findByOrderId(Long orderId);

}
