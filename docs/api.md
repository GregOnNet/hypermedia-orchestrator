## Usage

```typescript
import { Api, Action } from '@hypermedia/api';

let bakeryApi = 'http://localhost:3001';
let cookieApi = 'http://localhost:3000';

let api = new Api();
let receipe = { incridients: ['water', 'eggs', 'choclate'] };

api.establish([bakeryApi, cookieApi])
   .subscribe(
     resolve: ResolvedInterfaces => {
      resolve.create('application/vnd.cookie+json', receipe)
             .map(/* */)
             .subscribe(response => resolve.remove('application/vnd.cookie+json', reponse));
      // OR
      resolve.remove('application/vnd.cookie+json', receipe);
      // OR
      resolve.update('application/vnd.cookie+json', receipe);
      // OR
      resolve.getAll('application/vnd.cookie+json');
      // OR
      resolve.query('application/vnd.cookie+json');
    },
    err  => console.error(err),
    ()   => done()
  );
```