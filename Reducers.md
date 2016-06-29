# Reducers
現在のstateとactionを受け取って、新しいstateを生成します

アプリケーションからdispatchされるとReducerが実行されます

<img src="images/Reducers.png" width="200" rigth="200">

```javascript
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
```
