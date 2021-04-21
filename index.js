
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let shuffleId = document.getElementById('shuffle');
let sortId = document.getElementById('sort');
var shuffleFunc = (function () {
    let getClass = document.getElementById('mainWrapper');
    const arrangeArray = (arr) => {
        getClass.innerHTML = ''
        for (var i = 0; i < arr.length; i++) {
            var getClassName = Math.floor(Math.random() * 8)
            getClass.innerHTML += `<div class='container color-${getClassName}'> <p class='image-caption'>${list[i]}</p> </div>`
        }
    }

    const shuffle = (array, arrangeType) => {
        var randomNumber;
        if (arrangeType === 'sort') {
            randomNumber = array.sort();
        } else randomNumber = array.sort(() => Math.random() - 1);
        arrangeArray(randomNumber)
    }

    return {
        arrangeArray,
        shuffle
    }
})();


shuffleFunc.arrangeArray(list)
shuffleId.addEventListener('click', () => {
    shuffleFunc.shuffle(list, shuffleId)
})
sortId.addEventListener('click', () => {
    shuffleFunc.shuffle(list, sortId)
})

