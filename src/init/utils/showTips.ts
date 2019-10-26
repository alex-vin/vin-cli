import chalk from "chalk"

export function showTips(root: string, appName: string) {
  console.log()
  console.log(`成功在 ${chalk.green(root)} 创建项目 ${appName}`)
  console.log()
  console.log(`在当前目录下, 你可以执行以下命令:`)
  console.log()
  console.log(chalk.cyan(`      npm start`), '                                运行开发环境.')
  console.log()
  console.log(chalk.cyan(`      npm test`), '                                 运行单元测试.')
  console.log()
  console.log(chalk.cyan(`      npm runbuild`), '                        在生产环境运行打包项目.')
  console.log()
  console.log('在此之前，我们建议你按照以下操作进入工程环境')
  console.log()
  console.log(chalk.cyan(`      cd`), chalk.green(`../${appName}`))
  console.log(`      ${chalk.cyan("npm start")}`)
  console.log()
  console.log("谢谢支持! ")
  console.log()
  console.log()
}
