import { mkdir, readFile, writeFile } from 'node:fs/promises';
const paths = ['company','company/profile','company/philosophy','business','business/machinery','business/infrastructure','business/energy','sustainability','ir','recruit','news','news/notice','news/1','news/2','news/3','news/4','contact','privacy'];
const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
for (const path of paths) {
  const dir = new URL(`../dist/${path}/`, import.meta.url);
  await mkdir(dir, {recursive:true});
  await writeFile(new URL('index.html',dir), html);
}
console.log(`Created ${paths.length} directly accessible page entries.`);
