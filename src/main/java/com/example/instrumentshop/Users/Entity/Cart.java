package com.example.instrumentshop.Users.Entity;

import com.example.instrumentshop.Goods.Entity.Goods;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cart")
@Entity
public class Cart {

    @Id
    @Column(name = "cart_no")
    private Long cartNo;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "goods_id", referencedColumnName = "goods_id")
    @JsonIgnore
    private Goods goods;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "MEMBERUID", referencedColumnName = "MEMBERUID")
    @JsonIgnore
    private Users MEMBERUID;

    @Column(name = "goodsQuantity")
    private int goodsQuantity;

    @Column(name = "goodsPrice")
    private int goodsPrice;

    @Column(name = "goodsName")
    private String goodsName;

}
