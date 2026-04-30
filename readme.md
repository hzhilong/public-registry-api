# public-registry-api

> npm 公共注册表 API 的简单封装，带完整的 TypeScript 类型提示。

## 安装

```bash
npm install public-registry-api
```

## 使用

### 获取包的元数据

```ts
const package = await getPackage('public-registry-api')
```

### 获取指定包的某个版本的数据

```ts
const packageVersion = await getPackageVersion('public-registry-api', '0.0.1')
```

### 搜索包

直接传递官方参数进行搜索：

```ts
const result = await searchPackages({
  text: '',
  size: 20,
  from: 0,
  quality: 0.65,
  popularity: 0.98,
  maintenance: 0.5,
})
```

其中`text`参数可包含特定的搜索限定符，详情可见[官方说明](https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md#get-v1search)

这里提供一个工具类方便创建：

```ts
const text = SearchText.create().author('hzhilong').keywords(['bilibili']).toString()
const result: NpmSearchResult = await searchPackages({
  text: text,
})
```

> 注意：`text`的值限制为是2~64个字符。

提供一个工具方便获取分页数据：

```ts
const pager = new SearchPager({
  text: SearchText.create().keywords(['bilitoolkit-plugin']).toString(),
  pageSize: 10,
})
console.log(await pager.fetchNext())
console.log(await pager.fetchNext())
```

## 相关链接

- [npm 公共注册表 API 官方文档](https://github.com/npm/registry/blob/main/docs/REGISTRY-API.md)
