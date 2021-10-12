let container = document.querySelector('.container');
let btn = document.getElementById('spin');
let number = 0;

//function that generates shuffled array [Fisher-Yates Shuffle]
function shuffle(array) {
  let i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

//storing the shuffled array in the randomnumbers array
let randomNumbers = shuffle([1, 2, 3, 4, 5, 6, 7, 8]);

btn.onclick = function () {
  //function that generates degree using 'if..else'
  function getDegree(number) {
    let deg;
    if (number <= 1) {
      degree = 0 + 360;
    } else if (number <= 2) {
      degree = 45 + 720;
    } else if (number <= 3) {
      degree = 90 + 1080;
    } else if (number <= 4) {
      degree = 135 + 1440;
    } else if (number <= 5) {
      degree = 180 + 1800;
    } else if (number <= 6) {
      degree = 225 + 2160;
    } else if (number <= 7) {
      degree = 270 + 2520;
    } else {
      degree = 315 + 2880;
    }
    return degree;
  }

  //function that generates degree using 'switch'
  // function getDegree(number) {
  //   switch (number) {
  //     case 1:
  //       return 360;
  //       break;
  //     case 2:
  //       return 765;
  //       break;
  //     case 3:
  //       return 1170;
  //       break;
  //     case 4:
  //       return 1575;
  //       break;
  //     case 5:
  //       return 1980;
  //       break;
  //     case 6:
  //       return 2385;
  //       break;
  //     case 7:
  //       return 2790;
  //       break;
  //     case 8:
  //       return 3195;
  //       break;
  //     default:
  //       return 0;
  //   }
  // }

  //pops out a randomnumber(last item) from the shuffled array
  let randomNumber = randomNumbers.pop();

  //gets degree based on the number extracted from the shuffled array
  degree = getDegree(randomNumber);

  //rotates the wheel based on the degree
  container.style.transform = 'rotate(' + degree + 'deg)';
};
