import * as React from 'react'
import Head from 'next/head'
import Parser from "rss-parser"
import Link from 'next/link'

import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/material.css'

import { GiSpermWhale, GiCoffeeMug, GiDodging, GiOpenChest, GiNotebook } from 'react-icons/gi'
import { BsBraces } from 'react-icons/bs'
import { MdEmojiFoodBeverage } from 'react-icons/md'

export default function Index(data) {

  //启用 tippy
  React.useEffect(() => {
    tippy('[data-tippy-content]:not(#avatar)', {
      placement: 'bottom',
      theme: 'material'
    }
    )
  }, [])

  //获取博客文章
  var post = data.data.items
  let date = new Date(post[0].pubDate).toLocaleDateString('zh-cn').replaceAll('/', '-')
  let excerpt = post[0]["contentSnippet"]

  return (
    <div id="page">
      <style jsx>{`
          #latest-post {
            box-shadow: 0.25rem 0.25rem 0 #555;
            transition: 0.3s
          }
          @media screen and (min-width: 768px){
            #latest-post:hover {
              box-shadow: 1rem 1rem 0 #555;
              transform: translate3D(-0.5rem, -0.5rem, 0)
            }
          }

          #page-container section {
            margin: 2rem 0
          }
          #page-container section:first-child {
            margin-top: 0
          }
          #page-container section:last-child {
            margin-bottom: 0
          }

          #random-words h2 {
            height: 1.25em;
            position: relative;
            cursor: pointer
          }
          #random-words h2 #fake-words,
          #random-words h2 #real-words {
            position: absolute;
            left: 0; right: 0
          }
          #random-words h2 #fake-words {
            opacity: 1
          }
          #random-words h2 #real-words {
            opacity: 0
          }
          #random-words h2:hover #fake-words {
            opacity: 0
          }
          #random-words h2:hover #real-words {
            opacity: 1
          }

          #random-speech p {
            margin: 0.5rem 0
          }
        `}</style>

      <Head><title>啤酒加冰 / Lip</title></Head>
      <div id="page-container">

        <section id="latest-post-box">
          <a href={post[0].link} target="_blank">
            <article id="latest-post" className="bg-white border-2 border-gray-700 p-6 sm:p-10">
              <div id="post-excerpt" className="text-xl sm:text-2xl font-semibold">{excerpt}</div>
              <h3 className="text-lg mt-4 flex flex-col sm:flex-row sm:justify-between">
                <a className="underline underline-offset-8"
                  href={post[0].link}>{post[0].title}</a>
                <span className="text-gray-500">{date} / 博客文章</span>
              </h3>
            </article>
          </a>
        </section>

        <section id="related-links">
          <div className="flex flex-wrap md:flex-nowrap -m-3">
            <Rlink title="啤酒屋" link="https://talk.666986.xyz" subTitle="啤酒烧烤屋 · 博客"
              des="一个清净的好去处，有被选中的男人在这里胡言乱语。">
              <GiCoffeeMug />
            </Rlink>

            <Rlink title="虹色巨鲸" link="https://www.666986.xyz" subTitle="美化版 · 个人页"
              des="当外面的世界对你太残酷，偶尔可以躲进鲸鱼的柜子里。">
              <GiSpermWhale />
            </Rlink>

            <Rlink title="第 712 层" link="http://backrooms-wiki-cn.wikidot.com/author:mistyhill" subTitle="阈限 · 怪谈"
              des="后室，但是有被选中的男人。来看看我为 Backrooms 系列编写的文章。">
              <GiDodging />
            </Rlink>
          </div>
        </section>

        <section id="random-words" className="border-t-2 border-b-2 border-gray-700 py-5 md:px-2 text-center">
          <h2 className="text-3xl text-gray-700 font-bold tracking-widest">
            <span id="fake-words" className="transition">月落乌啼霜满天</span>
            <span id="real-words" className="transition">江枫渔火对<span className="bg-gray-700 text-white">愁</span>眠</span>
          </h2>
        </section>

        <section id="projects">
          <div className="flex flex-wrap -m-3">
            <Plink title="SubShare" des="林檎与日记本，抹茶与部落格"
              link="https://github.com/linux-jin/ShareYourV2raySubscription"
              tippy="订阅节点统一管理工具"><MdEmojiFoodBeverage /></Plink>
            <Plink title="WinNav" des="括号和文字共舞"
              link="https://github.com/beer-on-ice/site"
              tippy="仿Windows操作逻辑的导航页"><BsBraces /></Plink>
            <Plink title="Beer" des="生命与奇迹，记录心的律动"
              link="https://github.com/beer-on-ice/beer-on-ice"
              tippy="个人Github介绍页"><GiOpenChest /></Plink>
            <Plink title="SPlayer" des="章鱼猫和无效文字"
              link="https://github.com/beer-on-ice/SPlayer"
              tippy="具有解锁功能的网易云播放器"><GiNotebook /></Plink>
          </div>
        </section>

        <section id="random-speech" className="border-2 border-gray-700 px-6 py-5 text-lg font-semibold bg-white">
          <p><strong>如果你在不正确的地方从互联网切出，你终将坠入「啤酒屋」，这里只有过剩的自我意识和格格不入的奇怪文字。 逻辑至上的交流理想和焦灼与自我价值之实现的迫切欲望在持续地轰鸣。 倘若你听见有什么东西在附近徘徊，不必担心，因为它…… 是被选中的男人。</strong></p>
          <div className="border-t-2 border-gray-700 my-3"></div>
          <p>你好，这里是 Lip，是啤酒加冰，<a href="https://www.16personalities.com/ch/infp-%E4%BA%BA%E6%A0%BC" target="_blank"
            className="underline underline-offset-4">INFP-T</a>，如你所见，还是个谜语人。</p>
          <p className="md:flex">
            <strong className="flex-shrink-0 md:mr-3">喜欢</strong>
            折腾网站、前端设计、写小说、编故事、怪谈、哲学、做手帐、猫猫、狗狗、鹦鹉、猫头鹰、绿色、书本、风拂过毛孔的感觉、做自己、DST、Minecraft、宝可梦、瑞克和莫蒂、塔罗牌、语言、翻译、逻辑、各有取舍的交流……
          </p>
          <p className="md:flex">
            <strong className="flex-shrink-0 md:mr-3">讨厌</strong>
            人类、父权制、烟酒、无端愤怒、自以为优越之人、听不进道理之人、梗小鬼、世界上所有的节肢动物……
          </p>
          <p>如果你想的话，可以通过
            <a href="mailto:mistyhills53@gmail.com" target="_blank"
              className="underline underline-offset-8 mx-1">mistyhills53@gmail.com</a> /&nbsp;
            <a href="https://t.me/franknb" className="underline underline-offset-8 mx-1" data-tippy-content="Lip#4794">Telegram</a>
            跟我聊天。</p>
        </section>
      </div>
    </div>
  )
}

