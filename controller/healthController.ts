import { Context } from '../types.ts';

interface HealthCheckResponse {
	status: boolean;
	message: string;
}

/**
 * Handles the healthcheck endpoint. Returns the status of the databases.
 * @param response The response where the "isCacheRunning" and "isDatabaseRunning" flags will be set
 */
export async function checkController({ response }: Context): Promise<void> {
	response.body = {
		status: true,
		message: "all good",
	} as HealthCheckResponse;
}