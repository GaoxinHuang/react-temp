// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// Jest: SyntaxError: Unexpected token 'export' on "@bundled-es-modules/js-levenshtein"
// jest export bug 影响到 https://github.com/mswjs/msw/issues/1810, 暂时没有找到合适的解决方法
// import { server } from './mock-api/server';

// function emptyLog() {
//   // Log nothing to avoid react query noise in unit tests
// }

// beforeAll(() => {
//   server.listen({ onUnhandledRequest: 'warn' });
// });
// afterEach(() => {
//   server.resetHandlers();
//   jest.clearAllMocks();
//   // cleanup();
// });
// afterAll(() => server.close());
