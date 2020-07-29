/*
 * 배열 반복에 대한 추상화
 */

/* 명령형 프로그래밍 방식 */
const array = [1, 2, 3, 4, 5]
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

/* 선언형 프로그래밍 방식 */
import forEach from './lib/forEach.js'
import double from './lib/double.js'
forEach(array, console.log)
forEach(array, (el) => { console.log(double(el)) })

