/*
 * Pure Function의 정의가 무엇인가?
 * 1. 외부 데이터가 함수 내부 동작에 영향을 주지 않는다.
 * 2. 외부 데이터가 함수 내부 동작에 의해 영향을 받지 않는다.
 * 3. 같은 입력이라면 반드시 같은 결과값을 반환한다. 이 규칙을 통해서 Map과 같은 자료구조를 통해 반환값에 대한 캐시가 가능해진다.
 */

/* 해당 함수는 물건 가격에 대한 세금을 반환합니다. */
function calculateTax(price, taxRate) {
    return price * (taxRate / 100)
}

/* 해당 함수는 Number 값의 두배를 반환합니다. */
function double(value) {
    if (value !== Number(value)) throw new TypeError(value + ' is not a number')
    return (value * 2)
}

console.log(calculateTax(20000, 10)) // 2000
console.log(double(10)) // 20