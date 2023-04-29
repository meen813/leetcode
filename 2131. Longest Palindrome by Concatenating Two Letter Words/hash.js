function longestPalindrome(words) {
    let m = new Map();
    let unpaired = 0;
    let ans = 0;

    for (let w of words) {
        if (!m.has(w)) m.set(w, 0);

        if (w.charAt(0) === w.charAt(1)) {
            if (m.get(w) > 0) {
                unpaired--;
                m.set(w, m.get(w) - 1);
                ans += 4;
            } else {
                m.set(w, m.get(w) + 1);
                unpaired++;
            }
        } else {
            let rev = w.charAt(1) + w.charAt(0);
            if (m.has(rev) && m.get(rev) > 0) {
                ans += 4;
                m.set(rev, m.get(rev) - 1);
            } else {
                m.set(w, m.get(w) + 1);
            }
        }
    }

    if (unpaired > 0) ans += 2;
    return ans;
}
