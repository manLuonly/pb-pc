//日期组件 设置不能选择今天以后的日期
export default {
   data() {
      return {
         disabledTodayPickerOption: {
            disabledDate(time) {
               return time.getTime() > Date.now();
            }
         }
      };
   }
};
