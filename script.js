var operation = document.getElementById('operation')
$(document).ready(()=>{
    $('form').on('submit',(e)=>{
        e.preventDefault();
        let fnum = $('#firstNumber').val()
        let snum = $('#secondNumber').val()
        if (operation.value == 'add') {
            let result = parseInt(fnum) + parseInt(snum)
            $('#result').text(result)
            $('#result').css({'color':'green'})
        }
        if (operation.value == 'sub') {
          let result = parseInt(fnum) - parseInt(snum)
          $('#result').text(result)
          $('#result').css({ 'color': 'red' })
        }
        if (operation.value == 'mul') {
          let result = parseInt(fnum) * parseInt(snum)
          $('#result').text(result)
          $('#result').css({ 'color': 'blue' })
        }
        if (operation.value == 'div') {
          let result = parseInt(fnum) / parseInt(snum)
          $('#result').text(result)
          $('#result').css({ 'color': 'brown' })
        }
    })
    $('#operation').on('input',()=>{
        if ($('#operation').val() == 'add') {
          document.querySelector('.operation').innerHTML = '+'
        } else if ($('#operation').val() == 'sub') {
          document.querySelector('.operation').innerHTML = '-'
        } else if ($('#operation').val() == 'mul') {
          document.querySelector('.operation').innerHTML = 'x'
        } else if ($('#operation').val() == 'div') {
          document.querySelector('.operation').innerHTML = '/'
        }
    })
})

