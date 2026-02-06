import type { IUtils } from '@/app/types/common';
import * as stringUtils from './string-utils';
import * as dateUtilsEx from './date-utils';
import formatUtil from './format-utils';

export default class Utils implements IUtils {
	private static instance: Utils;

	public static getInstance(): Utils {
		if (!this.instance) {
			this.instance = new Utils();
		}
		return this.instance;
	}

	// date 관련 유틸 객체
	public date = {
		formatDate: dateUtilsEx.formatDate,
	};

	// string관련 유틸 객체
	public string = {
		toCamelCase: stringUtils.toCamelCase,
	};

	// format관련 유틸 객체
	public format = {
		number: formatUtil.number,
		currency: formatUtil.currency,
		percent: formatUtil.percent,

		// 금융 포맷
		account: formatUtil.account,
		card: formatUtil.card,
		amount: formatUtil.amount,

		// 개인정보 포맷
		phone: formatUtil.phone,
		email: formatUtil.email,
		residentNumber: formatUtil.residentNumber,
		name: formatUtil.name,

		// 날짜/시간 포맷
		date: formatUtil.date,
		datetime: formatUtil.datetime,
		period: formatUtil.period,

		// 비즈니스 포맷
		businessNumber: formatUtil.businessNumber,
		corporationNumber: formatUtil.corporationNumber,

		// 파일/데이터 포맷
		fileSize: formatUtil.fileSize,
		bytes: formatUtil.bytes,

		// 기타 유틸
		ellipsis: formatUtil.ellipsis,
		mask: formatUtil.mask,
		padStart: formatUtil.padStart,
		padEnd: formatUtil.padEnd,
	};

	public hashStringTo32BitInteger(str: string) {
		let hash = 0;

		for (let i = 0; i < str.length; i++) {
			const charCode = str.charCodeAt(i);
			hash = (hash << 5) - hash + charCode;
			hash |= 0;
		}

		return hash;
	}
}
