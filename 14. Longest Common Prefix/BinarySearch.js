/**
 * @param {string[]} strs - 문자열의 배열
 * @return {string} - 가장 긴 공통 접두사
 */
var longestCommonPrefix = function (strs) {
    // 만약 문자열 배열이 null 또는 길이가 0이라면 빈 문자열 반환
    if (!strs || strs.length === 0) {
        return "";
    }

    // 문자열 배열에서 가장 짧은 문자열의 길이를 구함
    let minLength = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < strs.length; i++) {
        minLength = Math.min(minLength, strs[i].length);
    }

    // 이분 탐색을 위한 left, right 변수 초기화
    let left = 0;
    let right = minLength;

    // 이분 탐색 수행
    while (left <= right) {
        // 중간값(mid) 계산
        const mid = Math.floor((left + right) / 2);
        // isCommonPrefix 함수를 이용하여 mid 길이의 공통 접두사가 있는지 확인
        if (isCommonPrefix(strs, mid)) {
            // 공통 접두사가 있다면 left 값을 올려서 더 긴 접두사를 찾음
            left = mid + 1;
        } else {
            // 공통 접두사가 없다면 right 값을 내려서 더 짧은 접두사를 찾음
            right = mid - 1;
        }
    }

    // 결과 문자열 반환
    return strs[0].substring(0, Math.floor((left + right) / 2));
};

/**
 * @param {string[]} strs - 문자열의 배열
 * @param {number} len - 접두사의 길이
 * @return {boolean} - 모든 문자열에서 길이 len의 접두사가 공통으로 존재하는지 여부
 */
function isCommonPrefix(strs, len) {
    // 첫 번째 문자열에서 길이 len의 접두사를 추출하여 prefix 변수에 할당
    const prefix = strs[0].substring(0, len);
    // 나머지 문자열들을 검사하여 prefix로 시작하지 않는 문자열이 있다면 false 반환
    for (let i = 1; i < strs.length; i++) {
        if (!strs[i].startsWith(prefix)) {
            return false;
        }
    }
    // 모든 문자열에서 공통 접두사가 존재하면 true 반환
    return true;
}
