package com.example.instrumentshop.Address.Controller;

import com.example.instrumentshop.Address.DTO.AddressDTO;
import com.example.instrumentshop.Address.DTO.AddressInfoDTO;
import com.example.instrumentshop.Address.DTO.AddressResponseDTO;
import com.example.instrumentshop.Address.DTO.AddressSetRequestDTO;
import com.example.instrumentshop.Address.Service.AddressService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/address")
@RequiredArgsConstructor
public class AddressController {

    private final AddressService addressService;
    private static final Logger logger = LoggerFactory.getLogger(AddressController.class);

    // 특정 MEMBERUID에 해당하는 모든 주소를 조회하는 엔드포인트
    @PostMapping("/info")
    public ResponseEntity<List<AddressResponseDTO>> getAddressesByMemberUid(@RequestBody AddressInfoDTO request){

        List<AddressResponseDTO> addresses = addressService.getAddressesByUser(request.getMemberUid());

        return ResponseEntity.ok(addresses);
    }

    // 특정 주소를 기본 주소로 설정하는 엔드포인트
    @PostMapping("/setPrimary")
    public ResponseEntity<?> setPrimaryAddress(@RequestBody AddressSetRequestDTO request, Principal principal) {
        try {
            addressService.setPrimaryAddress(request.getMemberId(), request.getAddressId());
            return ResponseEntity.ok().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // 주소를 등록하는 엔드포인트
    @PostMapping("/add")
    public ResponseEntity<Boolean> addAddress(@RequestBody AddressDTO addressDTO, Principal principal) {
        logger.info("Adding address for user: {}", principal);
        try {

            addressService.saveAddress(addressDTO);
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (Exception e) {
            // 로그 기록, 에러 처리 등 필요한 작업 수행
            return new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}