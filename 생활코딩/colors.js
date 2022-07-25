var Links = {
  setColor:function(color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
  }
}
}
var Body = {
  setColor:function(color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

      Links.setColor('powderblue');
  } else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

Links.setColor('blue');
      }
  }

/*
JavaScript! 사용자와 상호작용
동적인 언어, 계산기능 또한 가능; html과의 차이
<script> 태그
글씨 출력 -> document.write();
<input>태그 onclick, onchange, onkeydown
ex -> <input type="text" onchange="alert('changed')">=

콘솔의 이용
조건문
배열과 반복문
length는 개수를 센다
0부터 세기 시작, var(변수) 이용
함수
함수는 만들기 나름이다.
function 함수이름(){} 형태
객체
document.write도 객체의 한 형태였다.
*/
