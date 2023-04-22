import { AddCardNumberInputProps } from '../type';
import './AddCardNumberInput.css';

const AddCardNumberInput = ({ cardNumber }: AddCardNumberInputProps) => {
  const {
    value: { first, second, third, fourth },
    onChange,
  } = cardNumber;
  return (
    <div>
      <span className="form-label">카드 번호</span>
      <div className="card-number-input-container">
        <input
          className="input-box card-number"
          value={first}
          onChange={onChange}
          name="first"
          required
        />
        <span>-</span>
        <input
          className="input-box card-number"
          value={second}
          onChange={onChange}
          name="second"
          required
        />
        <span>-</span>
        <input
          className="input-password-container card-number"
          type="password"
          maxLength={4}
          minLength={4}
          value={third}
          onChange={onChange}
          name="third"
          required
        />
        <span>-</span>
        <input
          className="input-password-container card-number"
          type="password"
          maxLength={4}
          minLength={4}
          value={fourth}
          onChange={onChange}
          name="fourth"
          required
        />
      </div>
    </div>
  );
};

export default AddCardNumberInput;
