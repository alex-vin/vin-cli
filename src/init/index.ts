import { Command, flags } from "@oclif/command"
import chalk from "chalk"
import path, { dirname } from "path"

import { getAnswer } from "./utils/getAnswer"
import { createDir } from "./utils/createDir"
import { checkDir } from "./utils/checkDir"
import { createApp } from "./utils/createApp"
import { projectInfo } from "./utils/config"
import { setAppInfo } from "./utils/setAppInfo"
import { install } from "./utils/install"
import { showTips } from "./utils/showTips"

const { green, yellow } = chalk

class CreateApp extends Command {
  static description = "初始化项目模板"

  static flags = {
    help: flags.help({ char: 'h' }),
    version: flags.version({ char: 'v' })
  }

   async run() {
    console.log()
    console.log(green('欢迎使用vin-cli，请按以下提示完成步骤!'))
    console.log()
    try {
      // 获取操作结果
      const answer = await getAnswer()
      const type = answer.projectType.slice(0, answer.projectType.indexOf(":"))
      const appName: string = answer.appName
      const root = path.resolve(appName, "../..", appName)
      const useNpm = answer.useNpm

      console.log()
      console.log("项目名称: %s, 路径: %s", green(appName), green(root))
      console.log()
      console.log(yellow(`正在初始化 ${appName} 项目...`))
      console.log()

      // 创建项目文件夹
      createDir(root)
      // 检查某些文件是否，也间接检查文件夹是否已经存在
      checkDir(root, appName)
      // 从远端下载模板
      await createApp(root, type)

      const project: any = projectInfo.find(p => p.key === type)
      // 往模板文件中写如一些信息
      if (project.UI) setAppInfo(root, appName)

      // 执行npm install
      await install(root, useNpm)
      // 显示信息
      showTips(root, appName)

    } catch (error) {
      this.log(error)
    }
  }
}

export = CreateApp
