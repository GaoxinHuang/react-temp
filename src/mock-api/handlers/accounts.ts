import { http, HttpResponse, HttpHandler } from 'msw';

export const getUsers: HttpHandler = http.get('/api/users', (resolver) => {
  // resolver.request.body
  // return res(ctx.status(200), ctx.delay(), ctx.json({ ...{ data: accountsWithoutSNT } }));
  return HttpResponse.json([
    {
      id: 1,
      name: 'test',
    },
  ]);
});
