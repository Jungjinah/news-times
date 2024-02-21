const API_KEY = "f3f9f252f54844c1bbf11778f355b084";

//async : 비동기함수
//await : 기다려줘!(일시정지)

//await을 만나는 순간 async()은 멈춤! 다른일 먼저 하고 callStack이 비었을 때, Task Queue에 있는 것을 실행함!
// => async 을 통해서 비동기함수를 만들 수 있고, await 함수를 통해 시간이 좀 걸리는 것을 기다려줄 수 있다

//My Code
/*
async function getNews() {
    const url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`);
    //URL을 사용하면서 필요한 함수를 수작업으로 하는 것이 아니라 JS에서 만듬 (URL : 인스턴스)
    // => URL 에 필요한 함수와 변수들을 제공함
    // => 유용한 객체를 생성해줌!!
    // console.log("uuu", url);
    const response = await fetch(url);
    const data = await response.json();   //json : 파일형식 (객체처럼 생긴 텍스트) ex)이미지 : jpeg,jpg ...
    // console.log("rrr", response);
    //pending : 아직 데이터가 오지 않았다! (결과가 아직 오지 않았다)

    newsList = data.articles;

    render();
};

getNews();
for (let i=0; i < 20; i++) {
    console.log("after", i);
}
*/

///////////////////////////////////////////////////////////////////

//noo-na Code
//async과 await 함수를 쓰면서 pending이 사라짐!
let newsList = [];
const getNews = async() => {
    // noona newsAPI (API KEY X)
    let q = "";
    let page = 1;
    let pageSize = 20;
    let category = "technology";
    const url = new URL(`https://jina-news-times.netlify.app/top-headlines?country=kr`);
    const response = await fetch(url);
    const data = await response.json();   //json : 파일형식 (객체처럼 생긴 텍스트) ex)이미지 : jpeg,jpg ...
    newsList = data.articles;
    
    console.log("Ddd", newsList);

    render();
};


//뉴스 촤라락 보여주기
const render = () => {
    //todoList는 for문을 사용해서 만듬
    //이번엔 es6 사용~
    const newsHTML = newsList.map(news => `<div class="row news">   <!-- class="row" -> 부트스트랩에서 한줄로 정렬해줌 -->
        <div class="col-lg-4">
            <img class="news-img-size" src="${news.urlToImage}" onerror="this.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJtl9ESKRo5HZYiroYXDvviVXOJoemv-q-brJeHTXsf_ed3lIejzMxBmRibg&s';"/>
        </div>

        <div class="col-lg-8">
            <h2>
                ${news.title ? news.title : '제목없음'}
            </h2>
            <p>
                ${news.description ? news.description : '내용없음'}
            </p>
            <div>
                ${news.source.name ? news.source.name : 'no source'} * ${moment(news.publishedAt, "YYYYMMDD").fromNow()};
            </div>
        </div>
    </div>`
    ).join("");
    document.getElementById("news-board").innerHTML = newsHTML; //1. 반복해서 나오는 구문을 감싸고 있는 main-board를 갖고온다.
}

const imageError = (imageUrl) => {
    let image = new Image();
    image.src = imageUrl;

    if(!image.src.complete) {
        return false
    } else {
        return true
    }
}

//news api 가져오기
getNews();