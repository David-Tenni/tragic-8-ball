const fortunes = ["You will live a long life, unfortunately it will be in a coma", "", "", "", "", "", "", ""];




const tellFortune = () => {
  console.log(fortunes[0]);
}


const fortuneButton = document.getElementById("fortune-button");
fortuneButton.addEventListener("click", tellFortune())





