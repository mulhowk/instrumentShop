package com.example.instrumentshop.Users.Controller;

import com.example.instrumentshop.Global.Jwt.Controller.JwtController;
import com.example.instrumentshop.Users.DTO.ReservesDTO;
import com.example.instrumentshop.Users.DTO.UsersDTO;
import com.example.instrumentshop.Users.Entity.Users;
import com.example.instrumentshop.Users.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("") //
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private static final Logger logger = org.slf4j.LoggerFactory.getLogger(UserController.class);

    @PostMapping(value = "/api/login")
    public ResponseEntity<UsersDTO.SignResponse> signin(@RequestBody UsersDTO.SignRequest request) throws Exception {
        return new ResponseEntity<>(userService.login(request), HttpStatus.OK);
    }

    @GetMapping("/api/all/users")
    public ResponseEntity<List<UsersDTO.UserAllInfoDTO>> getAllUserInformation() {
        List<UsersDTO.UserAllInfoDTO> allUserInfo = userService.getAllUserAllInfo();
        return ResponseEntity.ok(allUserInfo);
    }

    @GetMapping("/api/currentUser")
    public String currentUser(Principal principal) {
        if (principal != null) {
            // 사용자가 로그인 상태임
            return principal.getName(); // 로그인한 사용자의 이름을 반환
        } else {
            // 사용자가 로그인 상태가 아님
            return "Guest";
        }
    }

    /**
     *
     * @param request
     * @return
     * @throws Exception
     */
    @PostMapping(value = "/api/register")
    public ResponseEntity<Boolean> signup(@RequestBody UsersDTO.SignRequest request) throws Exception {
        return new ResponseEntity<>(userService.register(request), HttpStatus.OK);
    }

    @PostMapping("/api/user/info")
    public ResponseEntity<UsersDTO.SignResponse> getUser(@RequestBody UsersDTO.UserInfoDTO request, Principal principal) throws Exception {
        logger.info("USER INFO - principal : " + principal.getName());
        return new ResponseEntity<>(userService.getUser(request.getMemberUid()), HttpStatus.OK);
    }

    @GetMapping("/api/user/login/check")
    public ResponseEntity<?> getCurrentUserInfo(@AuthenticationPrincipal UserDetails userDetails) {
        if (userDetails == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User is not logged in");
        } else {
            // 사용자 정보 반환
            return ResponseEntity.ok(userDetails);
        }
    }

    @PostMapping("/api/user/reserves")
    public ResponseEntity<Users> addReserves(@ModelAttribute ReservesDTO reservesDTO){
        Users updatedUser = userService.addReserves(reservesDTO);

        return ResponseEntity.ok(updatedUser);
    }

    @PutMapping("/api/user/reservesAdd/{memberUID}")
    public ResponseEntity<?> addReserves(@PathVariable Long memberUID, @RequestBody ReservesDTO reserveDTO) {
        try {
            userService.addReserves(memberUID, reserveDTO.getMemberReserves());
            return ResponseEntity.ok().body("Reserves updated successfully.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error updating reserves: " + e.getMessage());
        }
    }

    @GetMapping("/api/user/reserves/{MEMBERUID}")
    public int getReserves(@PathVariable Long MEMBERUID){

        return userService.findReserves(MEMBERUID);
    }

}
