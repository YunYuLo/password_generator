# 密碼產生器
使用express打造自動產生客製化的密碼，使用者可自訂密碼長度、密碼元素（英文大小寫、數字、符號)，另外可個別排除不喜歡的符號或數字。
![main page](https://github.com/YunYuLo/password_generator/blob/master/public/index.png)

# Environment Requirements
1. Node.js 4.0 or above
2. git

# Note
## post v.s. get
```HTML
<!--index.handlebars-->
<form method="POST" action="/">

</form>
```

```javascript
//app.js
app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  res.render('index')
})
```
 - method沒寫時預設為`get`
 - `get`
    1. 會將使用者選擇的資料送去網址列顯示出來，不適處理帳密等資料
    2. 處理資料量小
 - `post`
    1. 不影響URL
    2. 處理資料量大s

## 使用body-parser來取得body回傳的資料
```javascript
//app.js
const bodyParser = require('body-parser')
//使用use，無論body回傳任何資料都用bodyParser解析
app.use(bodyParser.urlencoded({ extended: true }))
//使用req.body抓取資料from body shown as below
app.post('/', (req, res) => {
  console.log(req.body)
  res.render('index')
})
//Terminal
//{ length: '12',
//  lowercase: 'on',
//  uppercase: 'on',
//  numbers: 'on',
//  excludeCharacters: '' }
```

### 補充相關JS語法

[String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) @MDN

[Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) @MDN

[Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) @MDN
