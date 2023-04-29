var longestPalindrome = function (words) {
    // store the word in a map with total count
    // 단어를 총 카운트와 함께 맵(map) 객체에 저장합니다.
    const map = {};
    let count = 0;

    for (const word of words) {
        if (!map[word]) {
            // 단어가 맵 객체에 존재하지 않는 경우, 카운트를 1로 설정합니다.
            map[word] = 1;
        } else {
            // 단어가 맵 객체에 존재하는 경우, 카운트를 1 증가시킵니다.
            map[word] += 1;
        }
    }

    let flag = false;
    for (const word of words) {
        const reverse = word[1] + word[0];
        if (word === reverse) {
            // 회문 문자열인 경우
            while (map[word] >= 2) {
                // 해당 단어가 2개 이상 존재할 경우, 2개씩 사용하여 회문 문자열을 만들 수 있습니다.
                map[word] -= 2;
                count += 4;
            }
            if (map[word] === 1 && !flag) {
                // 해당 단어가 1개만 존재하고, 이전에 회문 문자열을 만들 수 있는 단어가 등장하지 않았을 경우,
                // 해당 단어를 한 번만 사용하여 회문 문자열을 만들 수 있습니다.
                // 이후에는 더 이상 같은 단어로 회문 문자열을 만들 수 없도록 flag 변수를 true로 설정합니다.
                flag = true;
                count += 2;
                map[word] -= 1;
            }
            continue;
        }
        // 회문 문자열이 아닌 경우
        while (map[word] > 0 && map[reverse] > 0) {
            // 해당 단어와 뒤집은 단어(reverse)가 모두 존재하는 경우,
            // 두 개씩 사용하여 회문 문자열을 만들 수 있습니다.
            map[word] -= 1;
            map[reverse] -= 1;
            count += 4;
        }
    }

    return count;
};
