import { provideState, provideLoginUserStore } from "./useLoginUser"
// 继续导入其他共享数据模块...
// import { provideStore as provideNewsStore } from "./useNews"

export default function provideStore(app) {
    provideLoginUserStore(app);
    // 继续注入其他共享数据
    // provideNewsStore(app);
}