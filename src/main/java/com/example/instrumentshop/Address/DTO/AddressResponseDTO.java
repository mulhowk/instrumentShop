package com.example.instrumentshop.Address.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddressResponseDTO {
    private Long addressId;
    private String addressReceiver;
    private String addressNickname;
    private String memberPhone;
    private String addressValue;
    private String addressPostnumber;
}

