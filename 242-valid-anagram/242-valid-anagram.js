/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
//     check length if anagram or not
    if(s.length != t.length){
        return false;
    }
    
//     if length is different than do check the char match
    let st = [...s]
    st.sort();
    
    let tt = [...t]
    tt.sort();
    
    return JSON.stringify(st) === JSON.stringify(tt);
};