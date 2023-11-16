const getId = id => document.getElementById(id);
const element = tag => document.createElement(tag);
const data = content => document.createTextNode(content);
const getText = () => getId('input').value;
const setText = (value) => getId('input').value = value;

const on = R.curry(function(eventType, element, fn){
 element.addEventListener(eventType, fn);

  return function(){
   element.removeEventListener(eventType, fn);
  }
});

const clear = R.curry((element) => {
 element.innerHTML = '';
 return element;
});

const append = R.curry(function(node, element){
 element.appendChild(node);
 return element
});

const attr = R.curry(function(attrName, attrValue, element){
 element.setAttribute(attrName, attrValue);
 return element;
});

const addClass = R.curry(function(className, element){
 element.classList.add(className);
 return element;
});





function app(state,output, dispatch){
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
  app(newState, output, dispatch);
 });
}
 


 function view(state){
const elem = element('div');

return state.length > 0 ? R.pipe(
  ... state.map((content,index) => append(compose(content,index)))
 )(element('div')): elem;
 }

const compose = (content,index) => {
 return R.compose(
  append(data(content)),
  attr('id', index),
  addClass('todo')
 )(element('div'));
}

const buttonClick = on('click', getId('button'));

app(
 Object.freeze(['Do some Laundry', 'Wash some dishes']),
 getId('list'),
 buttonClick
);

