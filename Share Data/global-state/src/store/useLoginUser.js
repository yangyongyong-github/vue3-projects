import { reactive, readonly } from "vue"
import * as userServ from "../api/user"

const state = reactive({
    user: null,
    loading: false
});

export const loginUserStore = readonly(state);// 便于各个地方使用，只读属性

//login 
export async function login(loginId, loginPwd) {
    state.loading = true;
    const user = await userServ.login(loginId, loginPwd);
    state.user = user;
    state.loading = false;
}
// Exit
export async function loginOut() {
    state.loading = true;
    await userServ.loginOut();
    state.loading = false;
    state.user = null;
}

// recover login state
export async function whoAmI() {
    state.loading = true;
    const user = await userServ.whoAmI();
    state.loading = false;
    state.user = user;
}