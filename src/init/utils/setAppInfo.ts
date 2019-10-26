import chalk from "chalk"
import fs from "fs-extra"
import path from "path"

export async function setAppInfo(root: string, appName: string) {
  const pkgPath = path.join(root, 'package.json')
  const pkg = fs.readJSONSync(pkgPath)
  pkg.name = appName
  pkg.name = appName
  fs.writeJsonSync(pkgPath, pkg, { spaces: 2 })
}
