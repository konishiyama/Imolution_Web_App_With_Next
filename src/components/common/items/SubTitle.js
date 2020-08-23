import styled from "styled-components"

export const SubTitle = styled.div`
  margin: 5rem auto 3.5rem;
  text-align: center;

  span {
    font-family: "游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro",
      "Hiragino Mincho Pro", "Sawarabi Mincho", "HG明朝E", "ＭＳ Ｐ明朝",
      "MS PMincho", "MS 明朝", serif;
    font-weight: 200;
    letter-spacing: 0.03em;
    font-size: 20px;
    color: #444444;
    margin: 0 auto;
  }
  span:after {
    content: "";
    display: block;
    height: 1px;
    width: 30vw;
    margin: 1.5rem auto 0;
    background-color: #4c9c41;
  }
`
