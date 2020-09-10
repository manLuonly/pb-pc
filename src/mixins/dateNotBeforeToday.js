//禁用今天之后的时间  -- 用于时间组件
export default {
    methods: {
        disabledAfterToday(date) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            return date > today;
        }
    }
};
