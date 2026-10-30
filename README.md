# hanweie-site 汉为软件官网

| 目录 | 作用 | 本地启动 |
|---|---|---|
| `studio/` | Sanity Studio 编辑后台（线上 https://hanweie.sanity.studio） | `cd studio && npm install && npm run dev` → localhost:3333 |
| `web/` | Astro 官网前端，构建后部署到 S3 + CloudFront | `cd web && cp .env.example .env && npm install && npm run dev` → localhost:4321 |

- Sanity 项目 ID：`f33xu6t3`，Dataset：`production`
- 改了 `studio/schemaTypes/` 后需 `cd studio && npx sanity deploy`
- 发新闻：在 Sanity Studio 点「发布」，自动触发 GitHub Actions 构建部署
