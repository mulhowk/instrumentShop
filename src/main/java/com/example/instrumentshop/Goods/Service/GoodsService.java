package com.example.instrumentshop.Goods.Service;

import com.example.instrumentshop.Goods.DTO.GoodsDTO;
import com.example.instrumentshop.Goods.DTO.QnaDTO;
import com.example.instrumentshop.Goods.DTO.QnaReplyDTO;
import com.example.instrumentshop.Goods.DTO.ReviewDTO;
import com.example.instrumentshop.Goods.Entity.*;
import com.example.instrumentshop.Goods.Repository.*;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GoodsService {
    private final GoodsRepository goodsRepository;
    private final OptionRepository optionRepository;
    private final CategoryRepository categoryRepository;
    private final ReviewRepository reviewRepository;
    private final QNARepository qnaRepository;
    private final QnaReplyRepository qnaReplyRepository;

    private static final String payInfo = "/tempImg/payInfo.png";

    // 전체 호출 서비스(QNA, 리뷰, 상품, QNA댓글, 카테고리, 상품옵션)
    @Transactional
    public List<Goods> getAllGoods(){

        return goodsRepository.findAll();
    }

    @Transactional
    public List<Review> getAllReviews(){

        return reviewRepository.findAll();
    }

    @Transactional
    public List<QNA> getAllQna(){

        return qnaRepository.findAll();
    }

    @Transactional
    public List<QnaReply> getAllQnaReply(){

        return qnaReplyRepository.findAll();
    }

    // goodsList 서비스
    @Transactional
    public List<Goods> getGoodsByParentCategory(String parentCategory){

        return goodsRepository.findByParentCategoryOrderByGoodsIdDesc(parentCategory);
    }

    @Transactional
    public double getGoodsReviewAvgScoreByGoodsId(Long goodsId){

        return reviewRepository.findAverageReviewScoreByGoodsId(goodsId);
    }

    @Transactional
    public Long getGoodsReviewCountByGoodsId(Long goodsId){

        return reviewRepository.countByGoods_GoodsId(goodsId);
    }

    @Transactional
    public List<Category> findChildCategoryByParentCategory(String parentCategory){

        return categoryRepository.findByParentCategory(parentCategory);
    }

    @Transactional
    public List<Goods> findByQuery(String query){

        return goodsRepository.queryMethod(query);
    }

    @Transactional
    public List<Goods> findByChildCategory(String childCategory){

        return goodsRepository.findByChildCategoryOrderByGoodsIdDesc(childCategory);
    }

    // goodsList 안 goodsListCategory 서비스
    @Transactional
    public Long getCountOfGoodsByChildCategory(String childCategory){

        return goodsRepository.countByChildCategory(childCategory);
    }

    // goodsDetails 서비스
    @Transactional
    public Goods findGoodsByGoodsId(Long goodsId){

        return goodsRepository.findByGoodsId(goodsId);
    }

    @Transactional
    public List<Review> findReviewByGoodsId(Long goodsId){

        return reviewRepository.findByGoods_GoodsId(goodsId);
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

    // 리뷰 등록 서비스
    @Transactional
    public Review createReview(ReviewDTO reviewDTO){

        if(reviewDTO.getReviewFile() != null) {
            MultipartFile ReviewFile = reviewDTO.getReviewFile();
            String filePath = saveFile(ReviewFile);


            Review newReview = Review.builder()
                    .reviewWriter(reviewDTO.getReviewWriter())
                    .reviewTitle(reviewDTO.getReviewTitle())
                    .reviewScore(reviewDTO.getReviewScore())
                    .reviewContent(reviewDTO.getReviewContent())
                    .reviewFile(filePath)
                    .reviewDate(getCurrentTimeString())
                    .goods(reviewDTO.getGoods())
                    .build();
            reviewRepository.save(newReview);


            return reviewRepository.save(newReview);
        } else {
            Review newReview = Review.builder()
                    .reviewWriter(reviewDTO.getReviewWriter())
                    .reviewTitle(reviewDTO.getReviewTitle())
                    .reviewScore(reviewDTO.getReviewScore())
                    .reviewContent(reviewDTO.getReviewContent())
                    .reviewDate(getCurrentTimeString())
                    .goods(reviewDTO.getGoods())
                    .build();
            reviewRepository.save(newReview);


            return reviewRepository.save(newReview);
        }

    }

    // openMarket 서비스
    @Transactional
    public Goods createGoods(GoodsDTO goodsDTO) {

        // 이미지 파일 받아 서버에 저장하고 그 경로 문자열 뽑기
        MultipartFile goodsImg = goodsDTO.getGoodsImg();
        String filePath = saveFile(goodsImg);
        String detailFilePath = null;
        if (goodsDTO.getGoodsDetailImg() != null) {
            MultipartFile goodsDetailImg = goodsDTO.getGoodsDetailImg();
            detailFilePath = saveFile(goodsDetailImg);
        }
        // 상품 저장 기본
        Goods newGoods =
                Goods.builder()
                        .goodsPayinfo(payInfo)
                        .goodsName(goodsDTO.getGoodsName())
                        .goodsPrice(goodsDTO.getGoodsPrice())
                        .goodsImg(filePath)
                        .parentCategory(goodsDTO.getParentCategory())
                        .childCategory(goodsDTO.getChildCategory())
                        .goodsDetail(goodsDTO.getGoodsDetail())
                        .goodsDate(getCurrentTimeString())
                        .goodsOption(goodsDTO.getGoodsOption())
                        .goodsQuantity(goodsDTO.getGoodsQuantity())
                        .goodsCountry(goodsDTO.getGoodsCountry())
                        .goodsBrand(goodsDTO.getGoodsBrand())
                        .goodsDetailImg(detailFilePath)
                        .build();

        goodsRepository.save(newGoods);

        // 옵션 저장해주기
        if (goodsDTO.getGoodsOption() != null) {
            List<String> optionNames = goodsDTO.getOptions();

            Options option =
                    Options.builder()
                            .goods(newGoods)
                            .goodsOption(goodsDTO.getGoodsOption())
                            .option1(optionNames.get(0))
                            .option2(optionNames.get(1))
                            .option3(optionNames.get(2))
                            .option4(optionNames.get(3))
                            .option5(optionNames.get(4))
                            .build();
            optionRepository.save(option);
        }
        return goodsRepository.save(newGoods);
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

    private static String getCurrentTimeString(){
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        return now.format(formatter);
    }

}
