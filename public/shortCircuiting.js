//0.0\\  SHORT CIRCUITING
//0.0\\  && / || OPERATOR
//0.0\\  && is FALSEY VAL
//0.0\\  || is TRUTHY VAL

const love = (love) => {
  return "love";
};
const hate = (props) => {
  return (props = "hate");
};

const console = true && love();
const consoled = false && love();
consoled;
console;

const displayed = true || hate();
const display = false || hate();
displayed;
display;

const isError = 1 > 2;
const isCheck = 1 < 2;

const err = isError || "Oh no error";
err;

const chk = isCheck && "You are correct";
chk;
