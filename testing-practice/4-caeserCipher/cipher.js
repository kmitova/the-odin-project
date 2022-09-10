function cipher(key, string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const newalpha = shift(key, alphabet);

  const result = encode(string, newalpha, alphabet);
  return result;
}

function shift(key, alphabet) {
  let newalpha = "";
  for (let i = 0; i < alphabet.length; i++) {
    let offset = (i + key) % alphabet.length;
    newalpha += alphabet[offset];
  }
  return newalpha;
}

function encode(message, newalpha, alphabet) {
  let result = "";
  message = message.toLowerCase();
  for (let i = 0; i < message.length; i++) {
    let index = alphabet.indexOf(message[i]);
    result += newalpha[index];
  }
  console.log(result);
  return result;
}

export { cipher };
