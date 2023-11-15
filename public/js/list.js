function app(state, output){

  const appendFunctions = state.map(function(content, index){
      return append(compose(content, index));
  });

  R.pipe(
   ...appendFunctions
  )(output);

}


 function compose(content,index){
 return R.compose(
  append(text(content)),
  addClass('hello'),
  attribute('id', 'foo')
 )(element('div'));
}

app(
 Object.freeze(['Hello World', 'This is real']),
 getId('messege-list')
);
//document.body.appendChild(compose('Hello World'));