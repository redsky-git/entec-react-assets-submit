/**
 * 문자열 유틸리티 함수 모음
 * @description React + TypeScript 프로젝트에서 사용하는 문자열 처리 함수들
 */

// ============================================
// 1. 케이스 변환 (Case Conversion)
// ============================================

/**
 * 카멜 케이스로 변환 (camelCase)
 * @description 문자열을 카멜 케이스로 변환합니다.
 * @example toCamelCase("hello world") // "helloWorld"
 * @example toCamelCase("hello-world") // "helloWorld"
 * @example toCamelCase("hello_world") // "helloWorld"
 */
export function toCamelCase(str: string): string {
	return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
}

/**
 * 파스칼 케이스로 변환 (PascalCase)
 * @description 문자열을 파스칼 케이스로 변환합니다. (첫 글자 대문자)
 * @example toPascalCase("hello world") // "HelloWorld"
 * @example toPascalCase("hello-world") // "HelloWorld"
 */
export function toPascalCase(str: string): string {
	const camel = toCamelCase(str);
	return camel.charAt(0).toUpperCase() + camel.slice(1);
}

/**
 * 스네이크 케이스로 변환 (snake_case)
 * @description 문자열을 스네이크 케이스로 변환합니다.
 * @example toSnakeCase("helloWorld") // "hello_world"
 * @example toSnakeCase("HelloWorld") // "hello_world"
 * @example toSnakeCase("hello-world") // "hello_world"
 */
export function toSnakeCase(str: string): string {
	return str
		.replace(/([a-z])([A-Z])/g, '$1_$2')
		.replace(/[\s-]+/g, '_')
		.toLowerCase();
}

/**
 * 케밥 케이스로 변환 (kebab-case)
 * @description 문자열을 케밥 케이스로 변환합니다.
 * @example toKebabCase("helloWorld") // "hello-world"
 * @example toKebabCase("HelloWorld") // "hello-world"
 * @example toKebabCase("hello_world") // "hello-world"
 */
export function toKebabCase(str: string): string {
	return str
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/[\s_]+/g, '-')
		.toLowerCase();
}

/**
 * 상수 케이스로 변환 (CONSTANT_CASE)
 * @description 문자열을 상수 케이스(모두 대문자 + 언더스코어)로 변환합니다.
 * @example toConstantCase("helloWorld") // "HELLO_WORLD"
 * @example toConstantCase("hello-world") // "HELLO_WORLD"
 */
export function toConstantCase(str: string): string {
	return toSnakeCase(str).toUpperCase();
}

/**
 * 타이틀 케이스로 변환 (Title Case)
 * @description 각 단어의 첫 글자를 대문자로 변환합니다.
 * @example toTitleCase("hello world") // "Hello World"
 * @example toTitleCase("hello-world") // "Hello World"
 */
export function toTitleCase(str: string): string {
	return str
		.toLowerCase()
		.replace(/[^a-zA-Z0-9]+/g, ' ')
		.replace(/\b\w/g, (char) => char.toUpperCase())
		.trim();
}

/**
 * 센텐스 케이스로 변환 (Sentence case)
 * @description 첫 글자만 대문자로, 나머지는 소문자로 변환합니다.
 * @example toSentenceCase("HELLO WORLD") // "Hello world"
 * @example toSentenceCase("hELLO wORLD") // "Hello world"
 */
export function toSentenceCase(str: string): string {
	const lower = str.toLowerCase();
	return lower.charAt(0).toUpperCase() + lower.slice(1);
}

// ============================================
// 2. 대소문자 변환 (Case Transformation)
// ============================================

/**
 * 첫 글자를 대문자로 변환
 * @description 문자열의 첫 글자만 대문자로 변환합니다.
 * @example capitalize("hello") // "Hello"
 * @example capitalize("HELLO") // "HELLO"
 */
export function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 첫 글자를 소문자로 변환
 * @description 문자열의 첫 글자만 소문자로 변환합니다.
 * @example uncapitalize("Hello") // "hello"
 * @example uncapitalize("HELLO") // "hELLO"
 */
export function uncapitalize(str: string): string {
	return str.charAt(0).toLowerCase() + str.slice(1);
}

/**
 * 대소문자 반전
 * @description 대문자는 소문자로, 소문자는 대문자로 변환합니다.
 * @example swapCase("Hello World") // "hELLO wORLD"
 */
