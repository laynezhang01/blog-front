import pinyin from 'tiny-pinyin';

export const cnToPinyin = (str: string) => {
    const chineseReg = /[\u4e00-\u9fa5]/g;
    return (
        str
            .replace(chineseReg, (match, idx, str) => {
                const isFirst = idx === 0;
                const isLast = idx === str.length - 1;
                const pinStr = pinyin.convertToPinyin(match);
                const nextStr = str[idx + 1];
                if (isFirst) {
                    return nextStr ? `${pinStr}-` : pinStr;
                } else if (isLast) {
                    return `-${pinStr}`;
                }
                return `-${pinStr}-`;
            }) // 中文转拼音
            .toLowerCase()
            .trim() // 去掉首尾空格
            .replace(/\s+/g, '-') // 空格替换为 -
            .replace(/&/g, '-and-') // 替换 & 为 'and'
            .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
            // 多分割会转为单分割
            .replace(/\-\-+/g, '-')
    );
};
