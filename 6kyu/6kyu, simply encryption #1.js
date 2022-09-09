// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

//PREP

//P - parameters
//Given a string (S) and an integer (N)

//R - returns
//Concatenate odd-indexed characters of S with even-indexed characters of S, repeat the process N amount of times, return the resulting string
//If S is an empty string, or if N is not positive -> return the unmodified S

//E - examples
// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

//P - pseudocode
function encrypt(text, n) {
    //Check whether S is empty or N is negative, return S if true
    if (text.length === 0 || n < 1) {
        return text
    }
    //Create a string to store the concatenated string
    let concatenated = text.split('')
    //Loop N amount of times, every loop 1) filter the odd, 2) concatenate, 3) filter the even -> store the concatenated string in a variable
    for (let i = 1; i <= n; i++) {
        arrOdd = concatenated.filter((char, index) => index%2 === 1)
        arrEven = concatenated.filter((char, index) => index%2 === 0)
        concatenated = arrOdd.concat(arrEven)
    }
    //Return the concat string
    return concatenated.join('')
}

function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join('');
  }
  return encryptedText;
}
