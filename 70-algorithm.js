function truncateString(str, num) {
  return str.length > 8 ? str.slice(0, num) + "...." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
