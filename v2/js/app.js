var todos = [];
var inputTodo = document.querySelector('.input-lg');
var listTodo = document.querySelector('.list-group');

function findNextID() {
    var ids = Math.max.apply(null, todos.map( todo => todo.id ));
    return todos.length !== 0 ? ids + 1 : 1; 
}

function addTodo(todo) {
    if (!todo) return;
    var t = [{
      id : findNextID(),
      content : inputTodo.value,
      completed : false
    }];
    todos = todos.concat(t);
    // console.log('length second', todos.length);
    listTodo.innerHTML='';
    renderHTML();
}

  function renderHTML() {
    todos.forEach(function (todo) {
      var checked = todo.completed ? 'checked' : '';
      listTodo.innerHTML += '<li class="list-group-item">'
      +'<div class="hover-anchor"><a class="hover-action text-muted"><span class="glyphicon glyphicon-remove-circle pull-right" data-id="'+todo.id+'"></span></a>'
      +'<label class="i-checks" for="'+todo.id+'"><input type="checkbox" id="'+todo.id+'" '+checked+'><i></i><span>'+todo.content+'</span></label></div></li>'
    });
  }

  inputTodo.addEventListener('keyup', function(e) {
    if(e.keyCode!==13) return;
    //console.log('[ENTER]', e.keyCode);
    addTodo(this.value);
    this.value='';
  });

  listTodo.addEventListener('change', function(e){
     console.log('before check',todos);
    todos = todos.map(function (todo) {
      return todo.id === +e.target.id  ? Object.assign({}, todo, {completed:!todo.completed}) : todo;
    });
    // console.log('[dataset id check]' , e.target.id);
     console.log('after check',todos);
  });



  //여기 ES6로 다시 구현해야됩니다. 전체 선택 버튼

//   listTodo.addEventListener('change', function(e){
//     console.log('before check',todos);
//    todos = todos.map(function (todo) {
//      return todo.id === +e.target.id  ? Object.assign({}, todo, {completed:!todo.completed}) : todo;
//    });
//    // console.log('[dataset id check]' , e.target.id);
//     console.log('after check',todos);
//  });

  //여기 ES6 구현해야됩니다. 전체 선택 버튼
 
  listTodo.addEventListener('click', function(e) {
    if(e.target.parentNode.nodeName!== 'A') return;
    var curID = e.target.dataset.id;
    var parentID = e.target.parentNode.parentNode.lastChild.firstChild.id;
    //console.log('[parent id]' , e.target.parentNode.parentNode.lastChild.firstChild.id);
    if(curID==parentID){
    todos = todos.filter( todo => {
      // console.log('[todo dataset id]' , curID);
      // console.log('[todo2 dataset id]' , parentID);
      return todo.id !== +e.target.dataset.id;
    });
  }
    listTodo.innerHTML='';
    renderHTML();
  });
  

  window.addEventListener('load', function () {
    // 서버로부터 데이터를 취득
    todos = [
      { id: 1, content: 'HTML', completed: true },
      { id: 2, content: 'CSS', completed: false },
      { id: 3, content: 'JS', completed: true },
      { id: 4, content: 'Angular', completed: false }
    ];
    renderHTML();
    // console.log('length first', todos.length);
  });
