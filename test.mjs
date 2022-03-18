import fs from 'fs'
import path from 'path'

let dir = './app/routes'

visitFiles(dir, file => console.log(file), dir)

function visitFiles(dir, visitor, baseDir) {
  for (let filename of fs.readdirSync(dir)) {
    let file = path.resolve(dir, filename)
    let stat = fs.lstatSync(file)

    if (stat.isDirectory()) {
      visitFiles(file, visitor, baseDir)
    } else if (stat.isFile()) {
      visitor(path.relative(baseDir, file))
    } else if (stat.isSymbolicLink()) {
      const link = fs.readlinkSync(file)
      let stat = fs.lstatSync(link)
      if (stat.isDirectory()) {
        visitFiles(path.relative('.', link), visitor, baseDir)
      } else if (stat.isFile()) {
        visitor(path.relative('.', link))
      }
    }
  }
}
