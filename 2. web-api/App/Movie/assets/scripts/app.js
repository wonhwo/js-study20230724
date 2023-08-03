// 모달 엘리먼트
const $addMovieModal = document.getElementById("add-modal");
const $deleteMovieModal = document.getElementById('delete-modal');

// 영화 추가 버튼
const $addMovieButton = document.querySelector("header button");
const $backdrop = document.getElementById("backdrop");
const $cancelAddMovieButton = $addMovieModal.querySelector(".btn--passive");

// 영화 추가 모달안에 있는 확인, 취소버튼
const $confirmAddMovieButton = $cancelAddMovieButton.nextElementSibling;
const $userInputs = [
  ...$addMovieModal.querySelectorAll("input"),
];

// 영화 추가 모달 안에 있는 입력엘리먼트들
const [$titleInput, $imgUrlInput, $ratingInput] = $userInputs;
const $entryTextSection = document.getElementById('entry-text');

const CLASS_VISIBLE = 'visible';
// ==== 이벤트 핸들러 및 이벤트 바인딩 ===//

// 영화 추가 모달창을 띄우는 핸들러
const showMovieModalHandler = e=>{
    $addMovieModal.classList.add(CLASS_VISIBLE);
    $backdrop.classList.add(CLASS_VISIBLE);
};

const closeAddModal = ()=>{
    $backdrop.classList.remove(CLASS_VISIBLE);
    $addMovieModal.classList.remove(CLASS_VISIBLE);

}

// 백드롭 영역을 클릭하면 모달이 닫히는 핸들러
const backdropHandler=e=>{
    closeAddModal();
};

// 영화 추가 모달창의 취소버튼을 누르면 모달이 닫히는 핸들러
const closeMovieModalHandler = e=>{
    closeAddModal();
};
// Add movie버튼 클릭이벤트
$addMovieButton.addEventListener('click',showMovieModalHandler);

// backdrop영역 클릭이벤트
$backdrop.addEventListener('click',backdropHandler);

// Add Movie모달 취소버튼 클릭이벤트
$cancelAddMovieButton.addEventListener('click',closeMovieModalHandler);

