const REGEX = {
  alphaNumeric: /^[a-zA-Z0-9_]+$/,
  containsWhitespace: /\s/,
  integerNumbers: /^\d+$/,
  email: /^[a-zA-Z]+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+\s?$/,
  nickname: /^[0-9_a-zA-Zא-ת*-]{1,30}$/,
  password: /^[a-zA-Z0-9!@#$%^&*()\-=]{1,20}$/,
  startsOrEndsWithWhitespace: /(?=(^\s|\s{2,}$))/,
};

export { REGEX };
