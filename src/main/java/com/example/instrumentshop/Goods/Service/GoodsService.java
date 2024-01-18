package com.example.instrumentshop.Goods.Service;

import com.example.instrumentshop.Goods.DTO.*;
import com.example.instrumentshop.Goods.Entity.*;
import com.example.instrumentshop.Goods.Repository.*;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
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
    private final QNARepository qnaRepository;
    private final QnaReplyRepository qnaReplyRepository;
    private final ReviewRepository reviewRepository;

    private static final String payInfo = "/tempImg/payInfo.png";

    // 전체 호출 서비스(QNA, 리뷰, 상품, QNA댓글, 카테고리, 상품옵션)
    @Transactional
    public List<Goods> getAllGoods(){

        return goodsRepository.findAll();
    }

    // goodsList 서비스
    @Transactional
    public List<Goods> getGoodsByParentCategory(String parentCategory){

        return goodsRepository.findByParentCategoryOrderByGoodsIdDesc(parentCategory);
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
    @Cacheable(value = "goodsCache", key = "#goodsId")
    public Goods findGoodsByGoodsId(Long goodsId){
        return goodsRepository.findByGoodsId(goodsId);
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

    // openMarket 브랜드 값 받아서 상품 조회
    @Transactional
    public List<Goods> findGoodsByGoodsBrand(String brand){

        return goodsRepository.findByGoodsBrandContainingIgnoreCase(brand);
    }

    // openMarket 상품 업데이트
    @Transactional
    public Goods updateGoods(GoodsUpdateDTO goodsUpdateDTO){

        Goods existingGoods = goodsRepository.findByGoodsId(goodsUpdateDTO.getGoodsId());

        Goods updatedGoods =
                Goods.builder()
                        .goodsId(existingGoods.getGoodsId())
                        .goodsImg(existingGoods.getGoodsImg())
                        .parentCategory(goodsUpdateDTO.getParentCategory())
                        .childCategory(goodsUpdateDTO.getChildCategory())
                        .goodsName(goodsUpdateDTO.getGoodsName())
                        .goodsPrice(goodsUpdateDTO.getGoodsPrice())
                        .goodsDetail(goodsUpdateDTO.getGoodsDetail())
                        .goodsPayinfo(existingGoods.getGoodsPayinfo())
                        .goodsDate(existingGoods.getGoodsDate())
                        .openGoods(existingGoods.isOpenGoods())
                        .goodsSellcount(existingGoods.getGoodsSellcount())
                        .goodsQuantity(goodsUpdateDTO.getGoodsQuantity())
                        .goodsCountry(goodsUpdateDTO.getGoodsCountry())
                        .goodsBrand(goodsUpdateDTO.getGoodsBrand())
                        .goodsStatus(existingGoods.isGoodsStatus())
                        .goodsOption(goodsUpdateDTO.getGoodsOption())
                        .goodsDetailImg(existingGoods.getGoodsDetailImg())
                        .build();

        goodsRepository.save(updatedGoods);

        // 옵션 저장해주기
        if (goodsUpdateDTO.getGoodsOption() != null) {
            List<String> optionNames = goodsUpdateDTO.getOptions();

            Options option =
                    Options.builder()
                            .goods(updatedGoods)
                            .goodsOption(goodsUpdateDTO.getGoodsOption())
                            .option1(optionNames.get(0))
                            .option2(optionNames.get(1))
                            .option3(optionNames.get(2))
                            .option4(optionNames.get(3))
                            .option5(optionNames.get(4))
                            .build();
            optionRepository.save(option);
        }

        return goodsRepository.save(updatedGoods);

    }

    // 상품 구매시 구매 수 업데이트
    @Transactional
    public Goods updateGoodsSellCount(GoodsSellDTO goodsSellDTO){

        Goods existingGoods = goodsRepository.findByGoodsId(goodsSellDTO.getGoodsId());

        Goods updatedGoods =
                Goods.builder()
                        .goodsId(existingGoods.getGoodsId())
                        .goodsImg(existingGoods.getGoodsImg())
                        .parentCategory(existingGoods.getParentCategory())
                        .childCategory(existingGoods.getChildCategory())
                        .goodsName(existingGoods.getGoodsName())
                        .goodsPrice(existingGoods.getGoodsPrice())
                        .goodsDetail(existingGoods.getGoodsDetail())
                        .goodsPayinfo(existingGoods.getGoodsPayinfo())
                        .goodsDate(existingGoods.getGoodsDate())
                        .openGoods(existingGoods.isOpenGoods())
                        .goodsSellcount(existingGoods.getGoodsSellcount() + goodsSellDTO.getGoodsSellcount())
                        .goodsQuantity(existingGoods.getGoodsQuantity() - goodsSellDTO.getGoodsSellcount())
                        .goodsCountry(existingGoods.getGoodsCountry())
                        .goodsBrand(existingGoods.getGoodsBrand())
                        .goodsStatus(existingGoods.isGoodsStatus())
                        .goodsOption(existingGoods.getGoodsOption())
                        .goodsDetailImg(existingGoods.getGoodsDetailImg())
                        .build();

        goodsRepository.save(updatedGoods);

        return goodsRepository.save(updatedGoods);

    }

    // 오픈마켓 상품 삭제
    @Transactional
    public void deleteGoods(Long goodsId){

        optionRepository.deleteByGoods_GoodsId(goodsId);
        qnaReplyRepository.deleteByGoods_GoodsId(goodsId);
        qnaRepository.deleteByGoods_GoodsId(goodsId);
        reviewRepository.deleteByGoods_GoodsId(goodsId);
        goodsRepository.deleteByGoodsId(goodsId);
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
