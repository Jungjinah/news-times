//Memory Heap : 두서 없이 코드를 저장하는 것
//Call Stack(:자료형) : 코드를 실행하는 것 

//동기적인 프로그램 : 순서대로 실행
//비동기적인 프로그램 : 순서대로 아닌 상황에 따라 달라짐 ex) setTimeout() 함수를 실행하는 경우

function test () {
    console.log(1);
    console.log(3);
    console.log(5);
}

// test();

console.log(1);
setTimeout( () => console.log(3), 5000);
console.log(5);

