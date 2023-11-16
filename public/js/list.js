function app(state,output,dispatch){
  
  R.compose(

    append(view(state)),
    clear()
  )(output);

const stop = dispatch((e)=> {
  stop();
  const newText = getText();
  const newState = [
    ...state,
    newText
  ];

  setText('');
  app(newState,output,dispatch);
});
}

function view(state){
  const el = create('div');

  return state.length > 0 ? R.pipe(
    ... state.map((content,index)=>append(generate(content,index)))
  )(create('div')): el;
}
function generate(content, index){
  return R.compose(
    append(messege(content)),
    addClass('todo'),
    attr('id', index)
  )(create('div'));
}

const buttonClick = on('click', getElem('submit'));
app(
  Object.freeze([]),
  getElem('todo-list'),
  buttonClick
);
