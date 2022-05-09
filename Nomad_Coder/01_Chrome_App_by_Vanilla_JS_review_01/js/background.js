const backgroundContainer = document.querySelector('body');

const randomNum = Math.floor(Math.random()*26)+1;
const imgText = `img/${randomNum}.jpg`;
backgroundContainer.style.backgroundImage = 'url('+imgText+')';
backgroundContainer.style.backgroundSize = 'cover';
backgroundContainer.style.backgroundPosition = 'center top';
console.log(imgText);


// 문제점
// 1. 백그라운드로 쓰면 사진별 사이즈가 다르기에 통일이 필요
// 2. 그 사진 또한 한번만 나왔으면 좋겠음
// 3. 사진의 사이즈가 브라우저에 꽉 채워졌으면 좋겠는데 이게 어떤 PC환경이던 동일한 비율?로 나왔으면 좋겠음.

// 의문점
// 굳이 backgroundImage를 써야할지..??