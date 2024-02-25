function convertHTML(str) {
  const replaceIt = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str.replace(/[&<>"']/g, (match) => {
    return replaceIt[match];
  });
}

console.log(convertHTML("Dolce & Gabbana"));
