import { expect } from 'chai';
import { Api } from './hypermedia-flow';

describe('Instantiate Api', () => {
  let api: Api;

  beforeEach(() => api = new Api());

  it('receives Hi', () => {
    expect(api.greet()).eq('Hi');
  });
});