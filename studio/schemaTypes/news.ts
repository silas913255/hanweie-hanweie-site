import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'news', title: '新闻', type: 'document',
  fields: [
    defineField({name: 'title', title: '标题', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'slug', title: 'URL 别名', type: 'slug', options: {source: 'title', maxLength: 96}, validation: (r) => r.required()}),
    defineField({name: 'publishedAt', title: '发布时间', type: 'datetime', initialValue: () => new Date().toISOString()}),
    defineField({name: 'coverImage', title: '封面图', type: 'image', options: {hotspot: true}}),
    defineField({name: 'excerpt', title: '摘要', type: 'text', rows: 3}),
    defineField({name: 'body', title: '正文', type: 'array', of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}]}),
  ],
  preview: {select: {title: 'title', subtitle: 'publishedAt', media: 'coverImage'}},
})
