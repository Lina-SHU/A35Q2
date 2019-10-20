(function () {

  //   write your code here
  //variables  
  const form = document.forms[0]
  const colorRshow = document.getElementById('Rcolor')
  const colorGshow = document.getElementById('Gcolor')
  const colorBshow = document.getElementById('Bcolor')

  const red = document.querySelector('.redColor')
  const green = document.querySelector('.greenColor')
  const blue = document.querySelector('.blueColor')
  const hex = document.querySelector('.hexColor')

  //function hex
  function toHEX(r, g, b){
    //if value less than 0
    let red0 = ('0' + r.toString(16)).slice(-2)
    let green0 = ('0' + g.toString(16)).slice(-2)
    let blue0 = ('0' + b.toString(16)).slice(-2)
    return `#${red0}${green0}${blue0}`;
  }

  //set RGB color
  colorRshow.addEventListener('input', function (colorR) {
    let input = event.target.value;
    red.setAttribute("style", `width:30px;height:30px;border-radius: 5px;background-color:rgb(${input},0,0)`)
  })
  colorGshow.addEventListener('input', function (colorR) {
    let input = event.target.value;
    green.setAttribute("style", `width:30px;height:30px;border-radius: 5px;background-color:rgb(0,${input},0)`)
  })
  colorBshow.addEventListener('input', function (colorR) {
    let input = event.target.value;
    blue.setAttribute("style", `width:30px;height:30px;border-radius: 5px;background-color:rgb(0,0,${input})`)
  })


  form.addEventListener('submit', function (event) {
    event.preventDefault()
    //rgb can't be empty
    if ( colorRshow.value !='' && colorGshow.value !='' && colorBshow.value !='') {
      let hexCode = toHEX(Number(colorRshow.value), Number(colorGshow.value), Number(colorBshow.value));
      document.getElementById("HEXcolor").value = hexCode;
      hex.setAttribute("style", `width:100px;height:100px;background-color:${hexCode}`);
    } else {
      alert('all of RGB should give one value.');
    }
  })

})()