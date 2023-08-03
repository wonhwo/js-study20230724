// 모달 엘리먼트
const $addMovieModal = document.getElementById("add-modal");
const $deleteMovieModal = document.getElementById("delete-modal");

// 영화 추가 버튼
const $addMovieButton = document.querySelector("header button");
const $backdrop = document.getElementById("backdrop");

// 영화 추가 모달안에 있는 확인, 취소버튼
const $cancelAddMovieButton = $addMovieModal.querySelector(".btn--passive");
const $confirmAddMovieButton = $cancelAddMovieButton.nextElementSibling;

// 영화 추가 모달 안에 있는 입력엘리먼트들
const $userInputs = [...$addMovieModal.querySelectorAll("input")];
const [$titleInput, $imgUrlInput, $ratingInput] = $userInputs;
const $entryTextSection = document.getElementById("entry-text");

// 영화목록 ul태그
const $movieList = document.getElementById("movie-list");

const CLASS_VISIBLE = "visible";

// 영화 정보 목록 배열
const movies = [];

// ===== 유틸함수, 일반함수 정의 ===== //

// 모든 인풋을 리셋하는 함수
const clearMovieModalInput = () => {
  $userInputs.forEach(($input) => ($input.value = ""));
};

// 영화추가모달을 닫는 함수
const closeAddModal = () => {
  $backdrop.classList.remove(CLASS_VISIBLE);
  $addMovieModal.classList.remove(CLASS_VISIBLE);
  clearMovieModalInput();
};

// 화면에 새로운 영화 정보를 렌더링하는 함수
const renderNewMovie = ({ id, title, image, rating }) => {
  const $newMovie = document.createElement("li");
  $newMovie.classList.add("movie-element");
  $newMovie.dataset.movieId = id;
  $newMovie.innerHTML = `
    <div class="movie-element__image">
      <img src="${image}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating} / 5</p>
    </div>
  `;

  //   삭제 진행 핸들러
  const deleteMovieHandler = (e) => {
    // 배열에서 영화 정보 지우기
    // 클릭한 태그 근처 li의 movie-id값 가져오깅
    const movieId = e.target.closest(".movie-element").dataset.movieId;
    console.log(movieId);

    // 배열에서 해당 아이디 값을 가진 객체를 찾기
    // 방법 1 (for문 노가다)
    // let index= -1;
    // for(let i = 0;i<movies.length;i++){
    //     if(movies[i].id===movieId){
    //         index=i;
    //         break;
    //     }
    // }

    // 방법 2
    // indexOf: 원시타입(숫자, 문자열)만 찾을 수 있당.
    // findIndex: 배열 고차함수
    const index = movies.findIndex((m) => m.id === movieId);
    console.log(`클릭 대상 인덱스: ${index}`);
    // id 값이 객체 배열에서 지우기<- 인덱스 값을 알아야 함.
    movies.splice(index, 1);

    // li지우기
    e.target.closest(".movie-element").remove();
  };
  // 삭제 클릭 이벤트
  $newMovie.addEventListener("click", deleteMovieHandler);

  $movieList.appendChild($newMovie);
};
// 영화 정보 입력란 검증
const validateMovieInput = ({ title, image, rating }) => {
  if (
    title.trim() === "" ||
    image.trim() === "" ||
    rating.trim() === "" ||
    +rating < 1 ||
    rating > 5
  ) {
    return false;
  }
  return true;
};

// =====  이벤트 핸들러 및 이벤트 바인딩 ===== //

// 영화 추가버튼 기능을 수행하는 핸들러
const addMovieHandler = (e) => {
  const titleValue = $titleInput.value; // 제목입력란값
  const imgUrlValue = $imgUrlInput.value; // 이미지경로
  const ratingValue = $ratingInput.value; // 평점입력값

  // 객체로 묶기
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imgUrlValue,
    rating: ratingValue,
  };

  //   검증
  if (!validateMovieInput(newMovie)) {
    alert(`입력값이 유효하지 않습니당.`);
    return;
  }
  // console.log(newMovie);
  movies.push(newMovie);
  console.log(movies);

  // 모달 닫기
  closeAddModal();
  // 화면에 입력한 영화정보 렌더링하기
  renderNewMovie(newMovie);
};

// 영화 추가 모달창을 띄우는 핸들러
const showMovieModalHandler = (e) => {
  $addMovieModal.classList.add(CLASS_VISIBLE);
  $backdrop.classList.add(CLASS_VISIBLE);
};

// 백드롭 영역을 클릭하면 모달이 닫히는 핸들러
const backdropHandler = (e) => {
  closeAddModal();
};
// 영화 추가 모달창의 취소버튼을 누르면 모달이 닫히는 핸들러
const closeMovieModalHandler = (e) => {
  closeAddModal();
};

// Add movie버튼 클릭이벤트
$addMovieButton.addEventListener("click", showMovieModalHandler);

// backdrop영역 클릭이벤트
$backdrop.addEventListener("click", backdropHandler);

// Add Movie모달 취소버튼 클릭이벤트
$cancelAddMovieButton.addEventListener("click", closeMovieModalHandler);

// Add Movie모달 추가버튼 클릭이벤트
$confirmAddMovieButton.addEventListener("click", addMovieHandler);
