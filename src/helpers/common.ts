import {existsSync, promises as fs} from 'fs';

import type {
    ReportWrite,
} from '.';

export type GetReportName = () => string
export const getReportName: GetReportName = () => {
    const date = new Date();
    return `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}__${
        date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`;
};

export const reportWrite: ReportWrite = async content => {
    const reportsPath = './reports';
    if (!existsSync(reportsPath)) await fs.mkdir(reportsPath);
    return fs.writeFile(`${reportsPath}/${getReportName()}.html`, content, 'utf8');
};
