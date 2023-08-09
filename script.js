let inputForm = document.querySelector(".inputForm");
let btnSubmit = document.querySelector(".submitBtn");

btnSubmit.addEventListener("click", (mouse) => {
    mouse.preventDefault();
    if(inputForm.value == "" || !(parseInt(inputForm.value) > 1 && parseInt(inputForm.value) < 1331)){
        alert("Enter a number from 2 to 1330");
    }else{
        updateData(inputForm.value);
        // console.log(inputForm.value);
        inputForm.value = "";
    }
});

document.addEventListener("keyup", (keyboard) => {
    if(keyboard.key == "Enter"){
        if(inputForm.value == "" || !(parseInt(inputForm.value) > 1 && parseInt(inputForm.value) < 1331)){
            alert("Enter a number from 2 to 1330");
        }else{
            updateData(inputForm.value);
            // console.log(inputForm.value);
            inputForm.value = "";
        }
    }
});

async function updateData(id){
    let numberID = id;

    await fetch(`https://api-thirukkural.vercel.app/api?num=${numberID}`)
    .then((response) => response.json())
    .then((data) => {
        let displayNumber = data.number;
        let chapterEnglish = data.chap_eng;
        let chapterTamil = data.chap_tam;
        let tamilLine1 = data.line1;
        let tamilLine2 = data.line2;
        let tamilExp = data.tam_exp;
        let english = data.eng;
        let englishExp = data.eng_exp;

        let displayNumberDOM = document.querySelector(".number");
        let chapterEnglishDOM = document.querySelector(".chapterEng");
        let chapterTamilDOM = document.querySelector(".chapterTam");
        let tamilLine1DOM = document.querySelector(".tamilLine1");
        let tamilLine2DOM = document.querySelector(".tamilLine2");
        let tamilExpDOM = document.querySelector(".tamilExp");
        let englishDOM = document.querySelector(".english");
        let englishExpDOM = document.querySelector(".englishExp");

        displayNumberDOM.innerHTML = displayNumber;
        chapterEnglishDOM.innerHTML = chapterEnglish;
        chapterTamilDOM.innerHTML = chapterTamil;
        tamilLine1DOM.innerHTML = tamilLine1;
        tamilLine2DOM.innerHTML = tamilLine2;
        tamilExpDOM.innerHTML = `<span class="fw-bold">Tamil Explanation : &nbsp;</span>${tamilExp}`;
        englishDOM.innerHTML = english;
        englishExpDOM.innerHTML = `<span class="fw-bold">English Explanation : &nbsp;</span>${englishExp}`;

    })
}