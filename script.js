const container = document.getElementById('container')
const ratingBox = document.getElementById('rating-box')
const options = ratingBox.querySelectorAll('option')
const submitBtn = document.getElementById('submit-btn')
const warningText = document.getElementById('warning-text')
let ratingNumber = null;
//return data of selected option
ratingBox.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'OPTION') {
    ratingNumber = target.getAttribute('rating-data');
  }
});
for (const option of options) {
  option.addEventListener('click', () => {
    //Reset all changs
    const alloptions = document.getElementsByClassName('the-rating-Number')
    for (let i = 0; i < alloptions.length; i++) {
      alloptions[i].style.color = ''
      alloptions[i].style.backgroundColor = ''

    };

    // Change styles of the selected option
    option.style.backgroundColor = 'var(--Orange)';
    option.style.color = '#fff';
    warningText.innerHTML = ''

  });
}
// pass the data and showing result card
submitBtn.addEventListener('click', () => {
  if (ratingNumber === null) {
    warningText.innerHTML = 'Please choose one of the rating numbers';
  } else if (ratingNumber !== null) {

    setTimeout(() => {
      container.style.opacity = '0';
      setTimeout(() => {
        container.style.alignItems = 'center'
        container.innerHTML = `<img class="illustration-thank" src="images/illustration-thank-you.svg">
        <div class="rating-result-box">
          <p>You selected ${ratingNumber} out of 5</p>
        </div>
        <h2>Thank you!</h2>
        <p class="thank-paragraph">We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>`;
        container.style.opacity = '1';
      }, 400);
    }, 50);
  }
});
