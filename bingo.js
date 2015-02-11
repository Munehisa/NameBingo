$ = function(x) {
  return document.getElementById(x);
}

// ビンゴ用文字配列
var numList = ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん"];

var isStop = true;

function startBingo() {
  // ボタンの表示切り替え
  $("start").style.display = "none";
  $("stop").style.display = "inline";
  isStop = false;
  roulette();
}

function stopBingo() {
  // ボタンの表示切り替え
  $("start").style.display = "inline";
  $("stop").style.display = "none";
  isStop = true;
}

function roulette() {
  var id = "";
  var rnd = Math.floor(Math.random() * numList.length);
  
  // ストップボタンが押された
  if (isStop) {
    // 遅延呼び出しを解除
    clearTimeout(id);
    
    $("view").innerHTML = numList[rnd];
    if (!$("out").innerHTML) {
      $("out").innerHTML = $("out").innerHTML + numList[rnd];
    }
    else {
      $("out").innerHTML = $("out").innerHTML + "　" + numList[rnd];
    }
    
    //決定した文字の色を変更する
    $(numList[rnd]).className = "hit";
    
    //決定した数字をリストから削除する
    numList.splice(rnd, 1);
    // リストが空になったら終了
    if (numList.length == 0) {
      alert("最後です。");
      $("start").disabled = true;
    }
    return false;
  }
  
  // 乱数を画面に表示
  $("view").innerHTML = numList[rnd];
  // 100ms後に再帰的に実行するよう登録する
  id = setTimeout("roulette()", 100);
}
