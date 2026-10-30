import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID || 'f33xu6t3',
  dataset: import.meta.env.SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: import.meta.env.SANITY_TOKEN || undefined,
  useCdn: false, // 构建时取最新已发布内容
  perspective: 'published',
});

const builder = imageUrlBuilder(client);
export const img = (src: any) => builder.image(src).auto('format');

export const fmtDate = (d?: string) =>
  d ? new Date(d).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }) : '';

export const getNews = () =>
  client.fetch(`*[_type=="news" && defined(slug.current)]|order(publishedAt desc){
    title, "slug": slug.current, publishedAt, excerpt, coverImage, body }`);

export const getCases = () =>
  client.fetch(`*[_type=="case" && defined(slug.current)]|order(_createdAt desc){
    title, "slug": slug.current, client, industry, summary, coverImage, body }`);

export const getPages = () =>
  client.fetch(`*[_type=="page" && defined(slug.current)]{
    title, "slug": slug.current, seoDescription, body }`);
