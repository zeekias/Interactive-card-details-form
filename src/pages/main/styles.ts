import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  button:hover {
    box-shadow: 5px 5px 15px -7px #000000;
  }

  @media (max-width: 688px) {
    flex-direction: column;
  }
`;

export const AsideDesign = styled.aside`
  width: 30%;
  height: 100vh;
  background-image: linear-gradient(#21082f, #451d42, #21082e);
  background-size: cover;
  background-position: center;
  @media (max-width: 688px) {
    width: 100%;
    height: 30%;
  }
`;
export const Content = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 688px) {
    width: 100%;
    height: 50%;
  }
`;

export const CardsContainer = styled.div`
  position: absolute;
  width: 600px;
  height: 500px;
  top: 20%;
  left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 688px) {
    top: 5%;
    left: auto;
    width: 90%;
    flex-direction: column-reverse;
    height: 300px;
    width: 100%;
  }
`;
export const FrontCard = styled.div`
  background-image: url("/img/bg-card-front.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 447px;
  height: 250px;
  border-radius: 8px;
  .card-info-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .card-logo {
      margin: 20px;
      width: 50px;
    }
    .card-info {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      gap: 50px;
      color: hsl(0, 0%, 100%);
      .card-number {
        max-width: 100%;
        font-size: 32px;
      }
      .card-name-and-exp {
        width: 90%;
        margin-bottom: 10px;
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
  @media (max-width: 688px) {
    width: 80%;
    height: 60%;
    margin-left: 30px;
    margin-top: -20px;

    z-index: 99;
    .card-info-container {
      display: flex;
      padding: 20px;
      .card-logo {
        padding: 0;
        width: 40px;
      }
      .card-info {
        gap: 10px;
        .card-number {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
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
  }
`;

export const BackCard = styled.div`
  background-image: url("/img/bg-card-back.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 447px;
  height: 250px;
  display: flex;
  margin-top: -10px;
  margin-left: 120px;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  color: white;
  .card-info-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    right: 10%;
    top: 45%;
  }
  @media (max-width: 688px) {
    margin-left: 0;
    width: 80%;
    height: 200px;
    border-radius: 8px;
    .card-info-container {
      right: 10%;
      top: 42%;
    }
  }
`;

export const FormCard = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 100px;
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

  @media (max-width: 688px) {
    width: 100vw;
    padding-left: 0px;
    padding-top: 52%;
    display: flex;
    align-items: center;
    justify-content: center;
    label {
      width: 80%;
      div {
        gap: 20px;
        .data {
          width: 80px;
        }
        .cvc {
          width: 100px;
        }
      }
    }

    .submit-btn {
      width: 80%;
    }
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
    min-height: 50px;
    border-radius: 8px;
    background-color: #21082f;
    color: white;
    letter-spacing: 0.1em;
    cursor: pointer;
  }
  @media (max-width: 688px) {
    padding-left: 0px;
    padding-top: 150px;
  }
`;
