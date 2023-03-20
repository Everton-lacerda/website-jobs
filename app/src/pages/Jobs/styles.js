import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 90%;
  margin: 50px auto;

`;
export const Filters = styled.div`
  width: 40%;
  padding: 20px;
`;
export const JobsList = styled.div`
  width: 100%;
  padding: 20px;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: ${(props) => props.theme.colors.gray} solid 1px;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  .logo {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .summary {
    h3 {
      font-size: 35px;
      font-weight: 500;
      color: #34495e;
      margin-bottom: 20px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;

      li {
        display: flex;
        font-size: 18px;
        padding: 5px 20px 5px 0px;
        display: flex;
        align-items: center;

        p {
          margin: auto 0;
          padding-left: 5px;
          color: gray;
          font-weight: 400;
          width: 160px;
        }
      }
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
    margin-top: 10px;
    flex-wrap: wrap;

    .pill {
      background-color: ${(props) => props.theme.colors.lightGray};
      padding: 10px 20px;
      border-radius: 20px;
      margin-right: 10px;
      margin-top: 10px;
    }
  }
`;
