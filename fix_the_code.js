function plus(n1, n2) {
  return n1 + n2;
}

function formatOutput(input, suffix) {
  if (input === "test" && suffix !== "temp") {
    return suffix;
  }
  return ` ${suffix} random text`;
}

let totalCatsInTokyoLastYear = 0;
