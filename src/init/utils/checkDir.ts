import fs from "fs-extra"
import chalk from "chalk"
import { filesToCheck } from "./config"

export function checkDir(root: string, appName: string) {
  const appDirFiles = fs.readdirSync(root)
  const conflictFiles = appDirFiles.reduce(
    (result: string[], cur) => (filesToCheck.includes(cur) ? [...result, cur] : result),
    []
  )

  if (conflictFiles.length) {
    const conflictMsg = getConflictMsg(appName, conflictFiles)
    throw conflictMsg
  }
}

function getConflictMsg(projectName: string, existFiles: string[]) {
  const fileStr = existFiles.map(i => `   ${i}`).join('\n')
  return `
    文件目录 ${chalk.green(projectName)} 已经包含了可能导致冲突的文件：

    ${chalk.red(fileStr)}

    请启用一个新的项目名称,或者移除该项目下冲突的文件。
  `
}
