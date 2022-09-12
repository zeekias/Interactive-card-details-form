import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const DivDesign = styled.div`
  background-color: aqua;
  width: 30%;
  height: 100vh;
  background-image: linear-gradient(#21082f, #451d42, #21082e);
`;
export const Content = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardsContainer = styled.div`
  position: fixed;
  width: 650px;
  height: 520px;
  top: 20%;
  left: 10%;
`;
export const FrontCard = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  .card-background {
    position: absolute;
    z-index: 1;
  }
  .card-info-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;
    padding: 20px;
    position: absolute;
    z-index: 2;
    .card-logo {
      width: 80px;
    }
    .card-info {
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      color: hsl(0, 0%, 100%);
      .card-number {
        max-width: 100%;
        font-size: 32px;
      }
      .card-name-and-exp {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 20px;

        .cardholder {
          max-height: 20px;
          max-width: 250px;
          word-wrap: break-word;
          overflow: hidden;
        }
      }
    }
  }
`;

export const BackCard = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  color: white;
  .card-background {
    position: absolute;
    z-index: 1;
  }
  .card-info-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    z-index: 2;
    right: 10%;
    top: 45%;
  }
`;

export const FormCard = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 150px;
  gap: 20px;
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-weight: 500;
    color: #21082f;
    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      .data {
        width: 80px;
      }
      .cvc {
        width: 180px;
      }
    }
    input {
      height: 40px;
      border-radius: 8px;
      padding: 8px;
    }
    input::placeholder {
      font-size: 18px;
    }
  }

  .submit-btn {
    height: 50px;
    border-radius: 8px;
    background-color: #21082f;
    color: white;
    letter-spacing: 0.1em;
    cursor: pointer;
  }
`;

export const Complete = styled.div`
  width: 100%;
  height: 50%;
  padding-left: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .continue-btn {
    width: 300px;
    height: 50px;
    border-radius: 8px;
    background-color: #21082f;
    color: white;
    letter-spacing: 0.1em;
    cursor: pointer;
  }
`;
