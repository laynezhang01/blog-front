import React from 'react';
import pinyin from 'tiny-pinyin';

/**
 * 生成slug 会转义中文特殊字符
 * @returns {string}
 */
export const slugify = (node: React.ReactNode): string => {
  const chineseReg = /[\u4e00-\u9fa5]/g;
  return (
    node!
      .toString()
      // 将中文转换为拼音并添加分隔符
      .replace(chineseReg, (match, idx, str) => {
        const pinStr = pinyin.convertToPinyin(match); // 中文转拼音
        const prevChar = str[idx - 1];
        const nextChar = str[idx + 1];

        // 如果前一个字符是分隔符或不存在，则直接添加拼音
        const prefix = !prevChar || /[-\s]/.test(prevChar) ? '' : '-';
        // 如果后一个字符是分隔符或不存在，则直接结束
        const suffix = !nextChar || /[-\s]/.test(nextChar) ? '' : '-';

        return `${prefix}${pinStr}${suffix}`;
      })
      .toLowerCase() // 转为小写
      .trim() // 去掉首尾空格
      .replace(/\s+/g, '-') // 空格替换为 -
      .replace(/&/g, '-and-') // 替换 & 为 'and'
      .replace(/[^\w\-]+/g, '') // 移除所有非单词字符（保留 -）
      .replace(/^-+|-+$/g, '') // 去掉开头和结尾的多余分隔符
      .replace(/--+/g, '-') // 合并连续的分隔符为单个 -
  );
};
