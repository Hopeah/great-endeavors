// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

//PREP

//P - parameters
//Given a string, contains a URL that begins with "http://" OR "https://" OR "http://www" etc

//R - returns
//Return a string containing only the domain name 

//E - examples
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

//P - pseudocode

//this works in the console, not in codewars
function domainName(url){
    //Find the first and last indicies of "."
    const firstDot = url.indexOf('.')
    const lastDot = url.lastIndexOf('.')
    let slash
    //if www. is not included in the URL, then find index of //
    if (firstDot === lastDot) {
        slash = url.indexOf('/')
        return url.slice(slash+2, lastDot)
    }
    //Slice the url based on the first index+1 and the last index
    //Return the sliced url
    return url.slice(firstDot+1, lastDot)
}

//This will only work in a browser to be able to use document
function domainName(domain) {
    const a = document.createElement('a');
    a.href = domain;
    const { hostname } = a;
    const hostSplit = hostname.split('.');
    hostSplit.pop();
    if (hostSplit.length > 1) {
      hostSplit.shift();
    }
    return hostSplit.join();
}

function domainName(url){
    let output = '';
    let http = /http:\/\//,
        https = /https:\/\//,
        www = /www./;
    
    let newUrl = url.replace(https, '').replace(http, '').replace(www, '')
    
    console.log(url, newUrl)
    for(let i = 0; i < newUrl.length; i++){
      if(newUrl[i] !== '.'){
        output += newUrl[i];
      } else {
        break;
      }
    }
    
    return output;
}

function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};
