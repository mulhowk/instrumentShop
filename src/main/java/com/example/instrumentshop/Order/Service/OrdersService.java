package com.example.instrumentshop.Order.Service;

import com.example.instrumentshop.Order.DTO.OrdersDTO;
import com.example.instrumentshop.Order.Entity.Orders;
import com.example.instrumentshop.Order.Repository.OrdersRepository;
import com.example.instrumentshop.Users.Entity.Users;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrdersService {

    private final OrdersRepository ordersRepository;

    @Transactional
    public List<Orders> getAllOrders(){

        return ordersRepository.findAll();
    }

    @Transactional
    public List<Orders> getOrdersByMEMBERUID(Long MEMBERUID){

        return ordersRepository.findByUsers_MEMBERUID(MEMBERUID);
    }

    @Transactional
    public Orders createOrders(OrdersDTO ordersDTO){

        Orders newOrders =
                Orders.builder()
                        .goodsId(ordersDTO.getGoodsId())
                        .users(ordersDTO.getUsers())
                        .goodsQuantity(ordersDTO.getGoodsQuantity())
                        .options(ordersDTO.getOptions())
                        .totalPrice(ordersDTO.getTotalPrice())
                        .paymentInformation(ordersDTO.getPayInformation())
                        .orderMsg(ordersDTO.getOrderMsg())
                        .deliverMsg(ordersDTO.getDeliverMsg())
                        .orderDate(getCurrentTimeString())
                        .orderName(ordersDTO.getOrderName())
                        .orderEmail(ordersDTO.getOrderEmail())
                        .orderPhone(ordersDTO.getOrderPhone())
                        .deliverName(ordersDTO.getDeliverName())
                        .deliverPhone(ordersDTO.getDeliverPhone())
                        .build();

        ordersRepository.save(newOrders);

        return ordersRepository.save(newOrders);
    }

    @Transactional
    public Orders findOrdersByOrderId(Long orderId){

        return ordersRepository.findByOrderId(orderId);
    }

    // 현재 시간 구하는 서비스
    private static String getCurrentTimeString(){
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        return now.format(formatter);
    }

    public int getUserOrderCount(Users users) {
        return ordersRepository.countByUsers(users);
    }


}
