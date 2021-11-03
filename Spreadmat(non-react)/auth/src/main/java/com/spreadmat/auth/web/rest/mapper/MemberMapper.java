package com.spreadmat.auth.web.rest.mapper;

import com.spreadmat.auth.domain.Member;
import com.spreadmat.auth.web.rest.dto.MemberDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MemberMapper extends EntityMapper<MemberDTO, Member> {

    Member toEntity(MemberDTO memberDTO);

    @Mapping(target = "token", ignore = true)
    @Mapping(target = "passwordEncrypt", ignore = true)
    MemberDTO toDto(Member member);
}
