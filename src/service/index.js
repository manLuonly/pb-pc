/**
 * 所有接口存放处
 */
import axios from "@/api";

//example
export const demo = axios({
    method: "get",
    url:
        "/movieOnInfoList?token=&optimus_uuid=91DA1510F1B311EA98BE01FEC09733F2C8C007C48FD340129D2B60BE60C9819E&optimus_risk_level=71&optimus_code=10",
    isShowMsg: false,
    axiosOptions: {
        headers: {
            dad: 66
        }
    }
});
