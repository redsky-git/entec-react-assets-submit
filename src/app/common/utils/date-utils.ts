/**
 * 날짜 관련 유틸리티 함수 모음
 *
 * 이 파일은 날짜 포맷팅, 계산, 비교, 유효성 검사 등
 * 날짜와 관련된 다양한 유틸리티 함수를 제공합니다.
 */

// ============================================
// 1. 날짜 포맷팅 함수들
// ============================================

import dayjs from 'dayjs';

/**
 * Date 객체를 지정된 형식의 문자열로 변환
 * @param date - 변환할 날짜
 * @param format - 포맷 문자열 (YYYY-MM-DD, YYYY.MM.DD, YYYY/MM/DD 등)
 * @returns 포맷된 날짜 문자열
 *
 * @example
 * formatDate(new Date('2024-01-15'), 'YYYY-MM-DD') // '2024-01-15'
 * formatDate(new Date('2024-01-15'), 'YYYY.MM.DD') // '2024.01.15'
 * formatDate(new Date('2024-01-15'), 'YYYY년 MM월 DD일') // '2024년 01월 15일'
 */
export const formatDate = (date: Date | string | number, format = 'YYYY-MM-DD'): string => {
	//const d = new Date(date);

	//if (isNaN(d.getTime())) {
	//	throw new Error('Invalid date');
	//}

	console.log('>>>>>>>> 날짜:::', String(date));
	console.log('>>>>>>>> 날짜:::', dayjs, dayjs(String(date)));

	return dayjs(String(date)).format(format);

	//const year = d.getFullYear();
	//const month = String(d.getMonth() + 1).padStart(2, '0');
	//const day = String(d.getDate()).padStart(2, '0');
	//const hours = String(d.getHours()).padStart(2, '0');
	//const minutes = String(d.getMinutes()).padStart(2, '0');
	//const seconds = String(d.getSeconds()).padStart(2, '0');

	//return format
	//	.replace('YYYY', String(year))
	//	.replace('MM', month)
	//	.replace('DD', day)
	//	.replace('HH', hours)
	//	.replace('mm', minutes)
	//	.replace('ss', seconds);
};

/**
 * Date 객체를 ISO 8601 형식으로 변환 (YYYY-MM-DD)
 * @param date - 변환할 날짜
 * @returns ISO 형식의 날짜 문자열
 *
 * @example
 * toISODate(new Date('2024-01-15')) // '2024-01-15'
 */
export const toISODate = (date: Date | string | number): string => {
	return formatDate(date, 'YYYY-MM-DD');
};

/**
 * Date 객체를 한국 형식으로 변환 (YYYY년 MM월 DD일)
 * @param date - 변환할 날짜
 * @returns 한국 형식의 날짜 문자열
 *
 * @example
 * toKoreanDate(new Date('2024-01-15')) // '2024년 01월 15일'
 */
export const toKoreanDate = (date: Date | string | number): string => {
	return formatDate(date, 'YYYY년 MM월 DD일');
};

/**
 * Date 객체를 시간 포함 형식으로 변환
 * @param date - 변환할 날짜
 * @param separator - 날짜와 시간 사이 구분자 (기본값: ' ')
 * @returns 날짜와 시간을 포함한 문자열
 *
 * @example
 * formatDateTime(new Date('2024-01-15 14:30:45')) // '2024-01-15 14:30:45'
 * formatDateTime(new Date('2024-01-15 14:30:45'), 'T') // '2024-01-15T14:30:45'
 */
export const formatDateTime = (date: Date | string | number, separator = ' '): string => {
	return formatDate(date, `YYYY-MM-DD${separator}HH:mm:ss`);
};

/**
 * Date 객체를 시간만 표시 (HH:mm:ss)
 * @param date - 변환할 날짜
 * @param includeSeconds - 초 포함 여부 (기본값: true)
 * @returns 시간 문자열
 *
 * @example
 * formatTime(new Date('2024-01-15 14:30:45')) // '14:30:45'
 * formatTime(new Date('2024-01-15 14:30:45'), false) // '14:30'
 */
