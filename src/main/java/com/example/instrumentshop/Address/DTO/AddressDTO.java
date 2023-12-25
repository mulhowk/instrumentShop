package com.example.instrumentshop.Address.DTO;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddressDTO {

    private Long memberUid;
    private String memberEmail;
    private String addressReceiver;
    private String addressNickname;
    private String memberPhone;
    private String addressValue;
    private String addressPostnumber;

}

