import {filterData, filtersContainer, generateFilters} from './generateFilters';
import {generateCards, cardsContainer} from './generateCards';
import {getRandomNumber} from './utils';

generateFilters(filterData.length);
generateCards(7);

filtersContainer.addEventListener(`click`, (evt) => {
  if (evt.target.classList.contains(`filter__label`)) {
    evt.stopPropagation();
    const randomNumber = getRandomNumber(0, 10);
    cardsContainer.innerHTML = ``;
    generateCards(randomNumber);
  }
});
