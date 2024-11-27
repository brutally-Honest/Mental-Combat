/**
 * Represents a tuple containing either an Error or data result
 * First element is Error if operation failed, null if successful
 * Second element is data if operation succeeded, null if failed
 */
type Result<T> = [Error | null, T | null];

/**
 * Safely executes a promise or a direct value and returns a Result tuple
 * @param input - The input to execute (could be a promise or a direct value)
 * @returns A tuple containing either [null, data] on success or [error, null] on failure
 */
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

export { noBreak, Result };
