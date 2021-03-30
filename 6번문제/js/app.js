const image = document.querySelector(".img-container");
const nextBtn = document.querySelector(".btn-right");
const previousBtn = document.querySelector(".btn-left");

const imgArray = ["contBcg-0.jpeg", "contBcg-1.jpeg", "contBcg-2.jpeg", "contBcg-3.jpeg", "contBcg-4.jpeg"];
let positionNumber=0;

function nextImage()
{
  
  if(positionNumber>=imgArray.length-1)
  {
    positionNumber=0;
  }
  else{
    positionNumber+=1;
  }

  image.style.background=`url(img/${imgArray[positionNumber]})`;

}

function previousImage()
{
  if(positionNumber<0)
  {
    positionNumber=imgArray.length-1;
  }
  else
  {
    positionNumber-=1;
  }
  image.style.background=`url(img/${imgArray[positionNumber]})`;
}

nextBtn.addEventListener("click",nextImage);
previousBtn.addEventListener("click",previousImage);