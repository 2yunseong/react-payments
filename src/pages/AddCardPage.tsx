import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { CardNumber } from '../type';
import Card from '../components/Card';
import AddCardForm from '../components/AddCardForm';
import Header from '../components/Header';
import useInput from '../hooks/useInput';
import useComplicateInput from '../hooks/useComplicateInput';
import { handleNumberInput, identity, isNumberInput, stringToUpperCase } from '../utils/util';
import {
  securityCodeCondition,
  cardOwnerCondition,
  cardPasswordCondition,
  cardExpireMonthCondition,
  cardExpireYearCondition,
} from './cardInputCondition';
import BackButtonImg from '../asset/back_button.png';
import './AddCardPage.css';

const AddCardPage = () => {
  const navigate = useNavigate();
  const [cardType] = useState('현대');

  const [cardNumber, onChangeCardNumber] = useComplicateInput<CardNumber>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const expireMonth = useInput('', cardExpireMonthCondition, identity);
  const expireYear = useInput('', cardExpireYearCondition, identity);
  const securityCode = useInput('', securityCodeCondition, handleNumberInput);
  const cardOwner = useInput('', cardOwnerCondition, stringToUpperCase);
  const cardPassword1 = useInput('', cardPasswordCondition, handleNumberInput);
  const cardPassword2 = useInput('', cardPasswordCondition, handleNumberInput);

  const onBackButtonClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  // TODO: e.target.value.length 가독성 개선 => 변수화
  // TODO: 이벤트 핸들러 리팩터링.. 네이밍 + 구조
  const onCardNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const lastWord = e.target.value[e.target.value.length - 1];

      if (e.target.value.length > 4) return;
      if (e.target.value.length > 0 && !isNumberInput(lastWord)) return;

      onChangeCardNumber(e);
    },
    [onChangeCardNumber]
  );

  return (
    <div className="add-card-page">
      <Header>
        <button className="back-button" onClick={onBackButtonClick} aria-label="back-button">
          <img src={BackButtonImg} alt="뒤로 가기" />
        </button>
        <h2>카드 추가</h2>
      </Header>
      <article className="add-card-page-body">
        <Card
          cardType={cardType}
          cardNumber={cardNumber}
          cardOwner={cardOwner.value}
          expireMonth={expireMonth.value}
          expireYear={expireYear.value}
        />
        <AddCardForm
          cardNumber={cardNumber}
          onCardNumberChange={onCardNumberChange}
          expireMonth={expireMonth}
          expireYear={expireYear}
          cardOwner={cardOwner}
          securityCode={securityCode}
          cardPassword1={cardPassword1}
          cardPassword2={cardPassword2}
        />
      </article>
    </div>
  );
};

export default AddCardPage;
