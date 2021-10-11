let container = document.querySelector('.container');
let btn = document.getElementById('spin');
let number = 0;

btn.onclick = function () {
  //function that generates degree using 'if..else'
  // function getDegree(number) {
  //   let deg;
  //   if (number <= 1) {
  //     degree = 0;
  //   } else if (number <= 2) {
  //     degree = 45;
  //   } else if (number <= 3) {
  //     degree = 90;
  //   } else if (number <= 4) {
  //     degree = 135;
  //   } else if (number <= 5) {
  //     degree = 180;
  //   } else if (number <= 6) {
  //     degree = 225;
  //   } else if (number <= 7) {
  //     degree = 270;
  //   } else {
  //     degree = 315;
  //   }
  //   return degree;
  // }

  //function that generates degree using 'switch'
  function getDegree(number) {
    switch (number) {
      case 1:
        return 360;
        break;
      case 2:
        return 765;
        break;
      case 3:
        return 1125;
        break;
      case 4:
        return 1485;
        break;
      case 5:
        return 1980;
        break;
      case 6:
        return 2385;
        break;
      case 7:
        return 2745;
        break;
      case 8:
        return 3195;
        break;
      default:
        return 0;
    }
  }

  //generates random number between 1 to 8 (inclusive)
  let number = Math.floor(Math.random() * 8 + 1);

  //gets degree based on the random number generated
  degree = getDegree(number);

  //rotates the wheel based on the degree
  container.style.transform = 'rotate(' + degree + 'deg)';
};
