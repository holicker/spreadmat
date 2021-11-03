package com.spreadmat.auth.web.rest;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class TestController {

    @GetMapping("/test")
    public ResponseEntity<String> idTest(@AuthenticationPrincipal String userId){
        log.info("userId : {}", userId);
        if (userId != "anonymousUser") return ResponseEntity.ok(userId);

        return ResponseEntity.badRequest().build();

    }
}
