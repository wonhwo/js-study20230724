// 모달 엘리먼트
const $addMovieModal = document.getElementById("add-modal");
const $deleteMovieModal = document.getElementById("delete-modal");

// 영화 추가 버튼
const $addMovieButton = document.querySelector("header button");
const $backdrop = document.getElementById("backdrop");

// 영화 취소 수락 버튼
const $cancelButton = document.getElementById("delete-button");
const $successButton = document.getElementById("success-button");

// 영화 추가 모달안에 있는 확인, 취소버튼
const $cancelAddMovieButton = $addMovieModal.querySelector(".btn--passive");
const $confirmAddMovieButton = $cancelAddMovieButton.nextElementSibling;

// 영화 추가 모달 안에 있는 입력엘리먼트들
const $userInputs = [...$addMovieModal.querySelectorAll("input")];
const [$titleInput, $imgUrlInput, $ratingInput] = $userInputs;
const $entryTextSection = document.getElementById("entry-text");

// 엔트리 텍스트
const $entryText = document.getElementById("entry-text");
// 영화목록 ul태그
const $movieList = document.getElementById("movie-list");

// 삭제  모달
const $deleteModal = document.getElementById("delete-modal");

const CLASS_VISIBLE = "visible";
const CLASS_DLETE = "delete-modal";

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
// 삭제 모달을 여는 핸들러
const showDeleteModalHandler = () => {
  $deleteModal.classList.add(CLASS_DLETE);
  $backdrop.classList.add(CLASS_VISIBLE);
};
//   삭제 모달을 닫는 함수
const closeDeleteModalHandler = () => {
  $deleteModal.classList.remove(CLASS_DLETE);
  $backdrop.classList.remove(CLASS_VISIBLE);
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
    </div>`;

  // 삭제 클릭 이벤트
  $newMovie.onclick = (e) => {
    showDeleteModalHandler();
    const movieId = e.target.closest(".movie-element").dataset.movieId;
    console.log(movieId);
    const index = movies.findIndex((m) => m.id === movieId);
    console.log(`클릭 대상 인덱스: ${index}`);
    $successButton.addEventListener("click", () => {
      movies.splice(index, 1);
      e.target.closest(".movie-element").remove();
      closeDeleteModalHandler();
      console.log();
      if (movies.length === 0) {
        $entryText.classList.remove("delete-card");
      }
    });
  };

  $entryText.classList.add("delete-card");
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
  closeDeleteModalHandler();
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
// 취소 모델 취소버튼
$cancelButton.addEventListener("click", closeDeleteModalHandler);
