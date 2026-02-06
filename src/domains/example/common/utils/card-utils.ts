
/**
 * 카드번호 마스킹 옵션 인터페이스
 */
export interface CardMaskOptions {
  /** 마스킹 문자 (기본값: '*') */
  maskChar?: string;
  /** 앞에서 보여줄 자릿수 (기본값: 4) */
  visibleStart?: number;
  /** 뒤에서 보여줄 자릿수 (기본값: 4) */
  visibleEnd?: number;
  /** 구분자 (기본값: '-') */
  separator?: string;
  /** 구분자를 사용할지 여부 (기본값: true) */
  useSeparator?: boolean;
}

/**
 * 카드번호를 마스킹 처리합니다.
 * 
 * @param cardNumber - 마스킹할 카드번호 (숫자 또는 하이픈 포함 문자열)
 * @param options - 마스킹 옵션
 * @returns 마스킹된 카드번호
 * 
 * @example
 * ```ts
 * maskCardNumber('1234567812345678')
 * // 결과: '1234-****-****-5678'
 * 
 * maskCardNumber('1234-5678-1234-5678')
 * // 결과: '1234-****-****-5678'
 * 
 * maskCardNumber('1234567812345678', { visibleStart: 6, visibleEnd: 0 })
 * // 결과: '123456-****-****-****'
 * 
 * maskCardNumber('1234567812345678', { maskChar: 'X', useSeparator: false })
 * // 결과: '1234XXXXXXXX5678'
 * ```
 */
export const maskCardNumber = (
  cardNumber: string,
  options: CardMaskOptions = {}
): string => {
  const {
    maskChar = '*',
    visibleStart = 4,
    visibleEnd = 4,
    separator = '-',
    useSeparator = true,
  } = options;

  // 카드번호에서 숫자만 추출
  const digitsOnly = cardNumber.replace(/\D/g, '');

  // 유효성 검사
  if (!digitsOnly || digitsOnly.length < 8) {
    return cardNumber; // 유효하지 않은 경우 원본 반환
  }

  const totalLength = digitsOnly.length;
  const maskLength = totalLength - visibleStart - visibleEnd;

  // 앞부분, 마스킹 부분, 뒷부분 생성
  const startPart = digitsOnly.slice(0, visibleStart);
  const maskedPart = maskChar.repeat(Math.max(0, maskLength));
  const endPart = digitsOnly.slice(totalLength - visibleEnd);

  const masked = startPart + maskedPart + endPart;

  // 구분자 추가
  if (useSeparator && totalLength >= 16) {
    // 4자리씩 구분
    return masked.match(/.{1,4}/g)?.join(separator) || masked;
  }

  return masked;
};

/**
 * 카드번호 유효성을 검사합니다.
 * 
 * @param cardNumber - 검사할 카드번호
 * @returns 유효한 카드번호인지 여부
 * 
 * @example
 * ```ts
 * isValidCardNumber('1234567812345678') // true
 * isValidCardNumber('1234-5678-1234-5678') // true
 * isValidCardNumber('123') // false
 * ```
 */
export const isValidCardNumber = (cardNumber: string): boolean => {
  const digitsOnly = cardNumber.replace(/\D/g, '');
  return digitsOnly.length >= 13 && digitsOnly.length <= 19;
};

/**
 * 카드번호를 포맷팅합니다 (4자리씩 하이픈으로 구분)
 * 
 * @param cardNumber - 포맷팅할 카드번호
 * @param separator - 구분자 (기본값: '-')
 * @returns 포맷팅된 카드번호
 * 
 * @example
 * ```ts
 * formatCardNumber('1234567812345678')
 * // 결과: '1234-5678-1234-5678'
 * 
 * formatCardNumber('1234567812345678', ' ')
 * // 결과: '1234 5678 1234 5678'
 * ```
 */
export const formatCardNumber = (
  cardNumber: string,
  separator: string = '-'
): string => {
  const digitsOnly = cardNumber.replace(/\D/g, '');
  return digitsOnly.match(/.{1,4}/g)?.join(separator) || digitsOnly;
};

/**
 * 카드 타입을 감지합니다.
 * 
 * @param cardNumber - 카드번호
 * @returns 카드 타입 ('visa' | 'mastercard' | 'amex' | 'unknown')
 * 
 * @example
 * ```ts
 * detectCardType('4111111111111111') // 'visa'
 * detectCardType('5500000000000004') // 'mastercard'
 * detectCardType('340000000000009') // 'amex'
 * ```
 */
export const detectCardType = (
  cardNumber: string
): 'visa' | 'mastercard' | 'amex' | 'discover' | 'unknown' => {
  const digitsOnly = cardNumber.replace(/\D/g, '');

  if (/^4/.test(digitsOnly)) return 'visa';
  if (/^5[1-5]/.test(digitsOnly)) return 'mastercard';
  if (/^3[47]/.test(digitsOnly)) return 'amex';
  if (/^6(?:011|5)/.test(digitsOnly)) return 'discover';

  return 'unknown';
};

/**
 * 카드번호를 부분적으로 마스킹합니다 (중간 부분만)
 * 
 * @param cardNumber - 마스킹할 카드번호
 * @param maskChar - 마스킹 문자 (기본값: '*')
 * @returns 마스킹된 카드번호
 * 
 * @example
 * ```ts
 * maskCardNumberMiddle('1234567812345678')
 * // 결과: '1234-****-****-5678'
 * ```
 */
export const maskCardNumberMiddle = (
  cardNumber: string,
  maskChar: string = '*'
): string => {
  return maskCardNumber(cardNumber, { maskChar });
};

/**
 * 카드번호의 마지막 4자리만 표시합니다.
 * 
 * @param cardNumber - 카드번호
 * @param maskChar - 마스킹 문자 (기본값: '*')
 * @returns 마스킹된 카드번호
 * 
 * @example
 * ```ts
 * maskCardNumberExceptLast4('1234567812345678')
 * // 결과: '****-****-****-5678'
 * ```
 */
export const maskCardNumberExceptLast4 = (
  cardNumber: string,
  maskChar: string = '*'
): string => {
  return maskCardNumber(cardNumber, {
    maskChar,
    visibleStart: 0,
    visibleEnd: 4,
  });
};