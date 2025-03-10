import styled from "styled-components";
import Colors from "../../../Styles/Colors";

export const ReadContainer = styled.section`
  width: 1080px;
  margin: 0 auto;
  text-align: center;
`;

//머리부분 -- 이미지 버튼 작성자 날짜
export const TitleContainer = styled.div`
  margin: 10px 0;
  position: relative;
  text-align: right;
  height: 300px;
`;
export const TitleBox = styled.div`
  margin-bottom: 10px;
  width: 1080px;
`;
export const UpperTitle = styled.div`
  height: 150px;
  line-height: 240px;
  padding: 0 20px 0 0;
  border-bottom: 1px solid black;
`;
export const TitleButton = styled.button`
  width: 80px;
  height: 40px;
  margin: 0px 5px;
  border-radius: 10px;
  border: 2px solid ${Colors.postBackground};
  background-color: white;
  font-weight: 700;
  &:hover {
    border: 2px solid ${Colors.postBackgroundBorder};
    background-color: ${Colors.postBackground};
    cursor: pointer;
  }
`;
export const LowTitle = styled.div`
  font-size: 14px;
  padding-right: 30px;
  p:nth-child(1) {
    font-weight: 700;
  }
`;
export const TitleImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

//내용부분 --제목,주소,내용
export const ContentsContainer = styled.div`
  padding-bottom: 150px;

  div:nth-child(1) {
    h1 {
      font-size: 32px;
    }
    span {
      font-size: 12px;
    }
    margin-bottom: 50px;
  }

  div:nth-child(2) {
    font-size: 16px;
    padding: 10px;
    height: 100px;
    align-items: center;
    p:nth-child(1) {
      text-decoration: line-through;
      font-size: 20px;
      padding-bottom: 10px;
    }
    p:nth-child(2) {
      font-size: 50px;
    }
    p:nth-child(3) {
      font-size: 30px;
      color: red;
    }
  }
`;
