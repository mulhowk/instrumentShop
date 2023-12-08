package com.example.instrumentshop.Goods.Service;


import com.example.instrumentshop.Goods.DTO.ReviewDTO;
import com.example.instrumentshop.Goods.Entity.Review;
import com.example.instrumentshop.Goods.Repository.ReviewRepository;
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
public class ReviewService {

    private final ReviewRepository reviewRepository;

    @Transactional
    public List<Review> getAllReviews(){

        return reviewRepository.findAll();
    }

    @Transactional
    public Double getGoodsReviewAvgScoreByGoodsId(Long goodsId){

        return reviewRepository.findAverageReviewScoreByGoodsId(goodsId);
    }

    @Transactional
    public Long getGoodsReviewCountByGoodsId(Long goodsId){

        return reviewRepository.countByGoods_GoodsId(goodsId);
    }

    @Transactional
    public List<Review> findReviewByGoodsId(Long goodsId){

        return reviewRepository.findByGoods_GoodsId(goodsId);
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
