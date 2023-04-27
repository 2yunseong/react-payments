import React from 'react';

import type { AddCardFormProps, CardType } from '../../../type';
import { sumbitCard } from '../../../utils/applicationUtil';
import { useNavigate } from 'react-router-dom';
import ExpireDateInput from './ExpireDateInput';
import OwnerInput from './OwnerInput';
import SecurityCodeInput from './SecurityCodeInput';
import PasswordInput from './PasswordInput';
import './AddCardForm.css';
import CardNumberInput from './CardNumberInput';
import { useCurrentCardContext } from '../../../context/CurrentCardProvider';

const AddCardForm = ({
  cardType,
  cardFirstNumber,
  cardSecondNumber,
  cardThirdNumber,
  cardFourthNumber,
  expireMonth,
  expireYear,
  cardOwner,
  securityCode,
  cardPassword1,
  cardPassword2,
}: AddCardFormProps) => {
  const navigate = useNavigate();
  const { currentCard, setCurrentCard } = useCurrentCardContext();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitData: Omit<CardType, 'id'> = {
      cardType,
      cardNumber: {
        first: cardFirstNumber.value,
        second: cardSecondNumber.value,
        third: cardThirdNumber.value,
        fourth: cardFourthNumber.value,
      },
      cardOwner: cardOwner.value,
      expireMonth: expireMonth.value,
      expireYear: expireYear.value,
      securityCode: securityCode.value,
      cardPassword: {
        first: cardPassword1.value,
        second: cardPassword2.value,
      },
    };
    try {
      sumbitCard(submitData);
      setCurrentCard(submitData);
      navigate('/alias');
    } catch (error) {
      alert('중복된 카드 입니다.');
      return;
    }
  };

  return (
    <form className="add-card-form" onSubmit={onSubmit}>
      <CardNumberInput
        cardFirstNumber={cardFirstNumber}
        cardSecondNumber={cardSecondNumber}
        cardThirdNumber={cardThirdNumber}
        cardFourthNumber={cardFourthNumber}
      />
      <ExpireDateInput expireMonth={expireMonth} expireYear={expireYear} />
      <OwnerInput cardOwner={cardOwner} />
      <SecurityCodeInput securityCode={securityCode} />
      <PasswordInput cardPassword1={cardPassword1} cardPassword2={cardPassword2} />
      <div className="add-card-submit">
        <button type="submit">다음</button>
      </div>
    </form>
  );
};

export default AddCardForm;
