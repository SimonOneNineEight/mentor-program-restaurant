/* eslint no-alert: 0 */
const apiUrl = process.enc.API_KEY ||'https://simon198-lottery-back-end.herokuapp.com/'


const goLottery = () => {
  $.ajax({
    type: 'GET',
    url: `${apiUrl}lottery`,
    success: prize => {
      console.log(prize.imgUrl)
      $('.lottery__box').hide()
      $('.lottery__result').show()
      $('.lottery').css('background-image', `url(${String(prize.imgUrl)})`)
    },
    error: error => {
      console.log(error)
    }
  });
}

$('.go__lottery').click((e) => {
  goLottery();
});
