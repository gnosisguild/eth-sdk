import fs from 'fs'
import fsExtra from 'fs-extra'
import glob, { IOptions as GlobOptions } from 'glob'
import mkdirp from 'mkdirp'
import { promisify } from 'util'

export interface Fs {
  exists(path: string): boolean
  write(path: string, contents: string): Promise<void>
  ensureDir(path: string): Promise<void>
  copy(src: string, dest: string): Promise<void>
  readDir(path: string): Promise<string[]>
  glob(pattern: string, options?: GlobOptions | undefined): Promise<string[]>
  rmDir(path: string): void
}

export const realFs: Fs = {
  exists: fs.existsSync,
  write: (p, c) => fsExtra.writeFile(p, c),
  ensureDir: async (p) => {
    await mkdirp(p)
  },
  copy: (src, dest) => fsExtra.copy(src, dest),
  readDir: (path) => fsExtra.readdir(path),
  glob: promisify(glob),
  rmDir: (path) => {
    fs.rmSync(path, { recursive: true })
  },
}
