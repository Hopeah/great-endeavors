// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

//PREP

//P - parameters
//Given a string of a mix of four capitalized letters including G, C, A and T

//R - returns
//Return a string that replaces T -> U

//E - example
// "GCAT"  =>  "GCAU"

//P - pseudocode

function DNAtoRNA(dna) {
    //Convert to array, map every occurance of Ts to Us, join the array
    return dna.split('').map(base => base === 'T' ? 'U' : base).join('')
}
