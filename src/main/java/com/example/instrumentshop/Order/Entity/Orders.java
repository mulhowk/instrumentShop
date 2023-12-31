package com.example.instrumentshop.Order.Entity;

import com.example.instrumentshop.Goods.Entity.Goods;
import com.example.instrumentshop.Users.Entity.Users;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orders")
@Entity
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "order_id_sequence")
    @SequenceGenerator(name = "order_id_sequence", sequenceName = "order_id_sequence", allocationSize = 1, initialValue = 202312110)
    @Column(name = "order_id")
    private Long orderId;

    @ElementCollection
    private List<Integer> goodsId;

    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "MEMBERUID", referencedColumnName = "MEMBERUID")
    private Users users;

    @ElementCollection
    private List<Integer> goodsQuantity;

    @ElementCollection
    private List<String> options;

    private int totalPrice;
    private String paymentInformation;
    private String orderMsg;
    private String deliverMsg;
    private String orderDate;
    private String orderName;
    private String orderEmail;
    private String orderPhone;
    private String deliverName;
    private String deliverPhone;

}
