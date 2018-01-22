function noFollowingSpace(x){
  var noFoSp = '';
  var lim = x.length - 1;
  for(lim ; lim >=0 ; lim--){
    if(x[lim] !== ' '){
      break;
    }
  }
  for(i = 0 ; i <= lim ; i++){
    noFoSp += x[i];
  }
  return noFoSp;
}

function noExtraSpace(x){
  var noExSp = '';
  var sp = -1;
  for(i = 0 ; i < x.length ; i++){
    if(x[i] === ' '){
      if(i - 1 !== sp){
        noExSp += x[i];
      }
      sp = i;
    }
    else{
      noExSp += x[i];
    }
  }
  return noExSp;
}

function noReturn(x){
  var noRet = '';
  for(i = 0 ; i < x.length ; i++){
    if(x[i] === '\n'){
      noRet += ' ';
      }
      else{
        noRet += x[i];
      }
    }
  return noRet;
}

function calcCnt(x){
  var cnt = 1;
  for(i = 0 ; i < x.length ; i++){
    if(x[i] === ' '){
      cnt++;
      }
    }
  return cnt;
}

function arrFill(order, input){

  var arr = [];

  var idx = 0;
  for(i = 0; i < order; i++){
    var col = [];
    for(j = 0; j < order; j++){

      var nxt = '';
      while(idx < input.length && input[idx] !== ' '){
        nxt += input[idx];
        idx++;
      }
      idx++;

      col.push(nxt);
    }
    arr.push(col);
  }

  return arr;
}

function convert(answer){
  var deci = -1, e = -1;
  for(i = 0 ; i < answer.length ; i++){
    if(answer[i] === '.'){
      deci=i;
    }
    if(answer[i] === 'e'){
      e=i;
    }
  }
  if(deci === -1 && e === -1){
    return answer;
  }
  var exp = '';
  for(i = e+1 ; i < answer.length ; i++){
    exp += answer[i];
  }
  exp = parseInt(exp);
  if(deci > -1){
    exp -= (e - deci - 1);
  }
  var ans = '';
  for(i = 0 ; i < e ; i++){
    if(answer[i] !== '.'){
    ans += answer[i];
  }
  }
  for(i = 0 ; i < exp ; i++){
    ans += '0';
  }
  return ans;
}

var bi =[];
var bj = [];
var ans = 0, vi = 0, vj = 0;

function deter(i, j, n, arr){

  if(n == 1)
    return arr[i][j];
  var sign = -1, jLast = j;
  ans = 0;
  for(var m = 0 ; m < n ; m++)
  {
      sign*=-1;
      bi.push(i);
      while(bj.indexOf(jLast) !== -1)
      jLast++;
      bj.push(jLast);
      vi=0;
      while(bi.indexOf(vi) !== -1)
      vi++;
      vj=0;
      while(bj.indexOf(vj) !== -1)
      vj++;
      ans+=(sign)*arr[i][jLast]*deter(vi,vj,n-1,arr);
      if(bi.indexOf(i) !== -1){
        bi.splice(bi.indexOf(i), 1);
      }
      if(bj.indexOf(jLast) !== -1){
        bj.splice(bj.indexOf(jLast), 1);
      }
      jLast++;
  }
  return ans;

}

function solve(){
  var input = document.getElementById("input").value;
  input = noExtraSpace(noFollowingSpace(noReturn(input)));
  var cnt = calcCnt(input);
  var order = Math.sqrt(cnt);
  if(order % 1 !== 0){
    window.alert('The count of the numbers entered is not a perfect square. You have not entered nXn numbers.');
    location.reload();
    return;
  }
  if(order === 0){
    window.alert('You have not entered any numbers.');
    location.reload();
    return;
  }
  var arr = arrFill(order, input);
  var out = '';
  for(i = 0; i < order; i++){
    for(j = 0; j < order; j++){
      out += arr[i][j]+' ';
    }
    out += '\n';
  }
  var i = 0, j = 0, answer = 0;
  answer = deter(i, j, order, arr);
  document.getElementById("input").value = out;
  answer = convert(''+answer);
  document.getElementById("answer").innerHTML = answer;
}
