import { useState } from "react";
import { entryApp } from "./entry-app"


function McApp_Sub() {
  const onBtnClick = () => {
    entryApp.pushOrderData({
      orderId: 'ruaa',
      updatedAt: Date.now(),
      // status: 'completed',
      status: 'pending',
      title: '工单标题',
      creator: '王伟',
    })
  } 
 
  return (
      <div className="h-full w-full bg-gray-500 rounded-2xl p-4 flex flex-col">
        <h1 className="text-center pb-4">这是McApp_Sub</h1>
        <main className="flex-1">
          <button className="px-4 py-2 h-10 bg-blue-400 rounded-2xl"
            onClick={onBtnClick}
          >sendHostMessage</button>
        </main>
      </div>
  )
}

export default McApp_Sub
