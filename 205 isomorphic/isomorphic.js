



var isIsomorphic = function (s, t) {
    //check if the length of each string is same. If not they are not isomorphic.
    if (s.length !== t.length) return false;
    //create two different two objects for each strings' characters
    let mapS = {};
    let mapT = {};

    for (let i = 0; i < s.length; i++) {
        //s = "foo" t="bar"
        let charS = s[i]; // i=0 charS = 'f' 
        let charT = t[i]; // i=0 charT = 'b'

        if (!mapS[charS]) { // case i=0. first iteration.
            mapS[charS] = charT; //mapping
        } else if (mapS[charS] !== charT) {
            return false;
        }
        console.log(mapS)

        if (!mapT[charT]) {
            mapT[charT] = charS;
        } else if (mapT[charT] !== charS) {
            return false;
        }
        console.log(mapT)
    }


    return true;
};

console.log(isIsomorphic("eeeeefee", "daaaaaaa"))


