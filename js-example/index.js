// 콜스택(순차실행) 예제
const function2 = (x, y) => {
  return console.log(x + y)
}
const function1 = (a, b) => {
  function2(a, b)
}

function1(1, 2)


// Web Api 비동기 함수 예제
const function2 = (maxCount = 1, callback) => {
  let count = 0;
  const interval = setInterval(() => {
    if (count > maxCount) {
      callback();
      clearInterval(interval);
    }
    count++;
    console.log(`함수 ${count}번 실행됨`);
  }, 10);
}

const function1 = () => {
  console.log('콜스택 입장');
  function2(100, () => console.log('함수가 끝나면 나를 실행하시오'));
  console.log('콜스택 퇴장');
}

function1();
