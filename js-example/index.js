// function A() {
//   console.log(`A: ${B(200)}`)
//   C()
// }
//
// function B(num) {
//   console.log('B')
//   return num * 10000
// }
//
// function C() {
//   console.log('C')
// }
//
// A()

// const count = () => {
//   console.log('C')
// };
//
// const nbFor = (max, load, block) => {
//   let i = 0;
//   const f = time => {
//     let curr = load;
//     while(curr-- && i < max) {
//       block();
//       i++;
//     }
//     if(i < max - 1) requestAnimationFrame(f);
//   };
//   requestAnimationFrame(f);
// };
//
// nbFor(10000, 100, count);

const count = (i) => {console.log('C')};
for(let i = 0; i < 10000; i++) count(i);