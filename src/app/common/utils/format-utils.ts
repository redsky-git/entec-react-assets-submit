import type { IFormat } from '@/app/types/common/app-utils-types.ts';
/**
 * 포맷 유틸리티
 * 금융권 및 일반 업무에서 자주 사용되는 포맷 함수 모음
 */

const formatUtil: IFormat = {
	/**
	 * 숫자 포맷 (천 단위 콤마)
	 * @example format.number(1234567) // "1,234,567"
	 * @example format.number(1234.567, 2) // "1,234.57"
	 */
	number: (value: number | string, decimals?: number): string => {
		const num = typeof value === 'string' ? parseFloat(value) : value;
		if (isNaN(num)) return '0';

		const fixed = decimals !== undefined ? num.toFixed(decimals) : num.toString();
		const parts = fixed.split('.');
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

		return parts.join('.');
	},

	/**
	 * 통화 포맷
	 * @example format.currency(1234567) // "₩1,234,567"
	 * @example format.currency(1234.56, 'USD') // "$1,234.56"
	 */
	currency: (value: number | string, currency: string = 'KRW'): string => {
		const num = typeof value === 'string' ? parseFloat(value) : value;
		if (isNaN(num)) return '₩0';

		const symbols: Record<string, string> = {
			KRW: '₩',
			USD: '$',
			EUR: '€',
			JPY: '¥',
			CNY: '¥',
		};

		const symbol = symbols[currency] || currency + ' ';
		const decimals = currency === 'KRW' || currency === 'JPY' ? 0 : 2;

		return symbol + formatUtil.number(num, decimals);
	},

	/**
	 * 퍼센트 포맷
	 * @example format.percent(0.1234) // "12.34%"
	 * @example format.percent(12.345, 1) // "12.3%"
	 */
	percent: (value: number | string, decimals: number = 2): string => {
		const num = typeof value === 'string' ? parseFloat(value) : value;
		if (isNaN(num)) return '0%';

		const percent = num < 1 ? num * 100 : num;
		return percent.toFixed(decimals) + '%';
	},

	/**
	 * 계좌번호 포맷
	 * @example format.account("110123456789") // "110-1234-56789"
	 */
	account: (value: string): string => {
		const cleaned = value.replace(/\D/g, '');
		if (cleaned.length < 10) return cleaned;

		// 일반적인 패턴: 3-4-나머지 또는 3-2-나머지
		if (cleaned.length <= 11) {
			return cleaned.replace(/(\d{3})(\d{2})(\d+)/, '$1-$2-$3');
		}
		return cleaned.replace(/(\d{3})(\d{4})(\d+)/, '$1-$2-$3');
	},

	/**
	 * 카드번호 포맷
	 * @example format.card("1234567890123456") // "1234-5678-9012-3456"
	 */
	card: (value: string): string => {
		const cleaned = value.replace(/\D/g, '');
		return cleaned.replace(/(\d{4})(?=\d)/g, '$1-').slice(0, 19);
	},

	/**
	 * 금액 포맷 (부호 포함 옵션)
	 * @example format.amount(1234567) // "1,234,567원"
	 * @example format.amount(-1234567, true) // "-1,234,567원"
	 */
	amount: (value: number | string, showSign: boolean = false): string => {
		const num = typeof value === 'string' ? parseFloat(value) : value;
		if (isNaN(num)) return '0원';

		const sign = showSign && num > 0 ? '+' : '';
		return sign + formatUtil.number(num, 0) + '원';
	},

	/**
	 * 전화번호 포맷
	 * @example format.phone("01012345678") // "010-1234-5678"
	 * @example format.phone("01012345678", "dot") // "010.1234.5678"
	 */
	phone: (value: string, type: 'default' | 'dash' | 'dot' = 'default'): string => {
		const cleaned = value.replace(/\D/g, '');
		const separator = type === 'dot' ? '.' : '-';

		if (cleaned.length === 11) {
			return cleaned.replace(/(\d{3})(\d{4})(\d{4})/, `$1${separator}$2${separator}$3`);
		} else if (cleaned.length === 10) {
			return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, `$1${separator}$2${separator}$3`);
		} else if (cleaned.length === 9) {
			return cleaned.replace(/(\d{2})(\d{3})(\d{4})/, `$1${separator}$2${separator}$3`);
		}

		return cleaned;
	},

	/**
	 * 이메일 마스킹
	 * @example format.email("user@example.com", 1) // "u***@example.com"
	 * @example format.email("user@example.com", 2) // "us**@example.com"
	 */
	email: (value: string, maskLevel: number = 3): string => {
		const [local, domain] = value.split('@');
		if (!domain) return value;

		const visibleChars = Math.min(maskLevel, local.length - 1);
		const masked = local.slice(0, visibleChars) + '*'.repeat(Math.max(local.length - visibleChars, 1));

		return `${masked}@${domain}`;
	},

	/**
	 * 주민등록번호 포맷
	 * @example format.residentNumber("9901011234567") // "990101-1234567"
	 * @example format.residentNumber("9901011234567", true) // "990101-1******"
	 */
	residentNumber: (value: string, maskBack: boolean = true): string => {
		const cleaned = value.replace(/\D/g, '');
		if (cleaned.length !== 13) return cleaned;

		const front = cleaned.slice(0, 6);
		const back = maskBack ? cleaned.slice(6, 7) + '******' : cleaned.slice(6);

		return `${front}-${back}`;
	},

	/**
	 * 이름 마스킹
	 * @example format.name("홍길동", 1) // "홍*동"
	 * @example format.name("김철수", 2) // "김**"
	 */
	name: (value: string, maskLevel: number = 1): string => {
		if (value.length <= 1) return value;

		if (maskLevel === 1 && value.length >= 3) {
			return value[0] + '*'.repeat(value.length - 2) + value[value.length - 1];
		}

		return value[0] + '*'.repeat(value.length - 1);
	},

	/**
	 * 날짜 포맷
	 * @example format.date("2024-01-15") // "2024.01.15"
	 * @example format.date("2024-01-15", "YYYY년 MM월 DD일") // "2024년 01월 15일"
	 */
	date: (value: string | Date, format: string = 'YYYY.MM.DD'): string => {
		const date = typeof value === 'string' ? new Date(value) : value;
		if (isNaN(date.getTime())) return '';

		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const day = String(date.getDate()).padStart(2, '0');

		return format.replace('YYYY', String(year)).replace('MM', month).replace('DD', day);
	},

	/**
	 * 날짜시간 포맷
	 * @example format.datetime("2024-01-15T13:30:00") // "2024.01.15 13:30"
	 */
	datetime: (value: string | Date): string => {
		const date = typeof value === 'string' ? new Date(value) : value;
		if (isNaN(date.getTime())) return '';

		const dateStr = formatUtil.date(date, 'YYYY.MM.DD');
		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');

		return `${dateStr} ${hours}:${minutes}`;
	},

	/**
	 * 기간 포맷
	 * @example format.period("2024-01-01", "2024-12-31") // "2024.01.01 ~ 2024.12.31"
	 */
	period: (start: string | Date, end: string | Date): string => {
		return `${formatUtil.date(start)} ~ ${formatUtil.date(end)}`;
	},

	/**
	 * 사업자등록번호 포맷
	 * @example format.businessNumber("1234567890") // "123-45-67890"
	 */
	businessNumber: (value: string): string => {
		const cleaned = value.replace(/\D/g, '');
		if (cleaned.length !== 10) return cleaned;

		return cleaned.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3');
	},

	/**
	 * 법인등록번호 포맷
	 * @example format.corporationNumber("1234567890123") // "123456-7890123"
	 */
	corporationNumber: (value: string): string => {
		const cleaned = value.replace(/\D/g, '');
		if (cleaned.length !== 13) return cleaned;

		return cleaned.replace(/(\d{6})(\d{7})/, '$1-$2');
	},

	/**
	 * 파일 크기 포맷
	 * @example format.fileSize(1234567) // "1.18 MB"
	 * @example format.fileSize(1234) // "1.21 KB"
	 */
	fileSize: (bytes: number, decimals: number = 2): string => {
		if (bytes === 0) return '0 Bytes';

		const k = 1024;
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));

		return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
	},

	/**
	 * 바이트 포맷 (1000 단위)
	 * @example format.bytes(1234567) // "1.23 MB"
	 */
	bytes: (bytes: number): string => {
		if (bytes === 0) return '0 Bytes';

		const k = 1000;
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));

		return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
	},

	/**
	 * 텍스트 말줄임
	 * @example format.ellipsis("긴 텍스트입니다", 5) // "긴 텍스..."
	 */
	ellipsis: (text: string, maxLength: number, suffix: string = '...'): string => {
		if (text.length <= maxLength) return text;
		return text.slice(0, maxLength) + suffix;
	},

	/**
	 * 문자열 마스킹
	 * @example format.mask("1234567890", 3, 7) // "123****890"
	 */
	mask: (value: string, start: number, end: number, maskChar: string = '*'): string => {
		if (start >= end || start < 0 || end > value.length) return value;

		return value.slice(0, start) + maskChar.repeat(end - start) + value.slice(end);
	},

	/**
	 * 문자열 앞쪽 채우기
	 * @example format.padStart("123", 5, "0") // "00123"
	 */
	padStart: (value: string | number, length: number, char: string = '0'): string => {
		return String(value).padStart(length, char);
	},

	/**
	 * 문자열 뒤쪽 채우기
	 * @example format.padEnd("123", 5, "0") // "12300"
	 */
	padEnd: (value: string | number, length: number, char: string = '0'): string => {
		return String(value).padEnd(length, char);
	},
};

export default formatUtil;
