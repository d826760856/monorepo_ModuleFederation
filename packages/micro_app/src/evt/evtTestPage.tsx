// 如果使用wujie-vue
import { useState } from "react";
import WujieReact from "wujie-react";
const { bus } = WujieReact;

function EvtTestPage() {
    const emitLoadEvt = () => {
        bus.$emit("sendSubMessage", { text: '这是主应用发来的消息' });
    }
    const [ message, setMessage ] = useState<sendSubMessageParams>({ text: '' })
    const [ isOnSendHostMessage, setOnSendHostMessage ] = useState(false)

    type sendSubMessageParams = { text: string }
    // 主应用监听事件
    bus.$on("sendHostMessage", (params: sendSubMessageParams) => {
        setMessage(params)
        setOnSendHostMessage(true)
    });
    return(
        <div className='h-full rounded-2xl p-4 w-full'>
            <button className="px-4 py-2 h-10 bg-blue-400 rounded-2xl"
                onClick={emitLoadEvt}
            >sendSubMessage</button>
            { isOnSendHostMessage ? 
                <section>监听到了子应用的sendHostMessage事件,携带参数是:{message.text}</section>
                : <></>
            }
        </div>
    )
}
export default EvtTestPage
