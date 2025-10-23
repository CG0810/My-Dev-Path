


function maskEmail(email) {
  const splitting = email.split("@");
  const username  = splitting[0];
  const domain = splitting[1];
  const firstCharacter = username[0];
  const lastCharacter = username[username.length - 1];
  const maskPart = "*".repeat(username.length - 2);
  return firstCharacter + maskPart + lastCharacter + "@" + domain;
}

let email = "cook@email.com";
console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));
console.log(maskEmail("info@test.dev"));
console.log(maskEmail("user@domain.org"));

