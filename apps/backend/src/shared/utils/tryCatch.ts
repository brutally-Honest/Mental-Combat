
type Result<T> = [Error | null, T | null];

async function noBreak<T>(input: Promise<T> | T): Promise<Result<T>> {
    try {
        const result = input instanceof Promise ? await input : input;
        return [null, result];
    } catch (error) {

        if (error instanceof Error) {
            return [error, null];
        }
        return [new Error(String(error)), null];
    }
}

export { noBreak };
