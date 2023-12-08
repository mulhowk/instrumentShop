package com.example.instrumentshop.Goods.Service;

import com.example.instrumentshop.Goods.DTO.QnaDTO;
import com.example.instrumentshop.Goods.DTO.QnaReplyDTO;
import com.example.instrumentshop.Goods.Entity.QNA;
import com.example.instrumentshop.Goods.Entity.QnaReply;
import com.example.instrumentshop.Goods.Repository.QNARepository;
import com.example.instrumentshop.Goods.Repository.QnaReplyRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
public class QNAService {

    private final QNARepository qnaRepository;
    private final QnaReplyRepository qnaReplyRepository;


    @Transactional
    public List<QNA> getAllQna(){

        return qnaRepository.findAll();
    }

    @Transactional
    public List<QnaReply> getAllQnaReply(){

        return qnaReplyRepository.findAll();
    }


    @Transactional
    public List<QNA> findQnaByGoodsId(Long goodsId){

        return qnaRepository.findByGoods_GoodsId(goodsId);
    }

    @Transactional
    public List<QnaReply> findQnaReplyByGoodsId(Long goodsId){

        return qnaReplyRepository.findByGoods_GoodsIdOrderByQnaAsc(goodsId);
    }

    @Transactional
    public QNA findQnaByQnaNo(int qnaNo){

        return qnaRepository.findByQnaNo(qnaNo);
    }

    // Qna 댓글 등록 서비스
    @Transactional
    public QnaReply createQnaReply(QnaReplyDTO qnaReplyDTO){

        QnaReply newReply = QnaReply.builder()
                .goods(qnaReplyDTO.getGoods())
                .qna(qnaReplyDTO.getQna())
                .replyContent(qnaReplyDTO.getReplyContent())
                .replyDate(getCurrentTimeString())
                .build();

        qnaReplyRepository.save(newReply);

        return qnaReplyRepository.save(newReply);
    }

    // Qna 등록 서비스
    @Transactional
    public QNA createQna(QnaDTO qnaDTO){
        if(qnaDTO.getQnaFile() != null) {
            MultipartFile QnaFile = qnaDTO.getQnaFile();
            String filePath = saveFile(QnaFile);

            QNA newQna = QNA.builder()
                    .qnaWriter(qnaDTO.getQnaWriter())
                    .qnaTitle(qnaDTO.getQnaTitle())
                    .qnaContent(qnaDTO.getQnaContent())
                    .qnaFile(filePath)
                    .qnaDate(getCurrentTimeString())
                    .goods(qnaDTO.getGoods())
                    .build();

            qnaRepository.save(newQna);

            return qnaRepository.save(newQna);

        } else {

            QNA newQna = QNA.builder()
                    .qnaWriter(qnaDTO.getQnaWriter())
                    .qnaTitle(qnaDTO.getQnaTitle())
                    .qnaContent(qnaDTO.getQnaContent())
                    .qnaDate(getCurrentTimeString())
                    .goods(qnaDTO.getGoods())
                    .build();

            qnaRepository.save(newQna);

            return qnaRepository.save(newQna);
        }
    }

    // 파일 저장 로직 구현
    private String saveFile(MultipartFile file) {
        // 파일을 저장하는 로직을 구현
        // 이 부분은 실제 파일 시스템에 저장하거나, AWS S3 등의 외부 저장소에 업로드할 수 있음
        try {
            // 파일 저장할 임시 디렉토리 경로
            String uploadDir = "/Users/gangtaehyeog/IdeaProjects/instrumentShop/src/main/resources/tempImg";

            File uploadDirFile = new File(uploadDir);

            // 디렉토리가 존재하지 않으면 생성
            if (!uploadDirFile.exists()) {
                uploadDirFile.mkdirs();
            }

            // 파일의 원본 이름을 가져옴
            String originalFileName = file.getOriginalFilename();

            // 파일을 서버에 저장할 경로 지정
            String filePath = uploadDir + File.separator + originalFileName;

            // 파일 저장
            file.transferTo(new File(filePath));

            return "/tempImg" + File.separator + originalFileName;

        } catch (IOException e) {
            throw new RuntimeException("Failed to store file", e);
        }

    }

    // 현재 시간 구하는 서비스
    private static String getCurrentTimeString(){
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        return now.format(formatter);
    }

}
