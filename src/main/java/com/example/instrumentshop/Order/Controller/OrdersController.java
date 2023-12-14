package com.example.instrumentshop.Order.Controller;

import com.example.instrumentshop.Order.DTO.OrdersDTO;
import com.example.instrumentshop.Order.Entity.Orders;
import com.example.instrumentshop.Order.Service.OrdersService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping
public class OrdersController {

    private final OrdersService ordersService;

    // 모든 주문 정보 조회
    @GetMapping("/orders/all")
    public List<Orders> getAllOrders(){

        return ordersService.getAllOrders();
    }

    // MEMBERUID를 통해 조회한 주문 정보
    @GetMapping("/orders/{MEMBERUID}")
    public List<Orders> getOrdersByMEMBERUID(@PathVariable Long MEMBERUID){

        return ordersService.getOrdersByMEMBERUID(MEMBERUID);
    }

    // 주문 정보 받기
    @PostMapping("/orders/post")
    public ResponseEntity<Orders> createOrders(@ModelAttribute OrdersDTO ordersDTO){

        Orders newOrders = ordersService.createOrders(ordersDTO);
        System.out.println(ResponseEntity.status(HttpStatus.CREATED).body(newOrders));

        return ResponseEntity.status(HttpStatus.CREATED).body(newOrders);
    }




}
