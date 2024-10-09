/**
 * try-catch that returns a value instead of throwing an error.
 *
 * @param fn async function to execute
 * @param onError use this if you want to handle the error
 *  or return a default value
 * @returns the result of the function or the default value
 *
 * @example
 * ```ts
 * const result = await tryCatch(async () => {
 *   return await fetchUserName();
 * }, (e) => {
 *   // handle error
 *   return 'anonymous';
 * });
 * ```
 */
export const tryCatch = async <T, R>(
	fn: () => Promise<T>,
	onError?: (e: unknown) => R,
) => {
	try {
		return await fn();
	} catch (e: unknown) {
		return onError?.(e) ?? (null as R);
	}
};
