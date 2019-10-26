import chalk from "chalk"
import path from "path"
import spawn from "cross-spawn"
import child_process from "child_process"

export async function install(root: string, useNpm: boolean = true) {
  console.log()
  console.log(`正在执行 ${chalk.green("npm install")} or ${chalk.green("yarn")} 指令, 这将花费一些时间.`)
  console.log(`正在安装 ${chalk.cyan("react")}, ${chalk.cyan("react-dom")}, ${chalk.cyan("react-router-dom")}...`)
  console.log()

  const hasYarn = shouldUseYarn()
  const command = !hasYarn || useNpm ? 'npm' : 'yarn'
  process.chdir(root)
  const args: string[] = !hasYarn || useNpm ? ['i'] : []

  const child = spawn(command, args, { stdio: 'inherit' })

  return new Promise((resolve, reject) => {
    child.on('close', code => {
      if (code !== 0) {
        reject({
          command: `${command} ${args.join(' ')}`
        })
        return
      }

      process.chdir(path.resolve(root, '..'))
      resolve()
    })
  })
}

function shouldUseYarn() {
  try {
    child_process.execSync('yarnpkg --version', { stdio: 'ignore' })
    return true
  } catch (e) {
    return false
  }
}
