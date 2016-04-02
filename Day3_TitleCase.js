function titleCase(str) {
  var strArray = str.split(' ');
  var firstCapStr = '';
  var lowerStr = '';
  var resultStr ='';
  for(var i = 0; i<strArray.length; i++){
    firstCapStr = strArray[i].substr(0,1).toUpperCase();
    lowerStr = strArray[i].substr(1,strArray[i].length -1).toLowerCase();
    resultStr += firstCapStr+lowerStr+' ';
    console.log(resultStr);
  }
  return resultStr.substr(0, resultStr.length-1);
}

titleCase("I'm a little tea pot");

