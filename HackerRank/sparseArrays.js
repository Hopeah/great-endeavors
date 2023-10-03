// Task
// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

function matchingStrings(strings, queries) {
  // Write your code here
  let queriesCount = [];
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    const queryCount = strings.filter((string) => string === query);
    queriesCount.push(queryCount.length);
  }
  return queriesCount;
}
