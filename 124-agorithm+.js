function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  return str.split("").map((e) => {
    return [e, pairs[e]];
  });
}

console.log(pairElement("GCG"));
