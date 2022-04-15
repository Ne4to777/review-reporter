import {info, pipe} from '../utils';
import {searchIssues} from '../api';
import configs from '../configs';
import {reportWrite} from '../helpers';
import {getEmailContent} from '../helpers/htmlLayout';

const {query, queuesToIgnore} = configs;

pipe([
    info('TASK: Get Issues By Query'),
    searchIssues,
    (issues: any) => issues.reduce((acc: any, issue: any) => {
        const queue = issue.getQueue().getKey();
        if(queuesToIgnore.includes(queue)) return acc
        if (!acc[queue]) acc[queue] = [];
        acc[queue].push({
            key: issue.getKey(),
            createdAt: issue.getCreatedAt(),
            updatedAt: issue.getUpdatedAt(),
            resolvedAt: issue.getResolvedAt(),
            summary: issue.getSummary()
        });
        return acc;
    }, {}),
    (data: any) =>
        Object
            .entries(data)
            .reduce((acc: any, [key, values]: any) => values
                .reduce((_acc: any, value: any, i: number) =>
                    `${_acc}<div>&nbsp;&nbsp;&nbsp;&nbsp;${i + 1}. ${value.summary} (<a href="https://st.yandex-team.ru/${value.key}">${value.key}</a>)</div>`,
                `${acc}<p><b>${key}:</b></p>`),
            '<h1>Отчет о проделанной работе:</h1>'),
    getEmailContent,
    reportWrite,
    info('Task is done!')
])(query);