export function swapCase(str: string): string {
	return str
		.split('')
		.map((char) => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
		.join('');
}

// ============================================
// 3. 문자열 자르기 및 패딩 (Truncation & Padding)
// ============================================

/**
 * 문자열 자르기 (말줄임표 추가)
 * @description 지정된 길이로 문자열을 자르고 말줄임표를 추가합니다.
 * @example truncate("Hello World", 5) // "Hello..."
 * @example truncate("Hello World", 5, ">>") // "Hello>>"
 */
export function truncate(str: string, length: number, suffix = '...'): string {
	if (str.length <= length) return str;
	return str.slice(0, length) + suffix;
}

/**
 * 중간 생략 (양쪽 끝은 유지)
 * @description 문자열의 중간 부분을 생략하고 양쪽 끝은 유지합니다.
 * @example truncateMiddle("verylongfilename.txt", 10) // "very...txt"
 * @example truncateMiddle("1234567890", 8) // "123...90"
 */
export function truncateMiddle(str: string, length: number, separator = '...'): string {
	if (str.length <= length) return str;
	const sepLen = separator.length;
	const charsToShow = length - sepLen;
	const frontChars = Math.ceil(charsToShow / 2);
	const backChars = Math.floor(charsToShow / 2);
	return str.slice(0, frontChars) + separator + str.slice(-backChars);
}

/**
 * 단어 단위로 자르기
 * @description 단어가 잘리지 않도록 문자열을 자릅니다.
 * @example truncateWords("Hello world from React", 2) // "Hello world..."
 * @example truncateWords("Hello world from React", 3) // "Hello world from..."
 */
export function truncateWords(str: string, wordCount: number, suffix = '...'): string {
	const words = str.split(/\s+/);
	if (words.length <= wordCount) return str;
	return words.slice(0, wordCount).join(' ') + suffix;
}

/**
 * 왼쪽 패딩
 * @description 문자열 왼쪽을 지정된 문자로 채웁니다.
 * @example padStart("5", 3, "0") // "005"
 * @example padStart("abc", 5, "*") // "**abc"
 */
export function padStart(str: string, length: number, char = ' '): string {
	return str.padStart(length, char);
}

/**
 * 오른쪽 패딩
 * @description 문자열 오른쪽을 지정된 문자로 채웁니다.
 * @example padEnd("5", 3, "0") // "500"
 * @example padEnd("abc", 5, "*") // "abc**"
 */
export function padEnd(str: string, length: number, char = ' '): string {
	return str.padEnd(length, char);
}

/**
 * 양쪽 패딩 (중앙 정렬)
 * @description 문자열을 중앙에 배치하고 양쪽을 채웁니다.
 * @example padCenter("Hi", 6, "*") // "**Hi**"
 * @example padCenter("Test", 8, "-") // "--Test--"
 */
export function padCenter(str: string, length: number, char = ' '): string {
	if (str.length >= length) return str;
	const padLength = length - str.length;
	const leftPad = Math.floor(padLength / 2);
	const rightPad = padLength - leftPad;
	return char.repeat(leftPad) + str + char.repeat(rightPad);
}

// ============================================
// 4. 문자열 검색 및 확인 (Search & Check)
// ============================================

/**
 * 특정 문자열로 시작하는지 확인 (대소문자 무시)
 * @description 대소문자를 구분하지 않고 시작 문자열을 확인합니다.
 * @example startsWithIgnoreCase("Hello World", "hello") // true
 */
export function startsWithIgnoreCase(str: string, search: string): boolean {
	return str.toLowerCase().startsWith(search.toLowerCase());
}

/**
 * 특정 문자열로 끝나는지 확인 (대소문자 무시)
 * @description 대소문자를 구분하지 않고 끝 문자열을 확인합니다.
 * @example endsWithIgnoreCase("Hello World", "WORLD") // true
 */
export function endsWithIgnoreCase(str: string, search: string): boolean {
	return str.toLowerCase().endsWith(search.toLowerCase());
}

/**
 * 문자열 포함 여부 확인 (대소문자 무시)
 * @description 대소문자를 구분하지 않고 포함 여부를 확인합니다.
 * @example includesIgnoreCase("Hello World", "WORLD") // true
 */
export function includesIgnoreCase(str: string, search: string): boolean {
	return str.toLowerCase().includes(search.toLowerCase());
}

/**
 * 특정 문자의 개수 세기
 * @description 문자열에서 특정 문자 또는 부분 문자열의 개수를 셉니다.
 * @example countOccurrences("hello", "l") // 2
 * @example countOccurrences("hello world", "o") // 2
 */
export function countOccurrences(str: string, search: string): number {
	if (search.length === 0) return 0;
	let count = 0;
	let position = 0;
	while ((position = str.indexOf(search, position)) !== -1) {
		count++;
		position += search.length;
	}
	return count;
}

/**
 * 문자열이 숫자인지 확인
 * @description 문자열이 유효한 숫자인지 확인합니다.
 * @example isNumeric("123") // true
 * @example isNumeric("12.34") // true
 * @example isNumeric("abc") // false
 */
export function isNumeric(str: string): boolean {
	return !isNaN(parseFloat(str)) && isFinite(Number(str));
}

/**
 * 문자열이 알파벳만 포함하는지 확인
 * @description 문자열이 알파벳(a-z, A-Z)만 포함하는지 확인합니다.
 * @example isAlpha("Hello") // true
 * @example isAlpha("Hello123") // false
 */
export function isAlpha(str: string): boolean {
	return /^[a-zA-Z]+$/.test(str);
}

/**
 * 문자열이 알파벳과 숫자만 포함하는지 확인
 * @description 문자열이 알파벳과 숫자만 포함하는지 확인합니다.
 * @example isAlphanumeric("Hello123") // true
 * @example isAlphanumeric("Hello 123") // false
 */
export function isAlphanumeric(str: string): boolean {
	return /^[a-zA-Z0-9]+$/.test(str);
}

/**
 * 빈 문자열 또는 공백만 있는지 확인
 * @description 문자열이 비어있거나 공백만 있는지 확인합니다.
 * @example isBlank("") // true
 * @example isBlank("   ") // true
 * @example isBlank("hello") // false
 */
export function isBlank(str: string): boolean {
	return str.trim().length === 0;
}

// ============================================
// 5. 문자열 치환 및 제거 (Replace & Remove)
// ============================================

/**
 * 모든 공백 제거
 * @description 문자열에서 모든 공백 문자를 제거합니다.
 * @example removeWhitespace("Hello World") // "HelloWorld"
 * @example removeWhitespace("  a  b  c  ") // "abc"
 */
export function removeWhitespace(str: string): string {
	return str.replace(/\s+/g, '');
}

/**
 * 여러 공백을 하나로 축소
 * @description 연속된 공백을 하나의 공백으로 축소합니다.
 * @example collapseWhitespace("Hello    World") // "Hello World"
 * @example collapseWhitespace("a  b   c") // "a b c"
 */
export function collapseWhitespace(str: string): string {
	return str.replace(/\s+/g, ' ').trim();
}

/**
 * 특정 문자 제거
 * @description 문자열에서 특정 문자들을 제거합니다.
 * @example removeChars("Hello World", "lo") // "He Wrd"
 * @example removeChars("abc123def", "0123456789") // "abcdef"
 */
export function removeChars(str: string, chars: string): string {
	const regex = new RegExp(`[${chars}]`, 'g');
	return str.replace(regex, '');
}

/**
 * HTML 태그 제거
 * @description 문자열에서 모든 HTML 태그를 제거합니다.
 * @example stripHtml("<p>Hello</p>") // "Hello"
 * @example stripHtml("<div class='test'>World</div>") // "World"
 */
export function stripHtml(html: string): string {
	return html.replace(/<[^>]*>/g, '');
}

/**
 * 특수문자 제거
 * @description 알파벳, 숫자, 공백을 제외한 모든 문자를 제거합니다.
 * @example removeSpecialChars("Hello@World!") // "HelloWorld"
 * @example removeSpecialChars("Test#123$") // "Test123"
 */
export function removeSpecialChars(str: string): string {
	return str.replace(/[^a-zA-Z0-9\s]/g, '');
}

/**
 * 대소문자 무시하고 문자열 치환
 * @description 대소문자를 구분하지 않고 모든 일치 항목을 치환합니다.
 * @example replaceIgnoreCase("Hello WORLD hello", "hello", "Hi") // "Hi WORLD Hi"
 */
export function replaceIgnoreCase(str: string, search: string, replace: string): string {
	const regex = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
	return str.replace(regex, replace);
}

/**
 * 여러 문자열을 한 번에 치환
 * @description 객체로 여러 치환 규칙을 한 번에 적용합니다.
 * @example replaceMultiple("Hello World", { Hello: "Hi", World: "Earth" }) // "Hi Earth"
 */
export function replaceMultiple(str: string, replacements: Record<string, string>): string {
	let result = str;
	Object.entries(replacements).forEach(([search, replace]) => {
		result = result.replace(new RegExp(search, 'g'), replace);
	});
	return result;
}

// ============================================
// 6. 문자열 분할 및 결합 (Split & Join)
// ============================================

/**
 * 문자열을 단어 배열로 분할
 * @description 공백, 특수문자 등으로 단어를 분리합니다.
 * @example words("Hello, World! How are you?") // ["Hello", "World", "How", "are", "you"]
 */
export function words(str: string): string[] {
	return str.match(/[a-zA-Z0-9]+/g) || [];
}

/**
 * 문자열을 줄 단위로 분할
 * @description 줄바꿈 문자를 기준으로 배열로 분할하고 빈 줄을 제거합니다.
 * @example lines("Line1\nLine2\n\nLine3") // ["Line1", "Line2", "Line3"]
 */
export function lines(str: string): string[] {
	return str.split(/\r?\n/).filter((line) => line.trim().length > 0);
}

/**
 * 지정된 길이로 문자열 분할
 * @description 문자열을 지정된 길이의 청크로 나눕니다.
 * @example chunkString("abcdefgh", 3) // ["abc", "def", "gh"]
 */
export function chunkString(str: string, size: number): string[] {
	const chunks: string[] = [];
	for (let i = 0; i < str.length; i += size) {
		chunks.push(str.slice(i, i + size));
	}
	return chunks;
}

/**
 * 배열을 자연스러운 문장으로 결합
 * @description 배열을 "A, B, and C" 형식의 문장으로 결합합니다.
 * @example toList(["apple", "banana", "orange"]) // "apple, banana, and orange"
 * @example toList(["apple", "banana"], "또는") // "apple 또는 banana"
 */
export function toList(arr: string[], conjunction = 'and'): string {
	if (arr.length === 0) return '';
	if (arr.length === 1) return arr[0];
	if (arr.length === 2) return arr.join(` ${conjunction} `);
	return arr.slice(0, -1).join(', ') + `, ${conjunction} ${arr[arr.length - 1]}`;
}

// ============================================
// 7. 문자열 변환 (Transformation)
// ============================================

/**
 * 문자열 반전
 * @description 문자열의 순서를 뒤집습니다.
 * @example reverse("Hello") // "olleH"
 * @example reverse("12345") // "54321"
 */
export function reverse(str: string): string {
	return str.split('').reverse().join('');
}

/**
 * 문자열 반복
 * @description 문자열을 지정된 횟수만큼 반복합니다.
 * @example repeat("Ha", 3) // "HaHaHa"
 * @example repeat("*", 5) // "*****"
 */
export function repeat(str: string, count: number): string {
	return str.repeat(count);
}

/**
 * 문자열을 URL-safe 슬러그로 변환
 * @description URL에 사용할 수 있는 안전한 문자열로 변환합니다.
 * @example slugify("Hello World!") // "hello-world"
 * @example slugify("React & TypeScript") // "react-typescript"
 */
export function slugify(str: string): string {
	return str
		.toLowerCase()
		.trim()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '') // 악센트 제거
		.replace(/[^\w\s-]/g, '') // 특수문자 제거
		.replace(/[\s_-]+/g, '-') // 공백을 하이픈으로
		.replace(/^-+|-+$/g, ''); // 앞뒤 하이픈 제거
}

