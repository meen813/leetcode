// 43. Multiply Strings
// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    // 두 숫자 중 하나라도 0이면 결과는 0이므로 바로 반환
    if (num1 === '0' || num2 === '0') return '0'

    // 입력 숫자의 길이와 결과 값을 저장할 배열 생성
    const m = num1.length, n = num2.length, res = new Array(m + n).fill(0)

    // num1과 num2를 각각 역순으로 순회하면서 곱셈 수행
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            // 현재 자릿수와 다음 자릿수의 인덱스 계산
            const p1 = i + j, p2 = i + j + 1
            // 현재 자릿수에서 곱한 값을 더한 후 일의 자리와 십의 자리 값을 계산
            let sum = res[p2] + Number(num1[i]) * Number(num2[j])
            res[p2] = sum % 10
            res[p1] += Math.floor(sum / 10)
        }
    }
    // 결과 배열의 첫 번째 자리가 0이면 제외하고 문자열로 변환 후 반환
    if (res[0] === 0) res.shift()
    return res.join('')
}
