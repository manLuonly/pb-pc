import { Message } from "element-ui";
//成功的消息提示
const showMsg = message => {
   Message({
      message,
      type: "success"
   });
};
//失败的消息提示
const errorMsg = message => {
   Message({
      message,
      type: "error"
   });
};
export { showMsg, errorMsg };
