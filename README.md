# jquery.fieldSplit ドキュメント

## はじめに

テキストフィールド（input:text）を複数のテキストフィールド（input:text）に分割するjQueryのプラグインです。

## 使い方

分割したい input:text に .fieldSplit() を実行します。

    $('input:text').fieldSplit();

指定できるオプションは「debug, splitCount, placeholder, interval, addClass, separator」です。デフォルト値は以下の通りです。

    $('input:text').fieldSplit({
        debug: false,
        splitCount: 2,
        placeholder: [],
        interval: '5px',
        addClass: '',
        separator: ','
    });

### debug

true を設定すると、元の input:text を表示します。開発中に便利です。

### splitCount

分割する個数を指定します。

### placeholder

placeholder 属性の値を配列で指定します。配列の要素数は、splitCount と揃えましょう。この配列の要素の順番と分割された input:text の順番は一致させる必要があります。

### interval

分割された input:text の間隔を指定します。

### addClass

分割された input:text に class を指定する場合に、そのクラス名を指定します。

### separator

元の input:text に値を保存するときのセパレータを指定します。

## ポイント

保存された値は、正規表現でうまい具合に取り出しましょう！

## 作者

[Tomohiro Okuwaki](http://www.tinybeans.net/blog/ "かたつむりくんのWWW")（[@tinybeans](https://twitter.com/#!/tinybeans "奥脇知宏（かたつむりくんのWWW） (tinybeans) は Twitter を利用しています")）