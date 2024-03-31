const form = document.querySelector('form');
form.addEventListener('submit',function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');


  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `please give the height ${height}`;
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please give the weight ${weight}`;
  }else{
   const bmi = weight/((height * height)/10000).toFixed(2);
   //show the result
   results.innerHTML = `<span> ${bmi}</span>`;
  }

});
//BMI = weight (kg) / [height (m)]2
/* select form button(submit)=>submitted as post type or  the get type(info transfer to url, server) hence to stop this use eventsMethod()
when the values on the top is pass then it store empty value this usecase give empty value
const height = parseInt(document.querySelector('#height'),value)
*/
