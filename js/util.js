const randomNumber = function (minCoordinate, maxCoordinate, countPoint = 0){
  if (minCoordinate >= 0 && maxCoordinate >= 0){
    if (minCoordinate < maxCoordinate){
      return  (Math.random() * (maxCoordinate - minCoordinate) + minCoordinate).toFixed(countPoint); // Формула взята из интернета
    }
    return (minCoordinate === maxCoordinate) ? minCoordinate : 'Error: Диапазон с такими значениями невозможен';
  }
  return 'Error: Диапазон не должен быть отрицательным';
};

const getRandomElementFromArray = function(array){
  const index = randomNumber(0, array.length - 1);
  return array[index];
};

function getRandomArray(array) {
  const lengthOfArray = randomNumber(1, array.length - 1);
  const newArray = [];
  while (newArray.length < lengthOfArray) {
    const indexOfElement = randomNumber(0, array.length - 1);
    const element = array[indexOfElement];
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}

getRandomElementFromArray();
getRandomArray();

export {randomNumber, getRandomArray, getRandomElementFromArray};