function Rlink({ children, title, subTitle, des, link }) {
  //Related links
  return (
    <a href={link} target="_blank" className="w-full md:w-1/3 p-3 bg-white">
      <div className="border-2 border-gray-700 p-6 h-full relative overflow-hidden
      transition duration-300 hover:shadow-lg hover:-translate-y-2
      flex flex-col justify-between">
        <div className="link-text">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="my-4">{des}</p>
        </div>
        <div className="link-icon absolute opacity-30"
          style={{ right: '-1rem', bottom: '-1rem', fontSize: '5rem' }}>{children}</div>
        <div className="link-subtitle text-gray-400">
          {subTitle}
        </div>
      </div>
    </a>
  )
}

function Plink({ title, tippy, des, link, children }) {
  //Project links
  return (
    <a href={link} target="_blank" className="w-full sm:w-1/2 p-3 bg-white">
      <div className="border-2 border-gray-700 p-6 h-full relative
      transition duration-300 hover:shadow-lg hover:-translate-y-2 overflow-hidden
      flex flex-col justify-between" data-tippy-content={tippy}>
        <div className="link-text z-20">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="my-2">{des}</p>
        </div>
        <div className="link-icon absolute opacity-30 z-10 top-3 right-4 text-7xl
        hidden md:block">
          {children}
        </div>
      </div>
    </a>
  )
}

export async function getStaticProps() {
  //获取博客文章
  const parser = new Parser()
  const data = await parser.parseURL("https://talk.666986.xyz/index.php/feed/")

  return {
    props: { data: data },
    revalidate: 30 * 60, // 至少 30 分钟後去产生新页面
  }
}
