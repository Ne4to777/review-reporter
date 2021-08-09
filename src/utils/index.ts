export type AnyToAnyT = (...xs: any) => any;

type IType = <T>(x: T) => T
export const I: IType = x => x;

type TType = <T, K>(x?: T) => (f:(_x?: T) => K) => K
export const T:TType = x => f => f(x);

type PipeReducer = <Arg, First, Second>(
    acc: (x: Arg) => Promise<First>, f: (x: First) => Promise<Second>
) => (x: Arg) => Promise<Second>
const pipeReducer: PipeReducer = (acc, f) => async x => f(await acc(x));

type Pipe = (xs: AnyToAnyT[]) => AnyToAnyT
export const pipe: Pipe = xs => xs.reduce(pipeReducer, I);

type Info = (msg: string) => <Arg>(x: Arg) => Arg
export const info: Info = msg => x => {
    console.log(msg);
    return x;
};
type Log = <Arg>(x: Arg) => Arg
export const log: Log = x => {
    console.log(x);
    return x;
};
