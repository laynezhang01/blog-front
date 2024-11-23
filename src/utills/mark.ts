import React from 'react';
import pinyin from 'tiny-pinyin';

export interface IHeading {
    level: number;
    text: string;
    slug: string;
}

/**
 * 生成slug 会转义中文特殊字符
 * @returns {string}
 */
export const slugify = (node: React.ReactNode): string => {
    const chineseReg = /[\u4e00-\u9fa5]/g;
    return (
        node!
            .toString()
            // 拆分中文增加分割 不考虑加几个分割 下面会处理
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
    ); // Replace multiple - with single -
};

/**
 * 获取markdown headings
 * @param markdownText markdown内容
 * @param endLevel 取到几级标题
 */
export const extractMarkdownHeaders = (markdownText: string, endLevel: number = 6): IHeading[] => {
    const headersRegex = new RegExp(`^(#{1,${endLevel}})\\s(.+)$`, 'gm');
    const headersMatches = [...markdownText.matchAll(headersRegex)];

    return headersMatches.map(match => {
        const level = match[1].length;
        const text = match[2].trim();
        return {
            level,
            text,
            slug: slugify(text)
        };
    });
};
