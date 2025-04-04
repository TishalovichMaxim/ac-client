import { PageType, SetPageType } from "../../page-type"
import { removeAccessToken, removeRefreshToken } from "../auth/auth"

function logout(setPageType: SetPageType) {
    removeAccessToken()
    removeRefreshToken()
    setPageType(PageType.SignIn)
}

export { logout }
