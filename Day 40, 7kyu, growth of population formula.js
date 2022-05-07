// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

function nbYear(p0, percent, aug, p) {
    let i = 0;
    while (p0 < p) {
      p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
      i += 1
    }
    return i
}

function nbYear(p0, percent, aug, p) {
    for (let years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
}