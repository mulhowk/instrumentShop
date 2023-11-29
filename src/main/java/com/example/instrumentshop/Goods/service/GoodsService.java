package com.example.instrumentshop.Goods.service;

import com.example.instrumentshop.Goods.DTO.GoodsDTO;
import com.example.instrumentshop.Goods.Entity.Category;
import com.example.instrumentshop.Goods.Entity.Goods;
import com.example.instrumentshop.Goods.Entity.Options;
import com.example.instrumentshop.Goods.repository.CategoryRepository;
import com.example.instrumentshop.Goods.repository.GoodsRepository;
import com.example.instrumentshop.Goods.repository.OptionRepository;
import com.example.instrumentshop.Goods.repository.ReviewRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GoodsService {
    private final GoodsRepository goodsRepository;
    private final OptionRepository optionRepository;
    private final CategoryRepository categoryRepository;
    private final ReviewRepository reviewRepository;

    private static final String payInfo = "구매안내입니다.";

    @Transactional
    public List<Goods> getAllGoods(){

        return goodsRepository.findAll();
    }
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
    public Long getCountOfGoodsByChildCategory(String childCategory){

        return goodsRepository.countByChildCategory(childCategory);
    }

    @Transactional
    public List<Goods> findByQuery(String query){

        return goodsRepository.queryMethod(query);
    }

    @Transactional
    public List<Goods> findByChildCategory(String childCategory){

        return goodsRepository.findByChildCategoryOrderByGoodsIdDesc(childCategory);
    }

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
                        .goodsDate(goodsDTO.getGoodsDate() != null ? goodsDTO.getGoodsDate() : new Date())
                        .goodsOption(goodsDTO.getGoodsOption())
                        .goodsQuantity(goodsDTO.getGoodsQuantity())
                        .goodsCountry(goodsDTO.getGoodsCountry())
                        .goodsBrand(goodsDTO.getGoodsBrand())
                        .goodsDetailImg(detailFilePath)
                        .build();

        goodsRepository.save(newGoods);

        // 옵션 저장해주기 기본
        if (goodsDTO.getOptions() != null) {
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

}
