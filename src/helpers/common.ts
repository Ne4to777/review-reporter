import {existsSync, promises as fs} from 'fs';

import {mapAsync, info, pipe, reduce} from '../utils';
import configs from '../configs';

import type {
    HostsIterator,
    RunnerWithParams,
    ReportWrite,
    GetServiceInfoMap
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

export const folderizeLastLeaf = reduce((acc: any, path: string) => {
    const splits = path.split('/');
    const login = splits.pop();
    const dir = splits.join('/');
    if (!acc[dir]) acc[dir] = [];
    acc[dir].push(login);
    return acc;
}, {});

export const getServiceInfoMap: GetServiceInfoMap = xs => ({
    login: xs[2],
    folderName: xs[8].replace(/\/$/, '')
});
