function verificar (){
    var idad= Number(nascimento.value)
    var sex = window.document.getElementsByName('radsex')
    var bot = window.document.getElementById('botão')
    var res= window.document.getElementById('res')
    var data = new Date()
    var ano = data.getFullYear()
    var r = ano - idad
  if (sex[0].checked && r<=3) {
            res.innerHTML= `<img src="babyboy.png">Bebe do sexo masculino com ${r} anos</img>`
  } else if (sex[0].checked && r >=3 && r< 12){
            res.innerHTML= `<img src="kidboy.png">Criança do sexo masculino com ${r} anos.</img>`
  } else if (sex[0].checked &&  r>= 12 && r <= 18) {
            res.innerHTML= `<img src="teenboy.png">Adolescente do sexo masculino com ${r} anos.</img>`
  } else if (sex[0].checked && r> 18 && r < 60 ){
            res.innerHTML= `<img src="men.png">adulto com ${r} anos</img>`
  } else if(sex[0].checked && r > 60) {
        res.innerHTML= `<img src="idoso.png">idoso com ${r} anos</img>`
  } else if (sex[1].checked && r <=3) {
            res.innerHTML= `<img src="babygirl.png">Bebe do sexo feminino com ${r} anos.</img>`
  } else if (sex[1].checked && r >=3 && r< 12){
            res.innerHTML= `<img src="kidgirl.png"> Criança do sexo feminino com ${r} anos.</img>`
  } else if (sex[1].checked && r>= 12 && r <= 18) {
            res.innerHTML= `<img src="teengirl.png">Adolescente do sexo feminino com ${r} anos.</img>`
  } else if (sex[1].checked && r> 18 && r < 60) {
            res.innerHTML= `<img src="women.png">Adulta com ${r} anos.</img>`
  } else {
            res.innerHTML=`<img src="idosa.png">Idosa com ${r} anos.</img>`
  }
            
    }
   

