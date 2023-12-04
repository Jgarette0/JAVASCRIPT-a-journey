
function app(state,output,dispatch){
 R.compose(
   append(view(state)),
   clear()
 )(output);

 const stop = dispatch((e) => {
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
const element  = tag('div');

return state.length > 0 ? R.pipe(
 ... state.map((content,index)=>append(compose(content,index)))
)(tag('div')) : element;
}

 const compose = (content,index) => {
   return R.compose(
     append(todo(content)),
     addClass('todo'),
     attr('id', index)
   )(tag('div'));
 }

const buttonClick = on('click', get('button'));
app(
 Object.freeze(['Do some laundry']),
 get('list'),
 buttonClick
)