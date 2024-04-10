const billInput = document.querySelector('#bill-input');
const peopleInput = document.querySelector('#people-input');
const tipsContainer = document.querySelector('.card__tip-container');

const resetButton = document.querySelector('.card__reset-button');

let tipPercentSelected;

tipsContainer.addEventListener('click', (evt) => {
      // evt.preventDefault();
      const stringWithPercent = evt.target.innerText;
      tipPercentSelected = stringWithPercent.substring(0, stringWithPercent.length - 1);
      console.log(tipPercentSelected);
});

class InputData {
  constructor(billInput, peopleInput, tipSelect) {
    this.billInput = billInput;
    this.peopleInput = peopleInput;
    this.tipSelect = tipSelect;
  }
  set newBillValue(billInput) {
    this.billInput = billInput;
  }
  set newPeopleValue(peopleValue) {
    this.peopleInput = peopleValue;
  }
  formIsValid(billInput = this.billInput, peopleInput = this.peopleInput) {
    if (billInput.length > 0 && peopleInput.length > 0) {
      return true;
    } else {
      return false;
    }
  }
}

function buttonToggler(objData) {
    resetButton.disabled = !objData.formIsValid();
}

const inputDataObj = new InputData(billInput.value, peopleInput.value, +tipPercentSelected);

billInput.addEventListener('input', (evt) => {
  inputDataObj.newBillValue = evt.target.value;
  buttonToggler(inputDataObj);
});
peopleInput.addEventListener('input', (evt) => {
  inputDataObj.newPeopleValue = evt.target.value;
  buttonToggler(inputDataObj);
});