package com.example.instrumentshop.Goods.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "goods")
@Entity
public class Goods {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "goods_id_sequence")
    @SequenceGenerator(name = "goods_id_sequence", sequenceName = "goods_id_sequence", allocationSize = 1, initialValue = 2023112219)
    @Column(name = "goods_id", nullable = false, columnDefinition = "INT(20)")
    private Long goodsId;

    @Column(name = "goods_img", length = 100)
    private String goodsImg;

    @Column(name = "parent_category", length = 15)
    private String parentCategory;

    @Column(name = "child_category", length = 15)
    private String childCategory;

    @Column(name = "goods_name", length = 200)
    private String goodsName;

    @Column(name = "goods_price")
    private int goodsPrice;

    @Column(name = "goods_detail", length = 1000)
    private String goodsDetail;

    @Column(name = "goods_payinfo", length = 1000)
    private String goodsPayinfo;

    @Column(name = "goods_date")
    private String goodsDate;

    @Column(name = "open_goods")
    private boolean openGoods;

    @Column(name = "goods_sellcount")
    private int goodsSellcount;

    @Column(name = "goods_quantity")
    private int goodsQuantity;

    @Column(name = "goods_country", length = 10)
    private String goodsCountry;

    @Column(name = "goods_brand", length = 20)
    private String goodsBrand;

    @Column(name = "goods_status", length = 5)
    private String goodsStatus;

    @Column(name = "goods_option", length = 20)
    private String goodsOption;

    @OneToMany(mappedBy = "goods", cascade = CascadeType.ALL)
    private List<Options> options;

    @Column(name = "goods_detail_img", length = 100)
    private String goodsDetailImg;

    // Builder 클래스
    public static class GoodsBuilder {

        // Builder에 기본값 설정
        private boolean openGoods = true;
        private int goodsSellCount = 0;
        private String goodsStatus = "판매";
        private String goodsDate;

        public GoodsBuilder goodsDate(String goodsDate) {
            this.goodsDate = goodsDate;
            return this;
        }

    }

}
