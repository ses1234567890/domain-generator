let pronoun = ["the", "our"];
let adj = ["great", "big", "adorable", "adventurous"];
let noun = ["jogger", "racoon", "dog", "cobra"];
let domain = [".io", ".es", ".com", ".cat", ".us"];

for (let i = 0; i < 10; i++) {
  let finalDomain =
    pronoun[Math.floor(Math.random() * 2)] +
    adj[Math.floor(Math.random() * 4)] +
    noun[Math.floor(Math.random() * 4)] +
    domain[Math.floor(Math.random() * 5)];
  console.log(finalDomain);
}
