package com.example.instrumentshop.Goods.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "category")
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Category {

    @Id
    @Column(name = "parent_category", columnDefinition = "NVARCHAR(30)")
    private String parentCategory;

    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "goods_id", referencedColumnName = "goods_id")
    @JsonIgnore
    private Goods goods;

    @Column(name = "child_category1", columnDefinition = "NVARCHAR(30)")
    private String childCategory1;

    @Column(name = "child_category2", columnDefinition = "NVARCHAR(30)")
    private String childCategory2;

    @Column(name = "child_category3", columnDefinition = "NVARCHAR(30)")
    private String childCategory3;

    @Column(name = "child_category4", columnDefinition = "NVARCHAR(30)")
    private String childCategory4;

    @Column(name = "child_category5", columnDefinition = "NVARCHAR(30)")
    private String childCategory5;

    @Column(name = "child_category6", columnDefinition = "NVARCHAR(30)")
    private String childCategory6;
}
