package com.example.instrumentshop.Users.Entity;

import com.example.instrumentshop.Goods.Entity.Goods;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "wishlist")
@Entity
public class WishList {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "wish_no_sequence")
    @SequenceGenerator(name = "wish_no_sequence", sequenceName = "wish_no_sequence", allocationSize = 1, initialValue = 0)
    @Column(name = "wish_no")
    private Long wishNo;

    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "goods_id", referencedColumnName = "goods_id")
    private Goods goods;

    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "MEMBERUID", referencedColumnName = "MEMBERUID")
    @JsonIgnore
    private Users users;
}
