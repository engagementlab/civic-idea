import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "client",
  outDir: './dist/static',
  routes: {
  },
  appPort: 4200,
  puppeteerLaunchOptions: {
    devtools:true
  }
};