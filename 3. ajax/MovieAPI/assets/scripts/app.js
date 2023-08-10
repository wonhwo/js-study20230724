const todosUl = document.querySelector(".todo-list");
const URL = "http://localhost:5000/todos";
const $addBtn = document.getElementById("add");
const $delBtn = document.querySelector(".remove");
const rmBtn = document.querySelector("li");

const fetchTodos = (url, method='GET', payload=null) => {
  const requestInit = {
    method: method,
    headers: { 'Content-Type': 'application/json' }
  };
  if (payload) requestInit.body = JSON.stringify(payload);

  return fetch(url, requestInit);
};
// get 렌더링
fetchTodos(URL)
  .then((res) => res.json())
  .then((todosList) => {
    const $todosTemplate = document.getElementById("single-post");
    todosList.forEach(({ id, text, done }) => {
      const $postLi = document.importNode($todosTemplate.content, true);
      $postLi.querySelector(".todo-list-item").dataset.id = id;
      $postLi.querySelector("span").textContent = text;

        // 체크박스 수정
        const $checkbox = $postLi.querySelector('.checkbox input[type=checkbox]');
        $checkbox.checked = done;
        done && $checkbox.parentNode.classList.add('checked');
        todosUl.appendChild($postLi);
    });
  });
//   post 추가
$addBtn.addEventListener("click", (e) => {
  const payload = {
    text: document.getElementById("todo-text").value,
    done: false,
  };

  fetchTodos(URL,'POST',payload)
  .then(res => {
    if (res.status === 200 || res.status === 201) {
      console.log('등록 성공!');
    } else {
      console.log('등록 실패!');
    }
  });
});
// delete 삭제
const buttonHandler = (e) => {
  const id = e.target.closest(".todo-list-item").dataset.id;
  // 삭제
  if (e.target.matches(".lnr-cross-circle")) {

    fetchTodos(`${URL}/${id}`,"DELETE")
    .then((res) => {
      if (res.status === 200) {
        alert("삭제 성공!");
      } else {
        alert("삭제 실패!");
      }
    });
  }
  // 수정
  if (e.target.matches(".lnr-undo")) {
    const $inputText= document.querySelector(".text");
    const enterModifyMode = ($undo)=>{
      // 클래스 이름을 변경하여 아이콘 변경
      $undo.classList.replace('lnr-undo','lnr-checkmark-circle');
      // $undo근처에 있는 span.text를 가져와야 함.
      const $textSpan = $undo.closest('.todo-list-item').querySelector('.text');
      const $modInput = document.createElement("input");
      $modInput.classList.add('modify-input');
      $modInput.setAttribute('type','text');
      $modInput.value=$textSpan.textContent;
      const $label = $textSpan.parentNode;
      $label.replaceChild($modInput,$textSpan);
      
      };
      const modifyTodo = ($checkMark)=>{
        const $li = $checkMark.closest('.todo-list-item');
        const id=$li.dataset.id;
        const newText = $li.querySelector('.modify-input').value;
        fetchTodos(`${URI}/${id}`,'PATCH',{
          text:newText
        });
      };
      const modifyTodoHandler = e=>{
        if(e.target.matches('.modify span.lnr-undo')){
          enterModifyMode(e.target);
        }else if(e.target.matches('.modify span.lnr-checkmark-circle')){
          modifyTodo(e.target);//서버에 수정 요청 보내깅
        }
      }
    enterModifyMode(e.target);
  }
};
const checkboxHandler=(e)=>{
  console.log(e.target.checked); // 현재상태지 이전상태가 아니다

  const id = e.target.closest('.todo-list-item').dataset.id;
  fetchTodos(`${URL}/${id}`, 'PATCH', {
    done: e.target.checked
  });
}
todosUl.addEventListener("change", checkboxHandler);
todosUl.addEventListener("click", buttonHandler);
