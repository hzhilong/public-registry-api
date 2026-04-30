/**
 * 包发布产物信息
 */
export interface PackageDistInfo {
  /** .tgz 压缩包下载地址 */
  tarball: string

  /** 压缩包内容的 SHA-1 校验值 */
  shasum: string

  /** 子资源完整性校验值（SRI） <hashAlgorithm>-<base64-hash>*/
  integrity?: string

  /** 压缩包内文件数量（不含目录） */
  fileCount?: number

  /** 解压后的总大小（字节） */
  unpackedSize?: number

  /** 发布包签名信息 */
  signatures?: Signature[]
}

/**
 * 签名信息
 */
export interface Signature {
  /** key id */
  keyid: string

  /** 签名内容 */
  sig: string
}