/**
 * 문자열을 랜덤하게 섞기
 * @description 문자열의 문자 순서를 무작위로 섞습니다.
 * @example shuffle("Hello") // "olHel" (무작위 결과)
 */
export function shuffle(str: string): string {
	const arr = str.split('');
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr.join('');
}

/**
 * 이스케이프 처리 (HTML)
 * @description HTML 특수 문자를 이스케이프 처리합니다.
 * @example escapeHtml("<div>Hello</div>") // "&lt;div&gt;Hello&lt;/div&gt;"
 */
export function escapeHtml(str: string): string {
	const map: Record<string, string> = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#39;',
	};
	return str.replace(/[&<>"']/g, (char) => map[char]);
}

/**
 * 이스케이프 해제 (HTML)
 * @description 이스케이프된 HTML을 원래 문자로 복원합니다.
 * @example unescapeHtml("&lt;div&gt;") // "<div>"
 */
export function unescapeHtml(str: string): string {
	const map: Record<string, string> = {
		'&amp;': '&',
		'&lt;': '<',
		'&gt;': '>',
		'&quot;': '"',
		'&#39;': "'",
	};
	return str.replace(/&[^;]+;/g, (entity) => map[entity] || entity);
}

/**
 * 정규식 이스케이프
 * @description 정규식 특수 문자를 이스케이프 처리합니다.
 * @example escapeRegex("Hello (world)") // "Hello \\(world\\)"
 */
export function escapeRegex(str: string): string {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ============================================
// 8. 문자열 분석 (Analysis)
// ============================================

/**
 * 단어 수 세기
 * @description 문자열의 단어 개수를 셉니다.
 * @example wordCount("Hello World") // 2
 * @example wordCount("React, Vue, Angular") // 3
 */
export function wordCount(str: string): number {
	return words(str).length;
}

/**
 * 문자 수 세기 (공백 제외)
 * @description 공백을 제외한 문자 개수를 셉니다.
 * @example charCount("Hello World") // 10
 */
export function charCount(str: string): number {
	return removeWhitespace(str).length;
}

/**
 * 바이트 크기 계산
 * @description 문자열의 바이트 크기를 계산합니다 (UTF-8 기준).
 * @example byteSize("Hello") // 5
 * @example byteSize("안녕") // 6
 */
export function byteSize(str: string): number {
	return new Blob([str]).size;
}

/**
 * 가장 긴 단어 찾기
 * @description 문자열에서 가장 긴 단어를 반환합니다.
 * @example longestWord("The quick brown fox") // "quick"
 */
export function longestWord(str: string): string {
	const wordList = words(str);
	return wordList.reduce((longest, word) => (word.length > longest.length ? word : longest), '');
}

/**
 * 가장 짧은 단어 찾기
 * @description 문자열에서 가장 짧은 단어를 반환합니다.
 * @example shortestWord("The quick brown fox") // "The"
 */
export function shortestWord(str: string): string {
	const wordList = words(str);
	return wordList.reduce((shortest, word) => (word.length < shortest.length ? word : shortest));
}

// ============================================
// 9. 문자열 비교 (Comparison)
// ============================================

/**
 * 대소문자 무시 비교
 * @description 두 문자열을 대소문자 무시하고 비교합니다.
 * @example equalsIgnoreCase("Hello", "hello") // true
 * @example equalsIgnoreCase("World", "WORLD") // true
 */
export function equalsIgnoreCase(str1: string, str2: string): boolean {
	return str1.toLowerCase() === str2.toLowerCase();
}

/**
 * 레벤슈타인 거리 계산
 * @description 두 문자열의 편집 거리(유사도)를 계산합니다.
 * @example levenshteinDistance("kitten", "sitting") // 3
 * @example levenshteinDistance("hello", "hello") // 0
 */
export function levenshteinDistance(str1: string, str2: string): number {
	const matrix: number[][] = [];

	for (let i = 0; i <= str2.length; i++) {
		matrix[i] = [i];
	}

	for (let j = 0; j <= str1.length; j++) {
		matrix[0][j] = j;
	}

	for (let i = 1; i <= str2.length; i++) {
		for (let j = 1; j <= str1.length; j++) {
			if (str2[i - 1] === str1[j - 1]) {
				matrix[i][j] = matrix[i - 1][j - 1];
			} else {
				matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
			}
		}
	}

	return matrix[str2.length][str1.length];
}

/**
 * 유사도 계산 (0-1 사이의 값)
 * @description 두 문자열의 유사도를 0(완전 다름)에서 1(동일) 사이로 반환합니다.
 * @example similarity("hello", "hallo") // 0.8
 * @example similarity("hello", "hello") // 1
 */
export function similarity(str1: string, str2: string): number {
	const distance = levenshteinDistance(str1, str2);
	const maxLength = Math.max(str1.length, str2.length);
	return maxLength === 0 ? 1 : 1 - distance / maxLength;
}

// ============================================
// 10. 템플릿 및 보간 (Template & Interpolation)
// ============================================

/**
 * 템플릿 문자열 보간
 * @description 템플릿 문자열의 변수를 객체의 값으로 치환합니다.
 * @example template("Hello {name}!", { name: "World" }) // "Hello World!"
 * @example template("I am {age} years old", { age: 25 }) // "I am 25 years old"
 */
export function template(str: string, vars: Record<string, string | number>): string {
	return str.replace(/\{([^}]+)\}/g, (_, key) => String(vars[key.trim()] || ''));
}

/**
 * 마스킹 처리
 * @description 문자열의 일부를 마스킹 문자로 치환합니다.
 * @example mask("1234567890", 3, 6) // "123****890"
 * @example mask("test@email.com", 2, 5, "*") // "te***@email.com"
 */
export function mask(str: string, start: number, end: number, maskChar = '*'): string {
	if (start < 0 || end > str.length || start >= end) return str;
	return str.slice(0, start) + maskChar.repeat(end - start) + str.slice(end);
}

/**
 * 이메일 마스킹
 * @description 이메일 주소를 마스킹 처리합니다.
 * @example maskEmail("user@example.com") // "u***@example.com"
 * @example maskEmail("test@gmail.com") // "t***@gmail.com"
 */
export function maskEmail(email: string): string {
	const [local, domain] = email.split('@');
	if (!domain) return email;
	const maskedLocal = local.length > 2 ? local[0] + '*'.repeat(local.length - 1) : local;
	return `${maskedLocal}@${domain}`;
}

/**
 * 전화번호 마스킹
 * @description 전화번호를 마스킹 처리합니다.
 * @example maskPhone("01012345678") // "010****5678"
 * @example maskPhone("010-1234-5678") // "010-****-5678"
 */
export function maskPhone(phone: string): string {
	const cleaned = phone.replace(/[^0-9]/g, '');
	if (cleaned.length === 11) {
		return cleaned.slice(0, 3) + '****' + cleaned.slice(7);
	}
	return phone.replace(/(\d{3})[0-9]{4}(\d{4})/, '$1****$2');
}

// ============================================
// 11. 유효성 검증 (Validation)
// ============================================

/**
 * 이메일 형식 검증
 * @description 문자열이 유효한 이메일 형식인지 검증합니다.
 * @example isEmail("test@example.com") // true
 * @example isEmail("invalid-email") // false
 */
export function isEmail(str: string): boolean {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

/**
 * URL 형식 검증
 * @description 문자열이 유효한 URL 형식인지 검증합니다.
 * @example isUrl("https://example.com") // true
 * @example isUrl("not-a-url") // false
 */
export function isUrl(str: string): boolean {
	try {
		new URL(str);
		return true;
	} catch {
		return false;
	}
}

/**
 * 한글 포함 여부 확인
 * @description 문자열에 한글이 포함되어 있는지 확인합니다.
 * @example hasKorean("안녕하세요") // true
 * @example hasKorean("Hello") // false
 * @example hasKorean("Hello 안녕") // true
 */
export function hasKorean(str: string): boolean {
	return /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(str);
}

/**
 * 한글만 포함하는지 확인
 * @description 문자열이 한글로만 구성되어 있는지 확인합니다.
 * @example isKoreanOnly("안녕하세요") // true
 * @example isKoreanOnly("안녕 123") // false
 */
export function isKoreanOnly(str: string): boolean {
	return /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣\s]+$/.test(str);
}

/**
 * IP 주소 형식 검증 (IPv4)
 * @description 문자열이 유효한 IPv4 주소인지 검증합니다.
 * @example isIPv4("192.168.0.1") // true
 * @example isIPv4("256.256.256.256") // false
 */
export function isIPv4(str: string): boolean {
	const parts = str.split('.');
	if (parts.length !== 4) return false;
	return parts.every((part) => {
		const num = parseInt(part, 10);
		return num >= 0 && num <= 255 && String(num) === part;
	});
}

/**
 * 16진수 컬러 코드 검증
 * @description 문자열이 유효한 16진수 색상 코드인지 검증합니다.
 * @example isHexColor("#FF0000") // true
 * @example isHexColor("#F00") // true
 * @example isHexColor("FF0000") // false
 */
export function isHexColor(str: string): boolean {
	return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(str);
}

/**
 * Base64 문자열 검증
 * @description 문자열이 유효한 Base64 인코딩인지 검증합니다.
 * @example isBase64("SGVsbG8gV29ybGQ=") // true
 * @example isBase64("Not Base64!") // false
 */
export function isBase64(str: string): boolean {
	try {
		return btoa(atob(str)) === str;
	} catch {
		return false;
	}
}

/**
 * JSON 문자열 검증
 * @description 문자열이 유효한 JSON인지 검증합니다.
 * @example isJSON('{"name":"John"}') // true
 * @example isJSON('invalid json') // false
 */
export function isJSON(str: string): boolean {
	try {
		JSON.parse(str);
		return true;
	} catch {
		return false;
	}
}

/**
 * 신용카드 번호 검증 (Luhn 알고리즘)
 * @description 신용카드 번호가 유효한지 검증합니다.
 * @example isCreditCard("4532015112830366") // true
 */
export function isCreditCard(str: string): boolean {
	const cleaned = str.replace(/\D/g, '');
	if (cleaned.length < 13 || cleaned.length > 19) return false;

	let sum = 0;
	let isEven = false;

	for (let i = cleaned.length - 1; i >= 0; i--) {
		let digit = parseInt(cleaned[i], 10);

		if (isEven) {
			digit *= 2;
			if (digit > 9) digit -= 9;
		}

		sum += digit;
		isEven = !isEven;
	}

	return sum % 10 === 0;
}

// ============================================
// 12. 인코딩/디코딩 (Encoding/Decoding)
// ============================================

/**
 * Base64 인코딩
 * @description 문자열을 Base64로 인코딩합니다.
 * @example toBase64("Hello World") // "SGVsbG8gV29ybGQ="
 */
export function toBase64(str: string): string {
	return btoa(unescape(encodeURIComponent(str)));
}

/**
 * Base64 디코딩
 * @description Base64 문자열을 디코딩합니다.
 * @example fromBase64("SGVsbG8gV29ybGQ=") // "Hello World"
 */
export function fromBase64(str: string): string {
	return decodeURIComponent(escape(atob(str)));
}

/**
 * URL 인코딩
 * @description 문자열을 URL-safe 형식으로 인코딩합니다.
 * @example encodeUrl("Hello World!") // "Hello%20World%21"
 */
export function encodeUrl(str: string): string {
	return encodeURIComponent(str);
}

/**
 * URL 디코딩
 * @description URL 인코딩된 문자열을 디코딩합니다.
 * @example decodeUrl("Hello%20World%21") // "Hello World!"
 */
export function decodeUrl(str: string): string {
	return decodeURIComponent(str);
}

// ============================================
// 13. 문자열 생성 (Generation)
// ============================================

/**
 * 랜덤 문자열 생성
 * @description 지정된 길이의 랜덤 문자열을 생성합니다.
 * @example randomString(10) // "aBc123XyZ9"
 * @example randomString(5, "abc") // "cabba"
 */
export function randomString(
	length: number,
	chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
): string {
	let result = '';
	for (let i = 0; i < length; i++) {
		result += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return result;
}

/**
 * UUID v4 생성
 * @description 표준 UUID v4 형식의 고유 ID를 생성합니다.
 * @example uuid() // "f47ac10b-58cc-4372-a567-0e02b2c3d479"
 */
export function uuid(): string {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0;
		const v = c === 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

/**
 * 단축 ID 생성
 * @description 짧은 고유 ID를 생성합니다.
 * @example shortId() // "k3p9x2m"
 * @example shortId(10) // "a8f3k9p2x5"
 */
export function shortId(length = 7): string {
	return randomString(length, 'abcdefghijklmnopqrstuvwxyz0123456789');
}

/**
 * 나노 ID 생성 (타임스탬프 기반)
 * @description 타임스탬프 기반의 고유 ID를 생성합니다.
 * @example nanoId() // "1699876543210_x9k2p"
 */
export function nanoId(): string {
	return `${Date.now()}_${randomString(5)}`;
}

// ============================================
// 14. 문자열 추출 (Extraction)
// ============================================

/**
 * URL에서 도메인 추출
 * @description URL에서 도메인 부분만 추출합니다.
 * @example extractDomain("https://www.example.com/path") // "example.com"
 */
export function extractDomain(url: string): string {
	try {
		const urlObj = new URL(url);
		return urlObj.hostname.replace(/^www\./, '');
	} catch {
		return '';
	}
}

/**
 * 이메일에서 사용자명 추출
 * @description 이메일 주소에서 @ 앞부분을 추출합니다.
 * @example extractEmailUsername("user@example.com") // "user"
 */
export function extractEmailUsername(email: string): string {
	return email.split('@')[0] || '';
}

/**
 * 이메일에서 도메인 추출
 * @description 이메일 주소에서 @ 뒷부분을 추출합니다.
 * @example extractEmailDomain("user@example.com") // "example.com"
 */
export function extractEmailDomain(email: string): string {
	return email.split('@')[1] || '';
}

/**
 * 문자열에서 숫자만 추출
 * @description 문자열에서 모든 숫자를 추출합니다.
 * @example extractNumbers("abc123def456") // "123456"
 * @example extractNumbers("Price: $99.99") // "99.99"
 */
export function extractNumbers(str: string): string {
	return str.replace(/[^0-9.]/g, '');
}

/**
 * 문자열에서 첫 번째 숫자 추출
 * @description 문자열에서 첫 번째 나타나는 숫자를 추출합니다.
 * @example extractFirstNumber("abc 123 def 456") // 123
 */
export function extractFirstNumber(str: string): number | null {
	const match = str.match(/-?\d+\.?\d*/);
	return match ? parseFloat(match[0]) : null;
}

/**
 * 문자열에서 모든 URL 추출
 * @description 문자열에서 모든 URL을 추출합니다.
 * @example extractUrls("Visit https://example.com and http://test.org")
 * // ["https://example.com", "http://test.org"]
 */
export function extractUrls(str: string): string[] {
	const urlRegex = /(https?:\/\/[^\s]+)/g;
	return str.match(urlRegex) || [];
}

/**
 * 문자열에서 해시태그 추출
 * @description 문자열에서 모든 해시태그(#)를 추출합니다.
 * @example extractHashtags("I love #coding and #typescript!")
 * // ["#coding", "#typescript"]
 */
export function extractHashtags(str: string): string[] {
	return str.match(/#[a-zA-Z0-9_]+/g) || [];
}

/**
 * 문자열에서 멘션 추출
 * @description 문자열에서 모든 멘션(@)을 추출합니다.
 * @example extractMentions("Hello @user1 and @user2")
 * // ["@user1", "@user2"]
 */
export function extractMentions(str: string): string[] {
	return str.match(/@[a-zA-Z0-9_]+/g) || [];
}

/**
 * 괄호 안의 내용 추출
 * @description 괄호(소괄호, 중괄호, 대괄호) 안의 내용을 추출합니다.
 * @example extractBrackets("Hello (World) [123]") // ["World", "123"]
 */
export function extractBrackets(str: string): string[] {
	const matches = str.match(/\(([^)]+)\)|\[([^\]]+)\]|\{([^}]+)\}/g);
	return matches ? matches.map((m) => m.slice(1, -1)) : [];
}

// ============================================
// 15. 고급 문자열 처리 (Advanced)
// ============================================

/**
 * 카멜케이스를 읽기 쉬운 형태로 변환
 * @description 카멜케이스를 공백으로 구분된 단어로 변환합니다.
 * @example humanize("firstName") // "First Name"
 * @example humanize("dateOfBirth") // "Date Of Birth"
 */
export function humanize(str: string): string {
	return str
		.replace(/([A-Z])/g, ' $1')
		.replace(/^./, (s) => s.toUpperCase())
		.trim();
}

/**
 * 복수형으로 변환 (영어)
 * @description 영어 단어를 복수형으로 변환합니다. (간단한 규칙)
 * @example pluralize("cat") // "cats"
 * @example pluralize("box") // "boxes"
 * @example pluralize("baby") // "babies"
 */
export function pluralize(word: string): string {
	if (word.endsWith('s') || word.endsWith('x') || word.endsWith('z')) {
		return word + 'es';
	}
	if (word.endsWith('y') && !/[aeiou]y$/.test(word)) {
		return word.slice(0, -1) + 'ies';
	}
	return word + 's';
}

/**
 * 단수형으로 변환 (영어)
 * @description 영어 단어를 단수형으로 변환합니다. (간단한 규칙)
 * @example singularize("cats") // "cat"
 * @example singularize("boxes") // "box"
 * @example singularize("babies") // "baby"
 */
export function singularize(word: string): string {
	if (word.endsWith('ies')) {
		return word.slice(0, -3) + 'y';
	}
	if (word.endsWith('es')) {
		return word.slice(0, -2);
	}
	if (word.endsWith('s')) {
		return word.slice(0, -1);
	}
	return word;
}

/**
 * 서수형 변환 (영어)
 * @description 숫자를 서수형으로 변환합니다 (1st, 2nd, 3rd...).
 * @example ordinalize(1) // "1st"
 * @example ordinalize(22) // "22nd"
 * @example ordinalize(103) // "103rd"
 */
export function ordinalize(num: number): string {
	const j = num % 10;
	const k = num % 100;
	if (j === 1 && k !== 11) return num + 'st';
	if (j === 2 && k !== 12) return num + 'nd';
	if (j === 3 && k !== 13) return num + 'rd';
	return num + 'th';
}

/**
 * 문자열 압축 (연속된 문자)
 * @description 연속된 문자를 개수로 압축합니다.
 * @example compress("aaabbcccc") // "a3b2c4"
 * @example compress("abc") // "abc" (압축 효과 없음)
 */
export function compress(str: string): string {
	let compressed = '';
	let count = 1;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			count++;
		} else {
			compressed += str[i] + (count > 1 ? count : '');
			count = 1;
		}
	}

	return compressed.length < str.length ? compressed : str;
}