export const formatTime = (date: Date | string | number, includeSeconds = true): string => {
	const format = includeSeconds ? 'HH:mm:ss' : 'HH:mm';
	return formatDate(date, format);
};

// ============================================
// 2. 상대적 시간 표시 함수들
// ============================================

/**
 * 현재 시간 기준으로 상대적 시간을 한글로 표시
 * @param date - 비교할 날짜
 * @returns 상대적 시간 문자열 (방금 전, 5분 전, 2시간 전 등)
 *
 * @example
 * getRelativeTime(new Date(Date.now() - 1000 * 60)) // '1분 전'
 * getRelativeTime(new Date(Date.now() - 1000 * 60 * 60 * 2)) // '2시간 전'
 */
export const getRelativeTime = (date: Date | string | number): string => {
	const d = new Date(date);
	const now = new Date();
	const diffMs = now.getTime() - d.getTime();
	const diffSec = Math.floor(diffMs / 1000);
	const diffMin = Math.floor(diffSec / 60);
	const diffHour = Math.floor(diffMin / 60);
	const diffDay = Math.floor(diffHour / 24);
	const diffMonth = Math.floor(diffDay / 30);
	const diffYear = Math.floor(diffDay / 365);

	if (diffSec < 60) return '방금 전';
	if (diffMin < 60) return `${diffMin}분 전`;
	if (diffHour < 24) return `${diffHour}시간 전`;
	if (diffDay < 30) return `${diffDay}일 전`;
	if (diffMonth < 12) return `${diffMonth}개월 전`;
	return `${diffYear}년 전`;
};

/**
 * 특정 날짜가 오늘인지 확인하고 포맷 결정
 * @param date - 확인할 날짜
 * @returns 오늘이면 시간만, 아니면 날짜 반환
 *
 * @example
 * formatSmartDate(new Date()) // '14:30'
 * formatSmartDate(new Date('2024-01-15')) // '2024-01-15'
 */
export const formatSmartDate = (date: Date | string | number): string => {
	const d = new Date(date);
	if (isToday(d)) {
		return formatTime(d, false);
	} else if (isYesterday(d)) {
		return '어제';
	} else if (isThisYear(d)) {
		return formatDate(d, 'MM월 DD일');
	}
	return toISODate(d);
};

// ============================================
// 3. 날짜 계산 함수들
// ============================================

/**
 * 날짜에 특정 일수를 더하거나 뺌
 * @param date - 기준 날짜
 * @param days - 더할 일수 (음수면 빼기)
 * @returns 계산된 새로운 Date 객체
 *
 * @example
 * addDays(new Date('2024-01-15'), 7) // 2024-01-22
 * addDays(new Date('2024-01-15'), -3) // 2024-01-12
 */
export const addDays = (date: Date | string | number, days: number): Date => {
	const result = new Date(date);
	result.setDate(result.getDate() + days);
	return result;
};

/**
 * 날짜에 특정 월수를 더하거나 뺌
 * @param date - 기준 날짜
 * @param months - 더할 월수 (음수면 빼기)
 * @returns 계산된 새로운 Date 객체
 *
 * @example
 * addMonths(new Date('2024-01-15'), 3) // 2024-04-15
 * addMonths(new Date('2024-01-31'), 1) // 2024-02-29 (윤년) 또는 2024-02-28
 */
export const addMonths = (date: Date | string | number, months: number): Date => {
	const result = new Date(date);
	result.setMonth(result.getMonth() + months);
	return result;
};

/**
 * 날짜에 특정 년수를 더하거나 뺌
 * @param date - 기준 날짜
 * @param years - 더할 년수 (음수면 빼기)
 * @returns 계산된 새로운 Date 객체
 *
 * @example
 * addYears(new Date('2024-01-15'), 2) // 2026-01-15
 */
