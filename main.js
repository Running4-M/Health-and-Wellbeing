const obesity = document.querySelector('.obesity_js');
const pollution = document.querySelector('.pollution_js');
const diseases = document.querySelector('.diseases_js');

obesity.addEventListener("click", ()=> {
    window.location.href = "../Obesity/obesity.html";
});
pollution.addEventListener("click", ()=> {
    window.location.href = "../Pollution/pollution.html";
});
diseases.addEventListener("click", ()=> {
    window.location.href = "/Health-and-Wellbeing/Obesity/obesity.html";
});
