function incrementString (strng) {
  let sum;
  var narr = strng.split("")
  if(narr[narr.length - 1] >= 0){
      sum = parseInt(narr[narr.length - 1]) + 1
      narr.splice(narr.length - 1 , 1)
      
    narr.push(sum)

    return narr.toString().replace(/,/gi,"")
  }
}
incrementString("foobar000")