export const addYears = (date: Date | string | number, years: number): Date => {
	const result = new Date(date);
	result.setFullYear(result.getFullYear() + years);
	return result;
};

/**
 * 두 날짜 사이의 일수 차이 계산
 * @param date1 - 첫 번째 날짜
 * @param date2 - 두 번째 날짜
 * @returns 일수 차이 (절댓값)
 *
 * @example
 * getDaysDiff(new Date('2024-01-15'), new Date('2024-01-20')) // 5
 */
export const getDaysDiff = (date1: Date | string | number, date2: Date | string | number): number => {
	const d1 = new Date(date1);
	const d2 = new Date(date2);
	const diffMs = Math.abs(d1.getTime() - d2.getTime());
	return Math.floor(diffMs / (1000 * 60 * 60 * 24));
};

/**
 * 두 날짜 사이의 월수 차이 계산
 * @param date1 - 첫 번째 날짜
 * @param date2 - 두 번째 날짜
 * @returns 월수 차이
 *
 * @example
 * getMonthsDiff(new Date('2024-01-15'), new Date('2024-04-15')) // 3
 */
export const getMonthsDiff = (date1: Date | string | number, date2: Date | string | number): number => {
	const d1 = new Date(date1);
	const d2 = new Date(date2);
	return Math.abs((d2.getFullYear() - d1.getFullYear()) * 12 + (d2.getMonth() - d1.getMonth()));
};

// ============================================
// 4. 날짜 비교 함수들
// ============================================

/**
 * 특정 날짜가 오늘인지 확인
 * @param date - 확인할 날짜
 * @returns 오늘이면 true
 *
 * @example
 * isToday(new Date()) // true
 */
export const isToday = (date: Date | string | number): boolean => {
	const d = new Date(date);
	const today = new Date();
	return (
		d.getDate() === today.getDate() && d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear()
	);
};

/**
 * 특정 날짜가 어제인지 확인
 * @param date - 확인할 날짜
 * @returns 어제면 true
 *
 * @example
 * isYesterday(addDays(new Date(), -1)) // true
 */
export const isYesterday = (date: Date | string | number): boolean => {
	const yesterday = addDays(new Date(), -1);
	const d = new Date(date);
	return (
		d.getDate() === yesterday.getDate() &&
		d.getMonth() === yesterday.getMonth() &&
		d.getFullYear() === yesterday.getFullYear()
	);
};

/**
 * 특정 날짜가 올해인지 확인
 * @param date - 확인할 날짜
 * @returns 올해면 true
 *
 * @example
 * isThisYear(new Date()) // true
 */
export const isThisYear = (date: Date | string | number): boolean => {
	const d = new Date(date);
	const today = new Date();
	return d.getFullYear() === today.getFullYear();
};

/**
 * 특정 날짜가 주말인지 확인
 * @param date - 확인할 날짜
 * @returns 주말이면 true
 *
 * @example
 * isWeekend(new Date('2024-01-20')) // true (토요일)
 */
export const isWeekend = (date: Date | string | number): boolean => {
	const d = new Date(date);
	const day = d.getDay();
	return day === 0 || day === 6; // 0: 일요일, 6: 토요일
};

/**
 * 첫 번째 날짜가 두 번째 날짜보다 이전인지 확인
 * @param date1 - 첫 번째 날짜
 * @param date2 - 두 번째 날짜
 * @returns date1이 date2보다 이전이면 true
 *
 * @example
 * isBefore(new Date('2024-01-15'), new Date('2024-01-20')) // true
 */
export const isBefore = (date1: Date | string | number, date2: Date | string | number): boolean => {
	return new Date(date1).getTime() < new Date(date2).getTime();
};

/**
 * 첫 번째 날짜가 두 번째 날짜보다 이후인지 확인
 * @param date1 - 첫 번째 날짜
 * @param date2 - 두 번째 날짜
 * @returns date1이 date2보다 이후면 true
 *
 * @example
 * isAfter(new Date('2024-01-20'), new Date('2024-01-15')) // true
 */
