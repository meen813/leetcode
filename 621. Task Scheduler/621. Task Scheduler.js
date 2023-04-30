var leastInterval = function(tasks, n) {
    // 태스크 별 등장 횟수를 저장하는 Map 생성
    const freqMap = new Map();
    for (let task of tasks) {
        freqMap.set(task, freqMap.get(task) + 1 || 1);
    }

    // 등장 횟수를 기준으로 내림차순 정렬한 태스크 배열 생성
    const sortedTasks = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

    // 가장 많이 등장한 태스크의 등장 횟수
    const maxFreq = sortedTasks[0][1];

    // 가장 많이 등장한 태스크와 동일한 등장 횟수를 가지는 태스크 수 세기
    let sameFreqCount = 1;
    for (let i = 1; i < sortedTasks.length; i++) {
        if (sortedTasks[i][1] === maxFreq) {
            sameFreqCount++;
        } else {
            break;
        }
    }

    // (가장 많이 등장한 태스크와 동일한 등장 횟수를 가지는 태스크 수 - 1) * (n + 1) + 가장 많이 등장한 태스크와 동일한 등장 횟수를 가지지 않는 태스크 수
    return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + sameFreqCount);
};
