/*****************
*
*    Theme Name: ''
*    Theme URL: ''
*    Author: Mohammad Rahmani
*    Author URL: http://mohammadrahmani.com
*
*/

// This function expands the board when the user clicks on the board header
const $BGC = document.getElementById('username')
  $BGC.innerText = 'sample page'
  $BGC.style.color = 'rgb(200,125,0)'


function expandBoard(boardElement) {
    const boardContent = boardElement.querySelector(".board-content");
    boardContent.classList.toggle("active"); // Toggles the "active" class on the board-content element
  }
  
  // This function adds an event listener to all board headers
  const boardHeaders = document.querySelectorAll(".board header");
  boardHeaders.forEach(boardHeader => {
    boardHeader.addEventListener("click", () => expandBoard(boardHeader.parentElement));
  });

  // ... (既存のJavaScript) ...

// 新しいタスクを追加する関数
function addTask() {
    const input = document.getElementById('new-task-input');
    const taskName = input.value;
    
    

    addTaskBtn.style.backgroundColor = 'red'
    if (taskName.trim() === '') {
      window.alert('タスク名を入力してください');
      addTaskBtn.style.backgroundColor = 'rgb(37, 130, 243)'
      return;
    }
  
    // 新しいタスク要素を作成
    const newTask = document.createElement('li');
    newTask.className = 'el'; // 既存のタスクと同じクラス名にする
    newTask.innerHTML = `
      <div class="task blue">
        <header>
          <h3>${taskName}</h3>
          <span class="icon flaticon-link"></span>
        </header>
        <div class="task-content">
          </div>
      </div>
    `;
  
    // タスクをBacklogのリストに追加（例としてBacklogのリストの要素を取得）
    const backlogList = document.querySelector('.board.red .list');
    backlogList.appendChild(newTask);
  
    // 入力欄をクリア
    input.value = '';
    
    addTaskBtn.style.backgroundColor = 'blue'
  }
  
  // 追加ボタンにクリックイベントリスナーを追加
  const addTaskBtn = document.getElementById('add-task-btn');
  addTaskBtn.addEventListener('mouseover',()=>{
    addTaskBtn.style.backgroundColor = 'red'
  });
  addTaskBtn.addEventListener('mousedown',()=>{
    addTaskBtn.style.backgroundColor = 'rgb(224, 90, 90)'
  });
  addTaskBtn.addEventListener('mouseup',addTask);