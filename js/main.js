const randomNumber = function (minCoordinate, maxCoordinate, countPoint = 0){
  if (minCoordinate >= 0 && maxCoordinate >= 0){
    if (minCoordinate < maxCoordinate){
      return  (Math.random() * (maxCoordinate - minCoordinate) + minCoordinate).toFixed(countPoint); // Формула взята из интернета
    }
    return (minCoordinate === maxCoordinate) ? minCoordinate : 'Error: Диапазон с такими значениями невозможен';
  }
  return 'Error: Диапазон не должен быть отрицательным';
};

const TITLE = ['Удобное жилье', 'Лучшее расположение', 'Отличное место', 'Красивый вид', 'Спокойное проживание', 'Близко до метро'];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const DESCRIPTION = ['Отличный вариант за минимальную цену','Разумный минимум за хорошую цену',
  'Отличный выбор за минимальную цену','Идеальный выбор за эту цену','Отличный вариант за эту цену',
  'Хороший максимум за минимальную цену','Лучший минимум за хорошую цену','Отличный набор опций за минимальную цену',
  'Хороший вариант за лучшую цену','Лучший максимум за минимальную цену'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const lat = randomNumber(35.65000, 35.70000, 5);
const lng = randomNumber(139.70000, 139.80000, 5);

const createUser = function(index){
  return (index >= 10) ? `img/avatars/user${index}.png`: `img/avatars/user0${index}.png`;
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
const createOffer = function(){
  return {
    title: getRandomElementFromArray(TITLE),
    address: `${lat}, ${lng}`,
    price: randomNumber(1, 99999),
    type: getRandomElementFromArray(TYPE),
    rooms: randomNumber(1, 10),
    guests: randomNumber(0, 7),
    checkin: getRandomElementFromArray(CHECKIN),
    checkout: getRandomElementFromArray(CHECKOUT),
    features: getRandomArray(FEATURES),
    description: getRandomElementFromArray(DESCRIPTION),
    photos: getRandomArray(PHOTOS),
  };
};

const createLocation = function(){
  return{
    lat: lat,
    lng: lng,
  };
};

const createAd = function(amount){
  const ads = [];
  for(let index = 1; index <= amount; index++){
    const ad = {};
    ad.author = createUser(index);
    ad.offer = createOffer();
    ad.location = createLocation();
    ads.push(ad);
  }
  return ads;
};

console.log(createAd(10));
