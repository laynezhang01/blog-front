import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isYesterday from 'dayjs/plugin/isYesterday';
dayjs.extend(isYesterday);
dayjs.extend(isBetween);

/**
 * 时间美化
 * @param time 时间戳或者字符串
 */
export const timeFormat = (time: number | string | Date) => {
    const timeForDayjs = dayjs(time);
    const now = dayjs();

    const dayOfMinute = timeForDayjs.isSame(now, 'minute');
    if (dayOfMinute) {
        return '刚刚';
    }

    const dayOfHour = timeForDayjs.isSame(now, 'hour');
    if (dayOfHour) {
        return now.diff(timeForDayjs, 'm') + '分钟前';
    }

    const dayOfToday = timeForDayjs.isSame(now, 'day');
    if (dayOfToday) {
        return now.diff(timeForDayjs, 'h') + '小时前';
    }

    const dayIsYesterday = timeForDayjs.isYesterday();
    if (dayIsYesterday) {
        return '昨天';
    }

    const dayOfTwoDays = timeForDayjs.isBetween(
        now.subtract(2, 'day').startOf('day'),
        now,
        'ms',
        '[]'
    );
    if (dayOfTwoDays) {
        return '前天';
    }

    const dayOfOneMonth = timeForDayjs.isBetween(
        now.subtract(1, 'month').startOf('day'),
        now,
        'ms',
        '[]'
    );
    if (dayOfOneMonth) {
        return now.diff(timeForDayjs, 'day') + '天前';
    }

    const dayOfYear = timeForDayjs.isBetween(
        now.subtract(12, 'year').startOf('day'),
        now,
        'ms',
        '[]'
    );
    if (dayOfYear) {
        return now.diff(timeForDayjs, 'month') + '个月前';
    }

    return timeForDayjs.format('YYYY-MM-DD HH:mm:ss');
};
