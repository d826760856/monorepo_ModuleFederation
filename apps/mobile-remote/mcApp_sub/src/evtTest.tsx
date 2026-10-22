import { useState } from "react";


function McApp_Sub() {

  type onLoadEvtReParmas = { text: string }
  const [isOnloadEvt, setIsOnloadEvt] = useState(false)
  const [OnloadParams, setOnloadParams] = useState<onLoadEvtReParmas>({ text: '' })
  // 子应用监听事件
  window.$wujie?.bus.$on("sendSubMessage", function (params: onLoadEvtReParmas) {
    setIsOnloadEvt(true)
    setOnloadParams(params)
  });

  const emitSubEvt = () => {
    // 子应用发送事件
    window.$wujie?.bus.$emit("sendHostMessage", { text: '这是子应用发来的message' } );
  }
  return (
      <div className="h-full w-full bg-gray-500 rounded-2xl p-4 flex flex-col">
        <h1 className="text-center pb-4">这是McApp_Sub</h1>
        <main className="flex-1">
          <button className="px-4 py-2 h-10 bg-blue-400 rounded-2xl"
              onClick={emitSubEvt}
          >sendHostMessage</button>
          { isOnloadEvt ? <section>监听到了主应用的sendSubMessage事件, 携带参数是: {OnloadParams.text}</section> : <></> }
        </main>
      </div>
  )
}

export default McApp_Sub
