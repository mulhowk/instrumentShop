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
@Table(name = "qna")
@Entity
public class QNA {
    @Id
    @Column(name = "qna_no")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "qna_no_sequence")
    @SequenceGenerator(name = "qna_no_sequence", sequenceName = "qna_no_sequence", allocationSize = 1, initialValue = 2023112716)
    private int qnaNo;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "goods_id", referencedColumnName = "goods_id")
    @JsonIgnore
    private Goods goods;

    @Column(name = "qna_writer", columnDefinition = "NVARCHAR(20)")
    private String qnaWriter;

    @Column(name = "qna_title", columnDefinition = "NVARCHAR(100)")
    private String qnaTitle;

    @Column(name = "qna_content", columnDefinition = "NVARCHAR(1000)")
    private String qnaContent;

    @Column(name = "qna_file", columnDefinition = "NVARCHAR(100)")
    private String qnaFile;

    @Column(name = "qna_date")
    private String qnaDate;
}
