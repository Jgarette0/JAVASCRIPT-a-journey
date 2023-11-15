const elem = (tag) => document.createElement(tag);

const el = R.compose(
     addClass('bob'),
     addClass('foo')


)( elem('div'));

document.body.appendChild(el);

 function addClass(className){
 return function(element) {
  element.classList.add(className);

  return element;
 }
}