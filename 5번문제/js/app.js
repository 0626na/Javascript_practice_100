const minusBtn = document.querySelector(".prevBtn");
const plusBtn = document.querySelector(".nextBtn");
const count = document.querySelector("#counter");

let countNumber = 0;

function countMinus()
{
    countNumber -= 1;
    if(countNumber<0)
    {
        count.style.color="red";
    }
    count.innerHTML=countNumber;
}

function countPlus()
{
    countNumber += 1;
    if(countNumber>=0)
    {
        count.style.color="black";
    }
    count.innerHTML=countNumber;
}

minusBtn.addEventListener("click",countMinus);
plusBtn.addEventListener("click",countPlus);