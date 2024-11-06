let dictionary = [];

function addWord() {
    let word = document.getElementById('input').value
    let existingWord = 0
    for (let i = 0; i < dictionary.length; ++i) {
        if (dictionary[i] === word) {
            existingWord = 1
            break
        }
    }
    if (existingWord === 0 && word != 0) {
        dictionary.push(word)
        alert("Added!")
    } else if (word != 0) {
        alert("This word is already added!")
    }
}

function searchWord() {
    let word = document.getElementById('input').value
    let existingWord = 0
    for (let i = 0; i < dictionary.length; ++i) {
        if (dictionary[i] === word) {
            existingWord = 1
            break
        }
    }
    if (existingWord === 1) {
        alert("Word found!")
    } else {
        alert("Word not found!")
    }
}