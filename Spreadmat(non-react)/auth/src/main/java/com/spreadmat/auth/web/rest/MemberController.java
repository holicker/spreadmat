package com.spreadmat.auth.web.rest;

import com.spreadmat.auth.domain.Member;
import com.spreadmat.auth.service.MemberService;
import com.spreadmat.auth.web.rest.dto.MemberDTO;
import com.spreadmat.auth.web.rest.mapper.MemberMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping(path = "member", produces = "application/json")
public class MemberController {

    @Autowired private MemberService memberService;
    @Autowired private MemberMapper memberMapper;
    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/register")
    public ResponseEntity<MemberDTO> registerMember(@RequestBody MemberDTO memberDTO){
        Member member = memberMapper.toEntity(memberDTO.passwordEncrypt(passwordEncoder));
        Member registerdMember = memberService.createMember(member);
        MemberDTO responseDTO = memberMapper.toDto(registerdMember);
        return ResponseEntity.ok(responseDTO);
    }
}
