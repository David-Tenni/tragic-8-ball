
main = () => {
    class TerribleEightBall {
      constructor(fortuneList) {
        this.name = "Terrible 8 Ball";
        this.fortunes = ["You will live a long life, unfortunately it will be in a coma", "", "", "", "", "", "", ""];
        this.drawLuckyNumbers();
      }
      tellFortune() {
        console.log(this.fortunes[0])
      }
    }
}