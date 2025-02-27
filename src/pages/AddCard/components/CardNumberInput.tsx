import React, { useMemo } from 'react';

import type { CardNumberInputProps } from '../../../type';
import './CardNumberInput.css';
import InputContainer from '../../../components/InputContainer';
import { calcMultipleStatus } from '../domain/domain';

const CardNumberInput = ({
  cardFirstNumber,
  cardSecondNumber,
  cardThirdNumber,
  cardFourthNumber,
}: CardNumberInputProps) => {
  const status = useMemo(
    () =>
      calcMultipleStatus([
        cardFirstNumber.status,
        cardSecondNumber.status,
        cardThirdNumber.status,
        cardFourthNumber.status,
      ]),
    [
      cardFirstNumber.status,
      cardSecondNumber.status,
      cardThirdNumber.status,
      cardFourthNumber.status,
    ]
  );

  return (
    <InputContainer className="card-number-input-container" status={status} inputType="cardNumber">
      <span className="form-label">카드 번호</span>
      <div className="card-number-input">
        <input
          className="input-element card-number"
          value={cardFirstNumber.value}
          onChange={cardFirstNumber.onChange}
          name="first"
          maxLength={4}
          required
        />
        <span className="sperator">-</span>
        <input
          className="input-element card-number"
          value={cardSecondNumber.value}
          onChange={cardSecondNumber.onChange}
          name="second"
          maxLength={4}
          required
        />
        <span className="sperator">-</span>
        <input
          className="input-element input-password-container card-number"
          type="password"
          maxLength={4}
          value={cardThirdNumber.value}
          onChange={cardThirdNumber.onChange}
          name="third"
          required
        />
        <span className="sperator">-</span>
        <input
          className="input-element input-password-container card-number"
          type="password"
          maxLength={4}
          value={cardFourthNumber.value}
          onChange={cardFourthNumber.onChange}
          name="fourth"
          required
        />
      </div>
    </InputContainer>
  );
};

export default React.memo(CardNumberInput);
