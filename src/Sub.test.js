// import {sum} from './Sum';

// 프로젝트 시작  yarn test && npm run test


// Sum 컴포넌트에서 가져온 sum 함수 
// export const sum = (a,b) => {
//     return a + b;
// }


// // it 또는 test를 사용할 수 있다.
// // it ('테스트 코드 이름', 테스트 코드)
// test ('sums 함수 테스트 용', () => {
//     // expect(sum(1,2)).toEqual(3); // 1,2를 넣었을때 값은 3
//     // expect(sum(2,2)).toEqual(4); // 2,2를 넣었을때 값을 4
//     // expect(sum(1,2)).toEqual(5); // 1,2를 넣었을때 값은 3

// })

// test('tow plus two is four', () => {
//     expect(2 + 2).toBe(4);
// });

// const getUser = (id,name) => {
//     return {
//         id : id,
//         name: name
//     }
// }

// test('return user obj', () => {
//     expect(getUser(1, 'JHoo')).toBe({
//         id:1,
//         name:'JHoo'
//     })
// })


// // null 값에 대한 체크 
// test('null', () => {
//     const n = null;
//     expect(n).toBeNull();
//     expect(n).toBeDefined();
//     expect(n).not.toBeUndefined();
//     expect(n).not.toBeTruthy();
//     expect(n).toBeFalsy();
// });

// test('zero', () => {
//     const z = 0;
//     expect(z).not.toBeNull();
//     expect(z).toBeDefined();
//     expect(z).not.toBeUndefined();
//     expect(z).not.toBeTruthy();
//     expect(z).toBeFalsy();
// });


test('숫자 0은 무슨값인가?', () => {
    expect(0).toBeFalsy()
    expect(0).toBeTruthy()
})