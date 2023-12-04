const tag = element => document.createElement(element);
const todo = node => document.createTextNode(node);
const get = (id) => document.getElementById(id);
const getText = () => get('input').value;
const setText = (value) => get('input').value = value;

const clear = R.curry(function(element){
  element.innerHTML = '';
  return element;
});

const on = R.curry(function(eventType, element, fn){
  element.addEventListener(eventType,fn);
  return function(){
    element.removeEventListener(eventType,fn);
  }
});

const append = R.curry(function(node, element){
  element.appendChild(node);
  return element;
});

const addClass = R.curry(function(className, element){
  element.classList.add(className);
  return element;
});

const attr = R.curry(function(attrName, attrValue, element){
  element.setAttribute(attrName,attrValue);
  return element;
});

