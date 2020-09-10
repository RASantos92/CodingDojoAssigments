// Remove duplicate characters (case-sensitive) including punctuation. Keep only the last instance of each character. Given "Snaps! crackles! pops!", return "Snrackle ops!".

var deduped = ["Snaps! crackles! pops!"].filter(function (el, i, arr) {
    return arr.indexOf(el) === i;
});

console.log(deduped); // [ 1, 'a' ]

