# Store
## createStore
reducerを受け取ってstoreを生成

## state
現在のstate
getState()で取得できる

## dispatch
store内のreducerを呼び出す
引数は現在のstateとaction
reducerから返ってくるstateをStore内のstateにセットする

## subscribe
listenerを登録する
dispatchしたあとにcallbackされる
