import Koa from 'koa'
import path from 'path'
import Router from 'koa-router'
import fs from 'fs'
import React from 'react'
import views from 'koa-views'
import { renderToString } from 'react-dom/server'
import App from '../src/App'

const app = new Koa()
const router = Router()
const PORT = 9000

app.use(require('koa-static')(path.resolve('./build'))) // 静态资源地址配置
router.get('/',async(ctx)=>{
  const data = fs.readFileSync(path.resolve('./build/index.html'),'utf-8')
  ctx.body = data.replace('<div id="root"></div>', `<div id="root">${ renderToString(<App />) }</div>`)
})

app.use(router.routes())

app.listen(PORT,()=>{
  console.log(`start port ${PORT}`)
})