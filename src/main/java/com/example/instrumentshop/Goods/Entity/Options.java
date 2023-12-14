package com.example.instrumentshop.Goods.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "options")
@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Options {

    @Id
    @Column(name = "goods_option", columnDefinition = "NVARCHAR(20)")
    private String goodsOption;

    @ManyToOne(cascade = CascadeType.DETACH)
    @JoinColumn(name = "goods_id", referencedColumnName = "goods_id")
    @JsonIgnore
    private Goods goods;

    @Column(name = "option1", columnDefinition = "NVARCHAR(20)")
    private String option1;

    @Column(name = "option2", columnDefinition = "NVARCHAR(20)")
    private String option2;

    @Column(name = "option3", columnDefinition = "NVARCHAR(20)")
    private String option3;

    @Column(name = "option4", columnDefinition = "NVARCHAR(20)")
    private String option4;

    @Column(name = "option5", columnDefinition = "NVARCHAR(20)")
    private String option5;

}
