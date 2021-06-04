const findByCoordinates = function (minCoordinate, maxCoordinate, countPoint = 0){
  if (minCoordinate >= 0 && maxCoordinate >= 0){
    if (minCoordinate < maxCoordinate){
      return  (Math.random() * (maxCoordinate - minCoordinate) + minCoordinate).toFixed(countPoint); // Формула взята из интернета
    }
    return (minCoordinate === maxCoordinate) ? minCoordinate : 'Error: Диапазон с такими значениями невозможен';
  }
  return 'Error: Диапазон не должен быть отрицательным';
};
console.log(findByCoordinates(1,100));  // Функция для рандомного числа
console.log(findByCoordinates(1, 100, 2));