export const isAfter = (date1: Date | string | number, date2: Date | string | number): boolean => {
	return new Date(date1).getTime() > new Date(date2).getTime();
};

/**
 * 특정 날짜가 두 날짜 사이에 있는지 확인
 * @param date - 확인할 날짜
 * @param start - 시작 날짜
 * @param end - 종료 날짜
 * @returns 사이에 있으면 true
 *
 * @example
 * isBetween(new Date('2024-01-17'), new Date('2024-01-15'), new Date('2024-01-20')) // true
 */
export const isBetween = (
	date: Date | string | number,
	start: Date | string | number,
	end: Date | string | number,
): boolean => {
	const d = new Date(date).getTime();
	const s = new Date(start).getTime();
	const e = new Date(end).getTime();
	return d >= s && d <= e;
};

// ============================================
// 5. 날짜 범위 생성 함수들
// ============================================

/**
 * 시작일부터 종료일까지의 날짜 배열 생성
 * @param start - 시작 날짜
 * @param end - 종료 날짜
 * @returns 날짜 배열
 *
 * @example
 * getDateRange(new Date('2024-01-15'), new Date('2024-01-17'))
 * // [Date('2024-01-15'), Date('2024-01-16'), Date('2024-01-17')]
 */
export const getDateRange = (start: Date | string | number, end: Date | string | number): Date[] => {
	const dates: Date[] = [];
	const current = new Date(start);
	const endDate = new Date(end);

	while (current <= endDate) {
		dates.push(new Date(current));
		current.setDate(current.getDate() + 1);
	}

	return dates;
};

/**
 * 이번 주의 시작일(월요일)과 종료일(일요일) 반환
 * @param date - 기준 날짜 (기본값: 오늘)
 * @returns { start: Date, end: Date }
 *
 * @example
 * getWeekRange() // { start: Date(월요일), end: Date(일요일) }
 */
export const getWeekRange = (
	date: Date | string | number = new Date(),
): {
	start: Date;
	end: Date;
} => {
	const d = new Date(date);
	const day = d.getDay();
	const diff = d.getDate() - day + (day === 0 ? -6 : 1); // 월요일로 조정

	const start = new Date(d.setDate(diff));
	const end = new Date(d.setDate(diff + 6));

	return { start, end };
};

/**
 * 이번 달의 시작일과 종료일 반환
 * @param date - 기준 날짜 (기본값: 오늘)
 * @returns { start: Date, end: Date }
 *
 * @example
 * getMonthRange() // { start: Date(1일), end: Date(말일) }
 */
export const getMonthRange = (
	date: Date | string | number = new Date(),
): {
	start: Date;
	end: Date;
} => {
	const d = new Date(date);
	const start = new Date(d.getFullYear(), d.getMonth(), 1);
	const end = new Date(d.getFullYear(), d.getMonth() + 1, 0);

	return { start, end };
};

// ============================================
// 6. 날짜 파싱 및 유효성 검사
// ============================================

/**
 * 문자열을 Date 객체로 안전하게 파싱
 * @param dateString - 날짜 문자열
 * @returns Date 객체 또는 null
 *
 * @example
 * parseDate('2024-01-15') // Date 객체
 * parseDate('invalid') // null
 */
export const parseDate = (dateString: string): Date | null => {
	const date = new Date(dateString);
	return isNaN(date.getTime()) ? null : date;
};

/**
 * 유효한 날짜인지 확인
 * @param date - 확인할 날짜
 * @returns 유효하면 true
 *
 * @example
 * isValidDate(new Date()) // true
 * isValidDate('invalid') // false
 */
export const isValidDate = (date: Date | string | number): boolean => {
	const d = new Date(date);
	return !isNaN(d.getTime());
};

/**
 * 윤년인지 확인
 * @param year - 확인할 년도
 * @returns 윤년이면 true
 *
 * @example
 * isLeapYear(2024) // true
 * isLeapYear(2023) // false
 */
