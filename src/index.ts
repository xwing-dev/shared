export * from './contracts/gen/auth';
export {
	Role,
	GetAccountRequestDto,
	GetAccountResponseDto,
	ACCOUNT_V1_PACKAGE_NAME,
	AccountServiceClient,
	AccountServiceController,
	AccountServiceControllerMethods,
	ACCOUNT_SERVICE_NAME,
} from './contracts/gen/account';
export * from './contracts/proto/paths';
export * from './exceptions/rpc';
export * from './events';