import { join } from 'path'
import { CodegenConfig, glob, runTypeChain } from 'typechain'

export async function generateTypes(abisRoot: string, outputPath: string, typechainFlags: CodegenConfig) {
  const cwd = process.cwd()
  const files = glob(cwd, [join(abisRoot, '/**/*.json')])

  await runTypeChain({
    cwd,
    allFiles: files,
    filesToProcess: files,
    target: require.resolve('@gnosis-guild/typechain-ethers-v6'),
    outDir: outputPath,
    inputDir: abisRoot,
    flags: typechainFlags,
  })
}
