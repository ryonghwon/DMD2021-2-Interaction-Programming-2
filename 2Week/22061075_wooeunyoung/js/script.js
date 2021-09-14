/*
문제 풀이.
*/

/*
Quest 1.
1. selectors 라는 이름을 가진 객체를 생성합니다.
2. number 속성을 갖고 있으며 그 값은 2 (number type) 입니다.
3. string 속성을 추가하고 빈 문자열 ‘ ’ 을 할당합니다.
4. selectors 객체에 dom 속성을 추가하고, ‘header’ 문자열 원소값을 가진 배열을 할당합니다.
5. selectors 객체의 dom 속성 배열에 ‘main’, ‘footer’ 라는 문자열을 ‘header’ 원소의 뒤에 순서대로 추가합니다.
6. selectors 객체의 string 속성을 삭제합니다.
7. console.log 메서드를 이용해서 selectors 객체를 출력합니다.
*/
// Answer 1.

// 1. selectors 라는 이름을 가진 객체를 생성합니다.
var selectors=new Object();
// 2. number 속성을 갖고 있으며 그 값은 2 (number type) 입니다.
selectors = {number: 2}; 
// 3. string 속성을 추가하고 빈 문자열 ‘ ’ 을 할당합니다.
selectors.string = ' ';
// 4. selectors 객체에 dom 속성을 추가하고, ‘header’ 문자열 원소값을 가진 배열을 할당합니다.
selectors.dom = ['header'];
// 5. selectors 객체의 dom 속성 배열에 ‘main’, ‘footer’ 라는 문자열을 ‘header’ 원소의 뒤에 순서대로 추가합니다.
selectors.dom.push('main');
selectors.dom.push('footer');
// 6. selectors 객체의 string 속성을 삭제합니다.
delete selectors.string;
// 7. console.log 메서드를 이용해서 selectors 객체를 출력합니다.
console.log(selectors);

/*
Quest 2.
1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
3. console.log 메서드를 이용해서 cars 를 출력합니다.
*/
// Answer 2.

// 1. var cars = [‘Hyundai’, ‘Kia’, ‘Samsung’, ‘GM’]; 배열을 선언하고 값을 할당합니다.
var cars=['Hyundai', 'Kia', 'Samsung', "GM"];
// 2. cars 배열 문자열 원소를 역순으로 출력하는 반복문을 작성합니다.
for(let i=cars.length-1; i >= 0; i--) {
    cars.push(cars[i]);
}
cars.splice(0, 4);
// 3. console.log 메서드를 이용해서 cars 를 출력합니다.
console.log(cars);

/*
Quest 3.
1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
*/
// Answer 3.

// 1. var orders = { name : [‘본인 이름’], coffee : [‘아메리카노’, ‘에스프레소’, ‘카페라떼’] }; 객체를 선언하고 값을 할당합니다.
var orders = { 
    name: ['우은영'], 
    coffee: ['아메리카노', '에스프레소', '카페라떼']
};
// 2. orders 객체의 coffee 속성 배열이 가지는 원소들을 반복문을 이용하여 (3) 의 문자열로 console.log 메서드를 이용해서 출력합니다.
const getOrder = () => {
    for(i = 0; i < orders.coffee.length; i++) {
        console.log(orders.name[0] + ' 님, 주문하신 ' + orders.coffee[i] + ' 1잔 나왔습니다.')
    }
}
// 3. 문자열 : “name 님, 주문하신 coffee 1잔 나왔습니다.”
getOrder();

/*
Quest 4.
1. 객체, 배열, 반복문, 함수 등을 이용하여 자기 소개를 하는 문자열을 출력합니다.
2. 자신의 소개를 합니다.
*/
// Answer 4.

var myself = {
    name : ['우은영'],
    text : ['간식을'],
    type : ['음료', '간식', '과자'],
    snack : ['콜라', '젤리', '빼빼로']
};



const introduce = () => {
    var favorite;
    var sum = `안녕하세요! 저의 이름은 ${myself.name}이고, 제가 좋아하는 ${myself.text} 소개하겠습니다. `;
        for(i=0; i < myself.type.length; ++i) {
            favorite = '제가 좋아하는 ' + myself.type[i] + '은(는) ' + myself.snack[i] + '입니다. ';
            sum += favorite;
        }
    console.log(sum + '감사합니다!');
};
introduce();   
