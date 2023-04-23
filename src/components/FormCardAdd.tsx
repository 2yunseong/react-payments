import React from 'react';

import passwordDotImg from '../asset/password_dot.png';

import { fetchData } from '../utils/fetchData';
import { useNavigate } from 'react-router-dom';
import './FormCardAdd.css';
import { CardType, FormCardAddProps } from '../type';
import AddCardNumberInput from './AddCardNumberInput';
import AddCardExpireDateInput from './AddCardExpireDateInput';
import AddCardOwnerInput from './AddCardOwnerInput';
import AddCardSecurityCodeInput from './AddCardSecurityCodeInput';

const FormCardAdd = ({
  cardNumber,
  cardExpire,
  cardOwner,
  securityCode,
  cardPassword1,
  cardPassword2,
}: FormCardAddProps) => {
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { first, second, third, fourth } = cardNumber.value;

    const postData: Omit<CardType, 'id'> = {
      cardType: '현대',
      cardNumber: {
        first,
        second,
        third,
        fourth,
      },
      cardOwner: cardOwner.value,
      expired: cardExpire.value,
      securityCode: securityCode.value,
      cardPassword: {
        first: cardPassword1.value,
        second: cardPassword2.value,
      },
    };
    if (!fetchData(postData)) {
      alert('이미 등록된 카드입니다.');
      return;
    }
    navigate('/');
  };

  return (
    <form className="add-card-form" onSubmit={onSubmit}>
      <AddCardNumberInput cardNumber={cardNumber} />
      <AddCardExpireDateInput cardExpire={cardExpire} />
      <AddCardOwnerInput cardOwner={cardOwner} />
      <AddCardSecurityCodeInput securityCode={securityCode} />
      <div className="card-password-container">
        <span className="form-label">카드 비밀번호</span>
        <div className="card-password-input-box">
          <input
            className="input-password-container password-single"
            type="password"
            maxLength={1}
            minLength={1}
            value={cardPassword1.value}
            onChange={cardPassword1.onChange}
            required
          />
          <input
            className="input-password-container password-single"
            type="password"
            maxLength={1}
            minLength={1}
            value={cardPassword2.value}
            onChange={cardPassword2.onChange}
            required
          />
          <img src={passwordDotImg} alt="비밀번호" />
          <img src={passwordDotImg} alt="비밀번호" />
        </div>
      </div>
      <div className="add-card-submit">
        <button type="submit">다음</button>
      </div>
    </form>
  );
};

export default FormCardAdd;
