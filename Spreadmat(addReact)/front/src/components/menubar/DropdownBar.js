import OpenColor from "open-color";
import styled from "styled-components";
import { BasicLI } from "../common/BasicLI";
import { BasicUL } from "../common/BasicUL";
import { LinkButton } from "../common/LinkButton";

const DropdownBarBlock = styled(BasicUL)`
  background-color: ${OpenColor.red[3]};
`;

const DropdownSubBlock = styled(BasicUL)`
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;

  transform: translateY(-20px);
  margin-top: 26px;
  background-color: ${OpenColor.blue[3]};
  position: absolute;
`;

const DropdownHead = styled(BasicLI)`
  text-align: center;
  background-color: ${OpenColor.blue[1]};
  position: relative;

  &:hover > ul {
    visibility: visible;
    opacity: 1;
    transform: translateY (0);
  }
`;

const DropdownButton = styled(BasicLI)`
  width: 150px;
  background-color: ${OpenColor.blue[1]};
  text-align: center;
`;
const DropdownBar = () => {
  return (
    <DropdownBarBlock>
      <DropdownHead>
        MY VENDOR
        <DropdownSubBlock>
          <DropdownButton>
            <LinkButton to={"/map/vendor/1"}>나의 상점 방문</LinkButton>
          </DropdownButton>
          <DropdownButton>
            <LinkButton to={"/manage"}>상점 관리</LinkButton>
          </DropdownButton>
          <DropdownButton>
            <LinkButton to={"/merchandise"}>물품 관리</LinkButton>
          </DropdownButton>
          <DropdownButton>
            <LinkButton to={"/transaction"}>거래 관리</LinkButton>
          </DropdownButton>
        </DropdownSubBlock>
      </DropdownHead>
      <DropdownButton></DropdownButton>
    </DropdownBarBlock>
  );
};

export default DropdownBar;
