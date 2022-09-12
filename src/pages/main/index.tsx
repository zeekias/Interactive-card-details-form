import React, { useState } from "react";
import {
  BackCard,
  CardsContainer,
  Complete,
  Container,
  Content,
  DivDesign,
  FormCard,
  FrontCard,
} from "./styles";
interface iCardInfo {
  cardNumber: string;
  cardHolder: string;
  cardExp: {
    mm: string;
    yy: string;
  };
  cardCvc: string;
}
import frontCardImage from "../../images/bg-card-front.png";
import logoCardImage from "../../images/card-logo.svg";
import backCardImage from "../../images/bg-card-back.png";
import completeIcon from "../../images/icon-complete.svg";

export default function index() {
  const inicialValue = {
    cardNumber: "",
    cardHolder: "João Albuquerque",
    cardExp: {
      mm: "00",
      yy: "00",
    },
    cardCvc: "123",
  };
  const [cardsInformations, setCardsInformations] =
    useState<iCardInfo>(inicialValue);

  const [show, setShow] = useState(false);

  function handleShow(e: React.FormEvent<HTMLFormElement> | undefined) {
    e ? e.preventDefault() : "";
    setShow(!show);
  }

  function handleCardsInformations(newValue: string, changeType: string) {
    switch (changeType) {
      case "cardNumber":
        const aux = newValue.split("");
        if (aux.length > 4) {
          aux.splice(4, 0, " ");
          aux.splice(9, 0, " ");
          aux.splice(14, 0, " ");
        }
        setCardsInformations({
          cardNumber: aux.join(""),
          cardHolder: cardsInformations.cardHolder,
          cardExp: cardsInformations.cardExp,
          cardCvc: cardsInformations.cardCvc,
        });
        break;
      case "cardHolder":
        setCardsInformations({
          cardNumber: cardsInformations.cardNumber,
          cardHolder: newValue,
          cardExp: cardsInformations.cardExp,
          cardCvc: cardsInformations.cardCvc,
        });
        break;
      case "mm":
        setCardsInformations({
          cardNumber: cardsInformations.cardNumber,
          cardHolder: cardsInformations.cardHolder,
          cardExp: { mm: newValue, yy: cardsInformations.cardExp.yy },
          cardCvc: cardsInformations.cardCvc,
        });
        break;
      case "yy":
        setCardsInformations({
          cardNumber: cardsInformations.cardNumber,
          cardHolder: cardsInformations.cardHolder,
          cardExp: { mm: cardsInformations.cardExp.mm, yy: newValue },
          cardCvc: cardsInformations.cardCvc,
        });
        break;
      case "cvc":
        setCardsInformations({
          cardNumber: cardsInformations.cardNumber,
          cardHolder: cardsInformations.cardHolder,
          cardExp: cardsInformations.cardExp,
          cardCvc: newValue,
        });
        break;
    }
  }
  return (
    <Container>
      <DivDesign />
      <CardsContainer>
        <FrontCard>
          <img src={frontCardImage} alt="Card" className="card-background" />
          <div className="card-info-container">
            <img src={logoCardImage} alt="CardLogo" className="card-logo" />
            <div className="card-info">
              <span className="card-number">
                {cardsInformations.cardNumber.padStart(
                  19,
                  "0000 0000 0000 0000"
                )}
              </span>
              <div className="card-name-and-exp">
                <span className="cardholder">
                  {cardsInformations.cardHolder.toUpperCase()}
                </span>
                <span className="card-exp">{`${cardsInformations.cardExp.mm.padStart(
                  2,
                  "0"
                )}/${cardsInformations.cardExp.yy.padEnd(2, "0")}`}</span>
              </div>
            </div>
          </div>
        </FrontCard>
        <BackCard>
          <img src={backCardImage} alt="backCard" className="card-background" />
          <div className="card-info-container">
            <span>{cardsInformations.cardCvc.padStart(3, "000")}</span>
          </div>
        </BackCard>
      </CardsContainer>

      <Content>
        {!show ? (
          <Complete>
            <img src={completeIcon} alt="complete" />
            <h3>THANK YOU!</h3>
            <p> We've added your card details </p>
            <button className="continue-btn" onClick={()=>handleShow()}> Continue </button>
          </Complete>
        ) : (
          <FormCard onSubmit={(e) => handleShow(e)}>
            <label>
              <h2>CARDHOLDER NAME:</h2>
              <input
                type="text"
                placeholder="e.g.Jane Appleseed"
                onChange={(e) =>
                  handleCardsInformations(e.target.value, "cardHolder")
                }
                maxLength={18}
                required
              />
            </label>
            <label>
              <h2>CARD NUMBER:</h2>
              <input
                type="text"
                placeholder="e.g.1234 5678 9123 0000"
                onChange={(e) =>
                  handleCardsInformations(e.target.value, "cardNumber")
                }
                maxLength={16}
                required
              />
            </label>
            <label>
              <div>
                <label>
                  <h2> EXP. DATE (MM/YY) </h2>
                  <div>
                    <input
                      type="text"
                      className="data"
                      placeholder="MM"
                      maxLength={2}
                      onChange={(e) =>
                        handleCardsInformations(e.target.value, "mm")
                      }
                      required
                    />
                    <input
                      type="text"
                      className="data"
                      placeholder="YY"
                      maxLength={2}
                      onChange={(e) =>
                        handleCardsInformations(e.target.value, "yy")
                      }
                      required
                    />
                  </div>
                </label>
                <label>
                  <h2>CVC</h2>
                  <input
                    className="cvc"
                    type="text"
                    placeholder="e.g. 123"
                    onChange={(e) =>
                      handleCardsInformations(e.target.value, "cvc")
                    }
                    maxLength={3}
                    required
                  />
                </label>
              </div>
            </label>
            <button className="submit-btn"> Confirm </button>
          </FormCard>
        )}
      </Content>
    </Container>
  );
}
