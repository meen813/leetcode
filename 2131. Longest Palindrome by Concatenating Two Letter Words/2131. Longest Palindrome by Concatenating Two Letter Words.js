/**
 * @param {string[]} words - 입력받은 단어들을 저장한 배열
 * @return {number} - 회문 문자열을 만들 수 있는 최대 길이
 */
 var longestPalindrome = function (words) {
    // Initialize a variable to keep track of the answer.
    // 회문 문자열을 만들 수 있는 최대 길이를 저장할 변수 초기화
    let ans = 0;
    // Create a 2D array to store the count of each pair of characters.
    // 글자쌍의 개수를 저장하기 위한 2D 배열 생성
    const counter = Array.from({ length: 26 }, () => Array.from({ length: 26 }, () => 0));

    for (let i = 0; i < words.length; i++) {
        // 현재 단어를 가져옴
        const w = words[i];
        // Get the ASCII value of the first character of the word.
        // 단어의 첫 번째 글자의 아스키 코드 값을 가져옴
        const a = w.charCodeAt(0) - 'a'.charCodeAt(0);
        // Get the ASCII value of the second character of the word.
        // 단어의 두 번째 글자의 아스키 코드 값을 가져옴
        const b = w.charCodeAt(1) - 'a'.charCodeAt(0);
        if (counter[b][a]) {
            // 만약 글자쌍의 개수가 0이 아닌 경우, 회문 문자열을 만들 수 있으므로 4를 더해줌
            ans += 4;
            counter[b][a]--;
        } else {
            // 글자쌍의 개수가 0인 경우, 현재 글자쌍의 개수를 1 증가시킴
            counter[a][b]++;
        }
    }
    
    for (let i = 0; i < 26; i++) {
        // 글자쌍이 대칭인 경우(같은 알파벳으로 이루어진 경우), 회문 문자열을 만들 수 있으므로 2를 더해줌
        if (counter[i][i]) {
            ans += 2;
            break;
        }
    }
    // Return the final answer.
    // 최종적으로 만들어진 회문 문자열의 길이를 반환
    return ans;
};
