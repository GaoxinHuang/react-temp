import { handlers } from './handlers';
import { setupServer, SetupServerApi } from 'msw/node';

export const server: SetupServerApi = setupServer(...handlers);
