import * as dotenv from 'dotenv';
// @ts-ignore
import Client from '@yandex-int/stapi';

dotenv.config({path: './.env'});

const {STARTREK_TOKEN} = process.env;

const client = new Client({
    entrypoint: 'https://st-api.yandex-team.ru',
    retries: 2,
    timeout: 20000
});

const session = client.createSession({
    token: STARTREK_TOKEN
});

const paginate = (resolve: any, reject: any) => (acc: any[]) => (err: any, _issues: any) => {
    if (err) throw reject(err);
    if (_issues) {
        // if (!_issues.hasNext) console.log(_issues);
        const result = acc.concat(..._issues.toArray());
        if (_issues.hasNext && _issues.hasNext()) {
            _issues.fetchAll(paginate(resolve, reject)(result));
        } else {
            resolve(result);
        }
    }
};

export const searchIssues = (query: string): Promise<any> => new Promise((resolve, reject) => session
    .issues
    .getAll({query}, (err: any, issues: any) => err
        ? reject(err)
        : issues.fetchAll((_err: any, all: any): any => _err ? reject(_err) : resolve(all))
    ));
