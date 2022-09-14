import React, { useState } from "react";
import {
  BackCard,
  CardsContainer,
  Complete,
  Container,
  Content,
  AsideDesign,
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

export default function index() {
  const inicialValue = {
    cardNumber: "",
    cardHolder: "",
    cardExp: {
      mm: "",
      yy: "",
    },
    cardCvc: "",
  };
  const [cardsInformations, setCardsInformations] =
    useState<iCardInfo>(inicialValue);

  const [show, setShow] = useState(true);
  const [errors, setErrors] = useState([""]);
  function handleShow() {
    setShow(!show);
  }

  function validCard(e: React.FormEvent<HTMLFormElement>) {
    e ? e.preventDefault() : "";
    const auxErrors = [];
    if (cardsInformations.cardHolder.length < 15) {
      auxErrors.push(
        'O campo "CardHolder"  deve ter no Minimio 15 letras'
      );
    }
    if (cardsInformations.cardNumber.length < 16) {
      auxErrors.push(
        'O campo "Card Number"  deve ter no Minimio 16 números'
      );
    }
    if (cardsInformations.cardExp.yy.length < 2) {
      auxErrors.push(
        'O campo "Exp. Date (YY)"  deve ter no Minimio 2 números'
      );
    }
    if (cardsInformations.cardExp.mm.length < 2) {
      auxErrors.push(
        'O campo "Exp. Date (MM)"  deve ter no Minimio 2 números'
      );
    }
    if (cardsInformations.cardCvc.length < 3) {
      auxErrors.push('O campo "CVC" deve ter no Minimio 3 números');
    }
    if (auxErrors[0]) {
      setErrors(auxErrors);
      return;
    }
      handleShow();
    
  }

  function handleCardsInformations(newValue: string, changeType: string) {
    let regex = /[a-z]/;
    switch (changeType) {
      case "cardNumber":
        if (newValue.toLowerCase().match(regex)) return;
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
        regex = /[0-9]/;
        if (regex.test(newValue)) return;
        setCardsInformations({
          cardNumber: cardsInformations.cardNumber,
          cardHolder: newValue,
          cardExp: cardsInformations.cardExp,
          cardCvc: cardsInformations.cardCvc,
        });
        break;
      case "mm":
        if (regex.test(newValue)) return;
        setCardsInformations({
          cardNumber: cardsInformations.cardNumber,
          cardHolder: cardsInformations.cardHolder,
          cardExp: { mm: newValue, yy: cardsInformations.cardExp.yy },
          cardCvc: cardsInformations.cardCvc,
        });
        break;
      case "yy":
        if (regex.test(newValue)) return;
        setCardsInformations({
          cardNumber: cardsInformations.cardNumber,
          cardHolder: cardsInformations.cardHolder,
          cardExp: { mm: cardsInformations.cardExp.mm, yy: newValue },
          cardCvc: cardsInformations.cardCvc,
        });
        break;
      case "cvc":
        if (regex.test(newValue)) return;
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
      <AsideDesign />
      <CardsContainer>
        <FrontCard>
          <div className="card-info-container">
            <img src={"./img/card-logo.svg"} alt="CardLogo" className="card-logo" /> 
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
          <div className="card-info-container">
            <span>{cardsInformations.cardCvc.padStart(3, "000")}</span>
          </div>
        </BackCard>
      </CardsContainer>

      <Content>
        {!show ? (
          <Complete>
            <img src="/img/icon-complete.svg" alt="complete" />
            <h3>THANK YOU!</h3>
            <p> We've added your card details </p>
            <button className="continue-btn" onClick={() => handleShow()}>
              {" "}
              Continue{" "}
            </button>
          </Complete>
        ) : (
          <FormCard onSubmit={(e) => validCard(e)}>
            <label>
              <h2>CARDHOLDER NAME:</h2>
              <input
                type="text"
                placeholder="e.g.Jane Appleseed"
                onChange={(e) =>
                  handleCardsInformations(e.target.value, "cardHolder")
                }
                pattern="[A-Za-z].{15,}"
                title="* Apenas Letras *"
                maxLength={18}
                minLength={15}
                required
              />
            </label>
            <label>
              <h2>CARD NUMBER:</h2>
              <input
                type="text"
                placeholder="e.g.1234567891230000"
                onChange={(e) =>
                  handleCardsInformations(e.target.value, "cardNumber")
                }
                maxLength={16}
                minLength={16}
                pattern="[0-9]{16}"
                title="* Apenas números - sem espaços*"
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
                      minLength={2}
                      onChange={(e) =>
                        handleCardsInformations(e.target.value, "mm")
                      }
                      pattern="[0-9]{2}"
                      required
                    />
                    <input
                      type="text"
                      className="data"
                      placeholder="YY"
                      maxLength={2}
                      minLength={2}
                      onChange={(e) =>
                        handleCardsInformations(e.target.value, "yy")
                      }
                      pattern="[0-9]{2}"
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
                    minLength={3}
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
