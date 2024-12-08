/* 
This Christmas, you’ve been tasked with running an anagram quiz at 
the family gathering.

You have been given a list of anagrams, but you suspect that some 
of the anagram pairs might be incorrect.

Your job is to write a JavaScript function to loop through the array
and filter out any pairs that aren’t actually anagrams.

For this challenge, spaces will be ignored, so "Be The Helm" would 
be considered a valid anagram of "Bethlehem".
*/

let anagrams = [
    ["Can Assault", "Santa Claus"],
    ["Refreshed Erudite Londoner", "Rudolf the Red Nose Reindeer"],
    ["Frosty The Snowman", "Honesty Warms Front"],
    ["Drastic Charms", "Christmas Cards"],
    ["Congress Liar", "Carol Singers"],
    ["The Tin Glints", "Silent Night"],
    ["Be The Helm", "Betlehem"],
    ["Is Car Thieves", "Christmas Eve"]
];

function findAnagrams(array) {
    let notAnagrams = array.filter((item) => {
        let str1 = item[0].toLowerCase().split('').sort().join('').trim()
        let str2 = item[1].toLowerCase().split('').sort().join('').trim()
        if (str1 === str2) {
            return;
        } else {
            // console.log(`str1 ${str1} and str2 ${str2}`)
            return item;
        }
    })
    return notAnagrams
}


console.log(findAnagrams(anagrams)) //filter out  pairs that aren’t actually anagrams.


