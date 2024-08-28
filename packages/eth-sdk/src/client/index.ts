import { join, relative } from 'path'
import { CodegenConfig } from 'typechain'

import { EthSdkCtx } from '../types'
import { generateTsClient } from './generateTsClient'
import { transpileClient } from './transpileClient'

export async function generateSdk(ctx: EthSdkCtx): Promise<void> {
  const {
    cliArgs: { workingDirPath },
    config: { contracts, outputPath, typechainFlags },
    fs,
  } = ctx

  await fs.ensureDir(outputPath)

  const tmpDirPath = join(workingDirPath, 'tmp')
  await fs.ensureDir(tmpDirPath)

  await copyStaticFiles(ctx)

  const abisRoot = join(workingDirPath, 'abis')
  const outputToAbiRelativePath = relative(outputPath, abisRoot).replace(/\\/g, '/')

  const shapedFlag: CodegenConfig = {
    discriminateTypes: typechainFlags?.discriminateTypes ?? false,
    alwaysGenerateOverloads: typechainFlags?.alwaysGenerateOverloads ?? false,
    environment: undefined,
  }
  if (typechainFlags?.tsNocheck != null) {
    shapedFlag.tsNocheck = typechainFlags.tsNocheck
  }

  await generateTsClient(contracts, abisRoot, tmpDirPath, outputToAbiRelativePath, fs, shapedFlag)
  await transpileClient(tmpDirPath, outputPath, fs)
  fs.rmDir(tmpDirPath)
}

async function copyStaticFiles({ fs, config }: EthSdkCtx) {
  const staticDir = join(__dirname, '../../static')
  const dir = await fs.readDir(staticDir)

  await Promise.all(dir.map((file) => fs.copy(join(staticDir, file), join(config.outputPath, file))))
}
