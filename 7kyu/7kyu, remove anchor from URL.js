// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

//PREP

//P - parameters
//Given a string, containing punctuation/letters/special characters

//R - returns
//Return a string that cuts every after a "#" anchor

//E - examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//P - pseudocode

function removeUrlAnchor(url){
    //Need to find where "#" is at
    const anchor = url.indexOf('#')
    //Return the sliced string from ^ that point onwards
    return anchor === -1 ? url : url.slice(0, anchor)
}