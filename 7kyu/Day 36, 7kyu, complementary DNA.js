// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
    let newDna = []
    for (let i = 0; i < dna.length; i++) {
      if (dna[i] === 'A') {
        newDna.push('T')
      } else if (dna[i] === 'T') {
        newDna.push('A')
      } else if (dna[i] === 'G') {
        newDna.push('C')
      } else if (dna[i] === 'C') {
        newDna.push('G')
      }
    }
    return newDna.join('')
}


var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}