const element = (tag) => document.createElement(tag);
const text = (isSomeText) => document.createTextNode(isSomeText);
const getId = id => document.getElementById('messege-list');

const append = R.curry(function(text, element){
 element.appendChild(text);

 return element;
});

const addClass = R.curry(function(className, element){
 element.classList.add(className);

 return element;
});

const attribute = R.curry(function(attributeName, attributeValue, element){
 element.setAttribute(attributeName, attributeValue);

return element;
});
