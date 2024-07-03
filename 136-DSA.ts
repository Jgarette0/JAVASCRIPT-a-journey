const rot13 = (numero: string): string => {
  const ACharCode = "A".charCodeAt(0);
  const ZCharCode = "Z".charCodeAt(0);

  const shift = 13;

  return numero
    .split("")
    .map((item) => {
      const charCode = item.charCodeAt(0);

      if (charCode >= ACharCode && charCode <= ZCharCode) {
        let decodedCode = charCode - shift;
        if (decodedCode < charCode) {
          decodedCode += 26;
        }
        return String.fromCharCode(decodedCode);
      } else {
      }
      return item;
    })
    .join("");
};

console.log(rot13("HELLO WORLD"));
