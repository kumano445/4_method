// Q1 プロパティーとメソッドの違いをまとめて3つほどメソッドを作ってください。

  //プロパティは名前と値がセットになっているもの。変数のようなイメージで、属性のこと。。メソッドとはプロパティに代入された関数のことをいいます。動作のことを言います。
  // 例)const phone = {
  // maker    :"apple",→プロパティ
  // color    :"white",→プロパティ
  // edhition :"11pro",→プロパティ
  // calling  :function(){→メソッド
    // document.write("電話をかけています。");
  // }
// }

  // ーーーメソッド
  // function alert();
  // function prompt();
  // function click();


  // Q2 下記の関数を実行してその結果をコンソールに表示してください。(スコープ内に書く方法はだめです。

  function fruit(name, price) {
    const result = name + "の値段は" + price + "円です。"
    return result
  };
  var resultReturn = fruit("Q2 りんご", "100")
  console.log(resultReturn);
  

  // Q3　下記の関数を経由して2つの関数を実行するような処理を作ってください。

  function addTax(price, func) {
// priceは値段
// funcは実行する関数名
// 税込み価格を計算して四捨五入して整数にしている(スコープ内でしか参照できません。)
    const taxPrice = Math.round(price * 1.10);
    func(taxPrice);
  }
// トマトの税込み価格をコンソールに表示させる処理
  const tomato =function (taxPrice){
    console.log("Q3 トマトの値段は" + taxPrice  + "円");
    return false;
    // ある要素で発火したイベントはその全ての親要素に伝播していくとのことでした。
    // jQueryでのreturn false　親要素へのイベント伝播を止める.
// JavaScriptでのreturn false　親要素へのイベント伝播を止めない.
// それ以上の親要素への伝播を止めるためにはあったほうがいいと確認したので追加させていただきました。
    }
    addTax(120, tomato);

// 玉ねぎの税込み価格をコンソールに表示させる処理
    const onion =function price(taxPrice){
    console.log("Q3 玉ねぎの値段" + taxPrice + "円");
    
    return false;
    }
    addTax(115, onion);
    
    

    