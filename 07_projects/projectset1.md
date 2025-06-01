# Project related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( function(button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e)
    console.log(e.target)
    switch(e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id
        break;
      case 'white':
        body.style.backgroundColor = e.target.id
        break;  
      case 'blue':
          body.style.backgroundColor = e.target.id
          break;
      case 'yellow':
          body.style.backgroundColor = e.target.id
          break;  
    }
  })
})
```
## Project 2

```
const form = document.querySelector('form');
// this use case will give you empty values
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    // show the result
    if(bmi<18.6) {
        result.innerHTML = `<span>${bmi}<br>Under Weight</span>`
    } else if (bmi>=18.6 && bmi<=24.9) {
        result.innerHTML = `<span>${bmi}<br>Normal Range</span>`
    } else if (bmi>24.9) {
         result.innerHTML = `<span>${bmi}<br>Overweight</span>`
    }
  }
});
```
