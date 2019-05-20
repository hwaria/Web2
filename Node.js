생활코딩 – Node.js

1.	수업소개
-	1990년 웹의 등장으로 종이에 있던 정보들이 다 웹페이지로 옮겨지기 시작함
-	웹사이트 소유자가 직접 html태그를 작성하고 수정하는 것이 힘들어지기 시작 -> 귀찮고 반복되는 html작성을 기계에게 시켜야겠다 생각
-	자바스크립트는 웹브라우저에서 유일하게 사용할 수 있는 독점적인 컴퓨터 프로그래밍 언어였으나 웹 브라우저에서만 갇혀있었음
-	2008년 v8엔진을 기반으로 하는 node.js를 개발
-	Node.js: 자바스크립트를 이용해서 웹브라우저가 아닌 컴퓨터 자체를 제어 ->
-	개발자들은 이미 익숙한 자바스크립트를 이용해서 웹페이지를 자동으로 생성하는 웹 애플리케이션을 만들 수 있게 됨, 따라서 개발자들은 컨텐츠를 생산하는 창의적인 일에 집중하면 됨 

2.	수업의 목적
: 수업을 통해서 완성할 웹 애플리케이션이 어떤 기능이 있는지를 소개
-	웹사이트에는 많은 웹페이지가 있음: 각각의 웹페이지에 html태그를 바꿔야 할 경우? Node.js를 사용하면 template.js이라는 한 파일만 바꾸면 연관된 모든 페이지에서 html태그가 바뀜: 사용자가 어떤 페이지를 요청할때마다 Node.js을 이용해서 그 순간 웹페이지를 생성하기 때문 
-	또한 node.js를 이용해서 웹사이트에 방문한 사용자에게 컨텐츠의 읽기, 쓰기, 수정, 삭제 기능을 제공해줄 수 있음 

3.	설치
4.	공부 방법
-	자바스크립트 문법 -> node.js runtime 기능 -> 기능을 활용한 웹애플리케이션 제작
-	이미 자바스크립트 문법을 알고있다면 해당 동영상 넘겨도 됨 

5.	웹서버 만들기
-	Node.js.는 아파치같은 웹서버를 내장하고 있음 
-	Main.js(index.js)파일에다 아래 코드 붙여넣기 – 앞으로 쓰여진 코드에 대해서 공부할 것
var http = require("http");
var fs = require("fs");
var app = http.createServer(function(request, response) {
  var url = request.url;
  if (url == "/") {
    url = "/index.html";
  }
  if (url == "/favicon.ico") {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);
-	Console.log(__dirname + url); 을 해보면 메인 페이지에 있는 각각의 웹페이지를 클릭했을 때 그 파일이 있는 디렉토리의 주소와 파일 이름이 나옴. 나는 CodeSandbox 쓰고있으니 “/sandbox/src/1.html” 로 나옴
: 사용자가 요청할 때마다 자바스크립트를 통해서 우리가 읽어 들여야 할 파일을 만듦 – 그 후 노드가 그 경로에 해당되는 파일을 읽어내는 것(readFileSync)  
: response.end(‘egoing : ‘ + url); -> egoing : / 1.html.  즉, node.js는 response.end 안에 들어가는 데이터를 사용자에게 전송함. 프로그래밍적으로 사용자에게 전송할 데이터를 생성함

6.	JavaScript – Data type – Number & String
-	자바스크립트가 지원하는 데이터 타입 중 가장 중요한 number, string을 어떻게 표현하는지 보자
-	숫자는 있는 그대로, 문자열 표현할 때는 따옴표로 묶어줌  
-	유용한 문자열 관련 기능, 문자열의 길이를 알고 싶을 때는 .length

7.	JavaScript – 변수: 데이터에 이름을 붙이는 수단. 좋은 코드를 만들기 위한 방법인 중복의 제거를 위해 필요
-	A = 1;
-	Console.log(a); -> 1
: 이때 ‘=’는 대입 연산자로, 오른쪽의 값을 왼쪽에 있는 변수에 대입함 
-	변수를 만들 때는 var 을 붙이는 것이 좋음. 변수를 처음 설정 후 나중에 그 값을 바꿀 때는 다시 ‘var’을 쓸 필요 없음 
-	변수를 왜 쓰는가? 데이터에 이름을 붙임으로써 코드를 이해하기가 쉽고 가독성이 좋음. 또, 중복을 제거하는데 필수로 쓰임

8.	JavaScript – Template Literal: 여러 줄로 이루어진 문자열의 표현과 문자의 치환을 쉽게 할 수 있는 기능
-	여러 줄로 이루어진 문자열에서 줄바꿈을 할 경우 에러가 생김
-	줄을 바꿀때마다 역슬래쉬를 쓸 수 있지만 쓰면 코드상 줄바꿈이 되는 것이지 문자열에서 줄바꿈이 되는 것은 아님
-	역슬래쉬n (\n)을 쓰면 줄바꿈이 됨
-	기능은 하지만 변수를 쓰기 위해 산술 연산자를 쓰는 것이 불편하니까.. 최신 문법으로 ‘template literal’ 개발됨
-	Literal이란 정보를 표현하는 방법, 기호. Esc버튼 밑에 작은 따옴표 비슷하게 생긴 것을 씀 
var letter = `Dear ${name}    // 변수를 쓸 때는 달러{변수 이름}
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ${name} Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ${1+1} Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa egoing qui officia deserunt mollit anim id est laborum. ${name}`;
console.log(letter);

9.	URL의 이해
-	메인.js파일에서 각 링크는 각각의 정적인 페이지와 연결되어 있음
-	Http: 웹서버와 웹브라우저간 데이터를 주고 받기 위해서 만든 통신 규칙
-	Host(domain): 인터넷에 접속되어 있는 각각의 컴퓨터를 가리키는 주소
-	Port: 한 대의 컴퓨터에 여러 개의 서버가 있을 경우, 3000번 포트에 연결되어있는 서버와 통신
-	Path: 컴퓨터 안에 어떤 디렉토리의 어떤 파일인지 가리킴
-	Query string: 우리 수업에서 배울 것. 이 값을 변경하면 웹 서버에게 어떤 정보를 원하는지 정보를 전달할 수 있음. 시작은 물음표로 시작. 
 

10.	Node.js에서 url을 통해서 입력된 값을 사용하는 방법
-	http://localhost/?id=HTML
-	위 주소로 사용자가 웹애플리케이션 접속을 했을 때, 우리는 id값(쿼리스트링)이 무엇인가에 따라서 적당한 컨텐츠를 보여줘야함. 
var http = require("http");
var fs = require("fs");
var url = require(‘url’); // ‘url’이라는 모듈을 url이라는 변수를 통해서 사용할 것임
var app = http.createServer(function(request, response) {
var _url = request.url;
var queryData = url.parse(_url, true).query; // -> {id: ‘HTML’}
console.log(queryData.id); -> HTML
  if (_url == "/") {
    url = "/index.html";
  }
  if (_url == "/favicon.ico") {
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  response.end(queryData.id); //사용자가 접속한 url에 따라 적합한 웹페이지를 읽어주는 역할이었으므로, url에 입력된 값을 이용하여 해당 데이터를 전송
});
app.listen(3000);

-	url 안에 있는 값을 추출해야 함 - (parsing query string in node.js)
-	위에 코드 추가  
