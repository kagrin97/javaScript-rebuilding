const corona = document.querySelector("#corona span")
const API_KEY2 = "lZXkVdO1ipMKfmeajxtR5QCNIU38v6c4W";
const url = `https://api.corona-19.kr/korea/beta/?serviceKey=${API_KEY2}`;

fetch(url)
    .then((response) => response.json())
    .then((data) => {
      corona.innerText = `Korea COVID-19 total count : ${data.korea.totalCnt}`;
    });