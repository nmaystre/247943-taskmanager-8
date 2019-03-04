import appendElement from './appendElement';

const filterData = [
  {
    label: `all`,
    value: 22,
  },
  {
    label: `overdue`,
    value: 1,
  },
  {
    label: `today`,
    value: 5,
  },
  {
    label: `favorites`,
    value: 12,
  },
  {
    label: `repeating`,
    value: 12,
  },
  {
    label: `tags`,
    value: 2,
  },
  {
    label: `archive`,
    value: 0,
  },
];

const filtersContainer = document.querySelector(`.filter`);

const generateFilters = (iterations) => {
  for (let j = 0; j < iterations; j++) {
    const filterLabel = filterData[j].label;
    const filterValue = filterData[j].value;
    const templateFilter = `
    <input type="radio" id="filter__${filterLabel}" class="filter__input visually-hidden" name="filter" />
    <label for="filter__${filterLabel}" class="filter__label">${filterLabel} <span class="filter__${filterLabel}-count">${filterValue}</span></label>
    `;
    appendElement(filtersContainer, templateFilter);
  }
};

export {filterData, filtersContainer, generateFilters};
