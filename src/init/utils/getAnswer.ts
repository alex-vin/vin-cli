import inquirer from "inquirer"

import { projectInfo } from "./config"

export async function getAnswer() {
  const answer: any = await inquirer.prompt([
    {
      type: 'list',
      name: 'projectType',
      message: '选择项目模板?:',
      choices: projectInfo.map((project: {key: string, info: string}) => project.info)
    },
    {
      type: 'input',
      name: 'appName',
      default: 'vin',
      message: '输入项目名称:'
    },
    {
      type: 'confirm',
      name: 'useNpm',
      message: '是否使用Npm包管理器:'
    }
  ])
  return answer
}
export async function getComponents(dataList: string[]) {
  const answer: any = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'comps',
      message: '选择组件:',
      choices: dataList,
      pageSize: 10
    }
  ])
  return answer
}
