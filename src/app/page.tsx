'use client'

import Image from 'next/image';
import JumpableComponent from 'src/components/component/JumpableComponent';
import ScaledComponent from 'src/components/component/ScaledComponent';
import StyleControlComponent from 'src/components/component/StyleControlComponent/index';
export default function Home() {
  const jumpEnd = () => {
    console.log("结束")
  }
  const jumpStart = () => {
    console.log("开始")
  }
  return (
    <div className="min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2  sm:items-start">
        <h1 className="text-4xl font-bold">冒险公会-任务</h1>
        {/* 替换成自己完成的任务演示组件 */}
        {/* <h2 className="text-2xl h-80 text-gray-400 border border-gray-300 p-2 w-full">

        </h2> */}
        <JumpableComponent jumpHeight={100} onJumpEnd={jumpEnd} onJumpStart={jumpStart} jumpTime={1000} >123123</JumpableComponent>
        <ScaledComponent enlargeRatio={1.2} narrowRatio={0.5} enlargeCallBack={() => { console.log('放大回调') }} narrowCallBack={() => {
          console.log("缩小回调")
        }}>放大缩小</ScaledComponent>
        <StyleControlComponent></StyleControlComponent>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/freebeDAO/advanture-island"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.yuque.com/zoeren/freebedao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          freebeDAO
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
