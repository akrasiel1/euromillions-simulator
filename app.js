const mainNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', 
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
            '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];

const luckyStars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const paraMain = document.querySelector('.main-numbers');
const paraStars = document.querySelector('.lucky-stars');
const button = document.querySelector('.btn');


const luckyDraw = () => {
    let winningCombo = [];
    let starNums = [];
    while(winningCombo.length !== 5) {
        let randomNum = Math.floor((Math.random() * mainNums.length));
        if(!winningCombo.includes(mainNums[randomNum])) {
            winningCombo.push(mainNums[randomNum]);
        };
    };
    while(starNums.length !== 2) {
        let randomNum = Math.floor((Math.random() * luckyStars.length));
        if(!starNums.includes(luckyStars[randomNum])) {
            starNums.push(luckyStars[randomNum]);
        };
    };
    winningCombo.sort((a, b) => a - b);
    starNums.sort((a, b) => a - b);

    winningCombo = winningCombo.join(' - ');
    starNums = starNums.join(' - ');

    paraMain.textContent = `${winningCombo}`;
    paraStars.textContent = `Lucky stars: ${starNums}`;
}

button.addEventListener('click', luckyDraw);


