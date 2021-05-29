const randomNumber = function (startNumber, endNumber){
  if (startNumber>=0 && endNumber>=0){
    if(startNumber<endNumber){
      return  Math.round(startNumber - 0.5 + Math.random() * (endNumber - startNumber + 1)); // Формула взята из интернета
    }
    else if(startNumber === endNumber){return startNumber;}
    else{
      return 'Error: Начало диапазона меньше, чем его конец';
    }
  }
  else{
    return 'Error: Диапазон не должен быть отрицательным';
  }
};
randomNumber(2, 14);


const findByCoordinates = function (startNumber, endNumber, countPoint=0){
  if (startNumber>=0 && endNumber>=0){
    if(startNumber<endNumber){
      return  (startNumber - 0.5 + Math.random() * (endNumber - startNumber + 1)).toFixed(countPoint); // Формула взята из интернета
    }
    else if(startNumber === endNumber){return startNumber;}
    else{
      return 'Error: Начало диапазона меньше, чем его конец';
    }
  }
  else{
    return 'Error: Диапазон не должен быть отрицательным';
  }
};

findByCoordinates(10, 40, 3);
