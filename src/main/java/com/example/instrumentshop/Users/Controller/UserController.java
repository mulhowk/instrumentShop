package com.example.instrumentshop.Users.Controller;

import com.example.instrumentshop.Users.DTO.UsersDTO;
import com.example.instrumentshop.Users.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api") //
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping(value = "/login")
    public ResponseEntity<UsersDTO.SignResponse> signin(@RequestBody UsersDTO.SignRequest request) throws Exception {
        return new ResponseEntity<>(userService.login(request), HttpStatus.OK);
    }

    /**
     *
     * @param request
     * @return
     * @throws Exception
     */
    @PostMapping(value = "/register")
    public ResponseEntity<Boolean> signup(@RequestBody UsersDTO.SignRequest request) throws Exception {
        return new ResponseEntity<>(userService.register(request), HttpStatus.OK);
    }

    @GetMapping("/user/info")
    public ResponseEntity<UsersDTO.SignResponse> getUser(@RequestParam String email) throws Exception {
        return new ResponseEntity<>( userService.getUser(email), HttpStatus.OK);
    }

}
