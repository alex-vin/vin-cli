import chalk from "chalk"
const download = require('download-git-repo')

import { IType, projectInfo } from "./config"

export async function createApp(root: string, type: keyof IType = "INIT") {
  const project: any = projectInfo.find(p => p.key === type)
  return new Promise((resolve, reject) => {
    download(project.url, root, { clone: true }, (err: any) => {
      if (err) return reject(err)
      resolve()
      console.log(`正在从远端克隆  ${chalk.green(project.descrition)} 项目到 ${chalk.green(root)}`)
    })
  })
}
