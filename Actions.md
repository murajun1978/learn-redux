# Actions
イベント発生時にアプリケーションからStoreへ情報を渡すためのオブジェクト

単純なplain javascript objectです

アクションを識別するための `type` プロパティは必ず必要です

`type` 以外のプロパティは自由に指定できます


```javascript
{
  type: 'INCREMENT'
}

{
  type: 'ADD_TODO',
  text: 'Learn Redux'
}
```

`store.dispatch()` で Storeへ渡します

```javascript
store.dispatch({
  type: 'INCREMENT'
})
```

アプリケーションで利用する場合はFunctionを作っておくと良いよ

```javascript
export const ADD_TODO = (text) => ({
  type: 'ADD_TODO',
  text
})

import { ADD_TODO } from './actions'

...
store.dispatch(ADD_TODO('Learn Redux'))
...
```

`dispatch` するとStoreのReducerにActionを渡し実行されます