/**
 * 문자열 압축 해제
 * @description 압축된 문자열을 원래대로 복원합니다.
 * @example decompress("a3b2c4") // "aaabbcccc"
 */
export function decompress(str: string): string {
	return str.replace(/([a-zA-Z])(\d+)/g, (_, char, count) => char.repeat(parseInt(count)));
}

/**
 * 문자열 하이라이트
 * @description 검색어를 하이라이트 태그로 감쌉니다.
 * @example highlight("Hello World", "World")
 * // "Hello <mark>World</mark>"
 */
export function highlight(str: string, search: string, tag = 'mark'): string {
	if (!search) return str;
	const regex = new RegExp(`(${escapeRegex(search)})`, 'gi');
	return str.replace(regex, `<${tag}>$1</${tag}>`);
}

/**
 * 문자열을 안전한 파일명으로 변환
 * @description 파일명으로 사용할 수 없는 문자를 제거합니다.
 * @example toSafeFilename("Hello/World?.txt") // "Hello-World.txt"
 */
export function toSafeFilename(str: string): string {
	return (
		str
			// eslint-disable-next-line no-control-regex
			.replace(/[<>:"/\\|?*\x00-\x1F]/g, '')
			.replace(/\s+/g, '-')
			.replace(/^\.+/, '')
			.substring(0, 255)
	);
}

/**
 * 문자열 diff 계산 (추가/삭제 표시)
 * @description 두 문자열의 차이를 계산합니다.
 * @example diff("Hello", "Hallo")
 * // { additions: ['a'], deletions: ['e'], same: ['H', 'l', 'l', 'o'] }
 */
export function diff(
	str1: string,
	str2: string,
): {
	additions: string[];
	deletions: string[];
	same: string[];
} {
	const set1 = new Set(str1);
	const set2 = new Set(str2);

	return {
		additions: Array.from(set2).filter((char) => !set1.has(char)),
		deletions: Array.from(set1).filter((char) => !set2.has(char)),
		same: Array.from(set1).filter((char) => set2.has(char)),
	};
}
