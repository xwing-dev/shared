import { RpcException } from "@nestjs/microservices";
import { RpcStatus } from "./rpc-status.enum";

export enum RpcDefaultMessages {
	NOT_FOUND = "Not found",
	UNAUTHORIZED = "Unauthorized",
	FORBIDDEN = "Forbidden",
	INTERNAL_SERVER_ERROR = "Internal server error",
	TOO_MANY_REQUESTS = "Too many requests",
	BAD_REQUEST = "Bad request",
}

class BaseRpcException extends RpcException {
	constructor(code: RpcStatus, message: string, data?: any) {
		super({ code, details: message, data });
	}
}

export class BadRequestRpcException extends BaseRpcException {
	constructor(message: string = RpcDefaultMessages.BAD_REQUEST) {
		super(RpcStatus.INVALID_ARGUMENT, message);
	}
}

export class UnauthorizedRpcException extends BaseRpcException {
	constructor(message: string = RpcDefaultMessages.UNAUTHORIZED) {
		super(RpcStatus.UNAUTHENTICATED, message);
	}
}

export class ForbiddenRpcException extends BaseRpcException {
	constructor(message: string = RpcDefaultMessages.FORBIDDEN) {
		super(RpcStatus.PERMISSION_DENIED, message);
	}
}

export class NotFoundRpcException extends BaseRpcException {
	constructor(message: string = RpcDefaultMessages.NOT_FOUND) {
		super(RpcStatus.NOT_FOUND, message);
	}
}

export class TooManyRequestsRpcException extends BaseRpcException {
	constructor(message: string = RpcDefaultMessages.TOO_MANY_REQUESTS) {
		super(RpcStatus.RESOURCE_EXHAUSTED, message);
	}
}

export class UnexpectedErrorRpcException extends BaseRpcException {
	constructor(message: string = RpcDefaultMessages.INTERNAL_SERVER_ERROR) {
		super(RpcStatus.INTERNAL, message);
	}
}
