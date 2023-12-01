package com.example.instrumentshop.Goods.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@ToString
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "qnareply")
@Entity
public class QnaReply {

    @Id
    @Column(name = "reply_no")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reply_no_sequence")
    @SequenceGenerator(name = "reply_no_sequence", sequenceName = "reply_no_sequence", allocationSize = 1, initialValue = 2023112716)
    private int replyNo;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "goods_id", referencedColumnName = "goods_id")
    @JsonIgnore
    private Goods goods;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "qna_no", referencedColumnName = "qna_no")
    @JsonIgnore
    private QNA qna;

    @Column(name = "reply_content")
    private String replyContent;

    @Column(name = "reply_date")
    private String replyDate;

}
