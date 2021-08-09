// import * as dotenv from 'dotenv';
// // @ts-ignore
// import Client from '@yandex-int/stapi';
//
// import {searchIssues} from './api';
//
// dotenv.config({path: './.env'});
//
// const {STARTREK_TOKEN} = process.env;
//
// const client = new Client({
//     entrypoint: 'https://st-api.yandex-team.ru',
//     retries: 2,
//     timeout: 20000
// });
//
// const session = client.createSession({
//     token: STARTREK_TOKEN
// });
//
// // session
// //     .issues
// //     .getAll({query: 'Assignee: me() and Status: Closed and Resolved: >2021-04-01'}, (err: any, issues: any) => {
// //         if (err) {
// //             console.error(err);
// //             throw err;
// //         }
// //
// //         // console.log(issues)
// //
// //         issues.forEach((error: any, issue: any) => {
// //             console.log(issue.getKey(), issue.getCreatedAt(), issue.getUpdatedAt(), issue.getResolvedAt());
// //         });
// //     });
//
// searchIssues('Assignee: me() and Status: Closed and Resolved: >2021-04-01')
//     .then((issues: any) => {
//         issues.forEach((error: any, issue: any) => {
//             console.log(issue.getKey(), issue.getCreatedAt(), issue.getUpdatedAt(), issue.getResolvedAt());
//         });
//     });
//
// // session.queues.getAll((error: any, queues: any) => {
// //     if (error) {
// //         console.error(error);
// //         throw error;
// //     }
// //     queues.forEach((err: any, queue: any) => {
// //         console.log('%s – %s', queue.getKey(), queue.getName());
// //     });
// // });
//
// // session.issues.get('MARKETFRONTECH-2937', (err: any, issue: any) => {
// //     if (err) {
// //         console.error(err);
// //         throw err;
// //     }
// //     console.log(issue.getKey());
// // });
