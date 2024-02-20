const API_KEY = "f3f9f252f54844c1bbf11778f355b084";

//async : 비동기함수
//await : 기다려줘!(일시정지)

//await을 만나는 순간 async()은 멈춤! 다른일 먼저 하고 callStack이 비었을 때, Task Queue에 있는 것을 실행함!
// => async 을 통해서 비동기함수를 만들 수 있고, await 함수를 통해 시간이 좀 걸리는 것을 기다려줄 수 있다

/*
async function getNews() {
    let url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    //URL을 사용하면서 필요한 함수를 수작업으로 하는 것이 아니라 JS에서 만듬 (URL : 인스턴스)
    // => URL 에 필요한 함수와 변수들을 제공함
    // => 유용한 객체를 생성해줌!!
    console.log("uuu", url);
    
    const response = await fetch(url);
    console.log("rrr", response);
    //pending : 아직 데이터가 오지 않았다! (결과가 아직 오지 않았다)
};

getNews();
for (let i=0; i < 20; i++) {
    console.log("after", i);
}
*/

///////////////////////////////////////////////////////////////////

//async과 await 함수를 쓰면서 pending이 사라짐!
let news = [];
const getNews = async() => {
    // noona newsAPI (API KEY X)
    let q = "";
    let page = 1;
    let pageSize = 20;
    let category = "technology";
    const url = new URL(`https://jina-news-times.netlify.app/top-headlines?country=kr`);
    
    // const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    const response = await fetch(url);
    const data = await response.json();   //json : 파일형식 (객체처럼 생긴 텍스트) ex)이미지 : jpeg,jpg ...
    news = data.articles;
    
    console.log("ddd", news);
};

getNews();