import {Client, expect} from '@loopback/testlab';
import {HelloAppApplication} from '../..';
import {setupApplication} from './test-helper';

describe('HelloWorldController', () => {
  let app: HelloAppApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });
  it('invokes GET /hello', async () => {
    const res = await client.get('/hello').expect(200);
    expect(res.body).to.containEql({hello: 'Hello World, hello Maria'});
  });

  after(async () => {
    await app.stop();
  });
});

