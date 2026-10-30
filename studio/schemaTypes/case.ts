import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'case', title: '客户案例', type: 'document',
  fields: [
    defineField({name: 'title', title: '案例标题', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'slug', title: 'URL 别名', type: 'slug', options: {source: 'title', maxLength: 96}, validation: (r) => r.required()}),
    defineField({name: 'client', title: '客户名称', type: 'string'}),
    defineField({name: 'industry', title: '行业', type: 'string', options: {list: ['制造', '零售', '金融', '医疗', '教育', '互联网', '其他']}}),
    defineField({name: 'coverImage', title: '封面图', type: 'image', options: {hotspot: true}}),
    defineField({name: 'summary', title: '案例简介', type: 'text', rows: 3}),
    defineField({name: 'body', title: '详细内容', type: 'array', of: [{type: 'block'}, {type: 'image', options: {hotspot: true}}]}),
  ],
  preview: {select: {title: 'title', subtitle: 'client', media: 'coverImage'}},
})
