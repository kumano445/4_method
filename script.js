// 1
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

  // 2
  function fruit(name, price) {
    const result = name + "の値段は" + price + "円です。"
    return result
  };
  var resultReturn = fruit("りんご", "100")
  console.log(resultReturn);
  

  // 3
  function addTax(price, func) {
// priceは値段
// funcは実行する関数名
// 税込み価格を計算して四捨五入して整数にしている(スコープ内でしか参照できません。)
    const taxPrice = Math.round(price * 1.10);
    func(taxPrice, price);
  }
// トマトの税込み価格をコンソールに表示させる処理
    const tomato =function (taxPrice, price){
    console.log(taxPrice);
    }
    addTax(120, tomato);

// 玉ねぎの税込み価格をコンソールに表示させる処理
    const onion =function (taxPrice, price){
    console.log(taxPrice);
    }
    addTax(115, onion);