export type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

export type CardProps = {
  cardCompany: CardCompany;
  cardFirstNumber: string;
  cardSecondNumber: string;
  cardThirdNumber: string;
  cardFourthNumber: string;
  cardOwner: string;
  expireMonth: string;
  expireYear: string;
  onClick?: () => void;
};

export type CardPassword = {
  first: string;
  second: string;
};

export type CardType = {
  id: number;
  alias?: string;
  cardCompany: CardCompany;
  cardNumber: CardNumber;
  cardOwner: string;
  expireMonth: string;
  expireYear: string;
  securityCode: string;
  cardPassword: CardPassword;
};

export type InputHook = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  status: InputStatus;
};

export type CardCompanyHook = {
  value: CardCompany;
  status: InputStatus;
  changeCardCompany: (str: CardCompany) => void;
};

export type InputStatus = 'INIT' | 'VALID' | 'INVALID';
export type CardInfoInput = 'securityCode' | 'password' | 'owner' | 'expired' | 'cardNumber';
export type CardCompany =
  | 'BC카드'
  | '하나카드'
  | '현대카드'
  | '신한카드'
  | '국민카드'
  | '우리카드'
  | '카카오뱅크'
  | '롯데카드'
  | '카드사 선택';

export type AddCardFormProps = {
  cardCompany: CardCompanyHook;
  cardFirstNumber: InputHook;
  cardSecondNumber: InputHook;
  cardThirdNumber: InputHook;
  cardFourthNumber: InputHook;
  cardOwner: InputHook;
  securityCode: InputHook;
  cardPassword1: InputHook;
  cardPassword2: InputHook;
  expireMonth: InputHook;
  expireYear: InputHook;
};

export type CardNumberInputProps = Pick<
  AddCardFormProps,
  'cardFirstNumber',
  'cardSecondNumber',
  'cardThirdNumber',
  'cardFourthNumber'
>;

export type ExpireDateInputProps = Pick<AddCardFormProps, 'expireMonth', 'expireYear'>;
export type OwnerInputProps = Pick<AddCardFormProps, 'cardOwner'>;
export type SecurityCodeInputProps = Pick<AddCardFormProps, 'securityCode'>;
export type PasswordInputProps = Pick<AddCardFormProps, 'password1', 'password2'>;

export type InputType = 'securityCode' | 'password' | 'owner' | 'expired' | 'cardNumber';

export type ErrorMessageProps = {
  inputType: InputType;
  status: InputStatus;
};

export type InputContainerProps = {
  className: string;
  status: InputStatus;
  inputType: InputType;
};

export type CurrentCard = {
  currentCard: Omit<CardType, 'id'>;
  setCurrentCard: Dispatch<SetStateAction<Omit<CardType, 'id'>>>;
};

export type IsAccessAliasPage = {
  isAccessAliasPage: boolean;
  setIsAccessAliasPage: Dispatch<SetStateAction<boolean>>;
};

export type BottomSheetProps = {
  isOpen: boolean;
  onToggleOpen: () => void;
};

export type CardNameBottomSheetProps = BottomSheetProps & {
  setCardCompany: (cardCompany: CardCompany) => void;
};

export type CardSelectButtonProps = {
  company: CardCompany;
  onCardSelectButtonClick: () => void;
};
