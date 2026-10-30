import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'page', title: '页面', type: 'document',
  fields: [
    defineField({name: 'title', title: '页面标题', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'slug', title: 'URL 别名（如 about）', type: 'slug', options: {source: 'title'}, validation: (r) => r.required()}),
    defineField({name: 'seoDescription', title: 'SEO 描述', type: 'text', rows: 2}),
    defineField({name: 'body', title: '页面内容', type: 'array', of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}]}),
  ],
})