export const isLeapYear = (year: number): boolean => {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

/**
 * 특정 년월의 일수 반환
 * @param year - 년도
 * @param month - 월 (1-12)
 * @returns 해당 월의 일수
 *
 * @example
 * getDaysInMonth(2024, 2) // 29 (윤년)
 * getDaysInMonth(2023, 2) // 28
 */
export const getDaysInMonth = (year: number, month: number): number => {
	return new Date(year, month, 0).getDate();
};

// ============================================
// 7. 특수 날짜 관련 함수들
// ============================================

/**
 * 현재 나이 계산
 * @param birthDate - 생년월일
 * @returns 만 나이
 *
 * @example
 * getAge(new Date('1990-01-15')) // 34 (2024년 기준)
 */
export const getAge = (birthDate: Date | string | number): number => {
	const birth = new Date(birthDate);
	const today = new Date();
	let age = today.getFullYear() - birth.getFullYear();
	const monthDiff = today.getMonth() - birth.getMonth();

	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
		age--;
	}

	return age;
};

/**
 * 요일을 한글로 반환
 * @param date - 날짜
 * @returns 요일 문자열 (월, 화, 수, 목, 금, 토, 일)
 *
 * @example
 * getKoreanDayOfWeek(new Date('2024-01-15')) // '월'
 */
export const getKoreanDayOfWeek = (date: Date | string | number): string => {
	const days = ['일', '월', '화', '수', '목', '금', '토'];
	return days[new Date(date).getDay()];
};

/**
 * 영문 요일을 한글로 반환
 * @param date - 날짜
 * @returns 요일 문자열 (일요일, 월요일, ...)
 *
 * @example
 * getKoreanDayOfWeekFull(new Date('2024-01-15')) // '월요일'
 */
export const getKoreanDayOfWeekFull = (date: Date | string | number): string => {
	const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
	return days[new Date(date).getDay()];
};

/**
 * 타임스탬프를 Date 객체로 변환
 * @param timestamp - Unix 타임스탬프 (밀리초)
 * @returns Date 객체
 *
 * @example
 * fromTimestamp(1705305600000) // Date('2024-01-15')
 */
export const fromTimestamp = (timestamp: number): Date => {
	return new Date(timestamp);
};

/**
 * Date 객체를 Unix 타임스탬프로 변환
 * @param date - 날짜
 * @returns Unix 타임스탬프 (밀리초)
 *
 * @example
 * toTimestamp(new Date('2024-01-15')) // 1705305600000
 */
export const toTimestamp = (date: Date | string | number): number => {
	return new Date(date).getTime();
};

/**
 * 날짜를 시작 시간(00:00:00)으로 설정
 * @param date - 날짜
 * @returns 시작 시간으로 설정된 Date 객체
 *
 * @example
 * startOfDay(new Date('2024-01-15 14:30:45')) // Date('2024-01-15 00:00:00')
 */
export const startOfDay = (date: Date | string | number): Date => {
	const d = new Date(date);
	d.setHours(0, 0, 0, 0);
	return d;
};

/**
 * 날짜를 종료 시간(23:59:59.999)으로 설정
 * @param date - 날짜
 * @returns 종료 시간으로 설정된 Date 객체
 *
 * @example
 * endOfDay(new Date('2024-01-15 14:30:45')) // Date('2024-01-15 23:59:59.999')
 */
export const endOfDay = (date: Date | string | number): Date => {
	const d = new Date(date);
	d.setHours(23, 59, 59, 999);
	return d;
};

/**
 * 두 날짜가 같은 날인지 확인 (시간 무시)
 * @param date1 - 첫 번째 날짜
 * @param date2 - 두 번째 날짜
 * @returns 같은 날이면 true
 *
 * @example
 * isSameDay(new Date('2024-01-15 10:00'), new Date('2024-01-15 20:00')) // true
 */
export const isSameDay = (date1: Date | string | number, date2: Date | string | number): boolean => {
	const d1 = new Date(date1);
	const d2 = new Date(date2);
	return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
};
