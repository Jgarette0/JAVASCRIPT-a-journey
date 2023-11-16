const create = element => document.createElement(element);
const messege = text => document.createTextNode(text);
const getElem = id => document.getElementById(id);
const getText = () => getElem('text').value;
const setText = (value) => getElem('text').value = value;

const on = R.curry(function(eventType, element, fn){
 element.addEventListener(eventType, fn);

 return function(){
  element.removeEventListener(eventType, fn);
 }

});


const addClass = R.curry(function(className, element){
 element.classList.add(className);

 return element;
});

const append = R.curry(function(content, element){
element.appendChild(content);

return element;
});

const attr = R.curry(function(attrName, attrValue, element){
 element.setAttribute(attrName, attrValue);

 return element;
});

const clear = R.curry((element) => {
 element.innerHTML = '';

 return element;
});