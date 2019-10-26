import fs from "fs-extra"

export function createDir(root: string) {
  fs.ensureDirSync(root)
}
