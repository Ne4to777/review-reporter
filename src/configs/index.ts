export type Config = {
    query: string
    queuesToIgnore: string[]
}

export default ({
    query: 'Assignee: me() and Resolution: fixed and Status: Closed and Resolved: >2021-10-01',
    queuesToIgnore: ['HRMEDICINE']
}) as Config;
