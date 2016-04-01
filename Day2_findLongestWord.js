function findLongestWord(str) {
    var wordsBySplit = str.split(' ');
    console.log(wordsBySplit);
    var longestStr = '';
    for (var i = 0; i < wordsBySplit.length; i++) {
        if (longestStr.length < wordsBySplit[i].length) {
            longestStr = wordsBySplit[i]; // change the longestStr with longer words in wordsBySplit array, if the longer word exists to find the longest word in the given sentence.
        }
    }
    return longestStr.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
