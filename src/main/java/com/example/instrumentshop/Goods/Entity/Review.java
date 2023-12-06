package com.example.instrumentshop.Goods.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "review")
@Entity
public class Review {

    @Id
    @Column(name = "review_no")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "review_no_sequence")
    @SequenceGenerator(name = "review_no_sequence", sequenceName = "review_no_sequence", allocationSize = 1, initialValue = 2023112716)
    private int reviewNo;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "goods_id", referencedColumnName = "goods_id")
    @JsonIgnore
    private Goods goods;

    @Column(name = "review_writer", columnDefinition = "NVARCHAR(20)")
    private String reviewWriter;

    @Column(name = "review_title", columnDefinition = "NVARCHAR(100)")
    private String reviewTitle;

    @Column(name = "review_content", columnDefinition = "NVARCHAR(1000)")
    private String reviewContent;

    @Column(name = "review_file", columnDefinition = "NVARCHAR(100)")
    private String reviewFile;

    @Column(name = "review_date")
    private String reviewDate;

    @Column(name = "review_score")
    private Float reviewScore;
}
