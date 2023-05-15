import {
  ScmIntegrationsApi,
  scmIntegrationsApiRef,
  ScmAuth,
} from '@backstage/integration-react';
import {
  AnyApiFactory,
  configApiRef,
  createApiFactory,
} from '@backstage/core-plugin-api';

import { GitlabCIApiRef } from '@immobiliarelabs/backstage-plugin-gitlab';
import { CustomGitlabCIClient } from '@immobiliarelabs/backstage-plugin-gitlab';
import { discoveryApiRef } from '@backstage/core-plugin-api';


/*export const apis: AnyApiFactory[] = [
    createApiFactory({
        api: GitlabCIApiRef,
        deps: { configApi: configApiRef, discoveryApi: discoveryApiRef },
        factory: ({ configApi, discoveryApi }) =>
            CustomGitlabCIClient.setupAPI({
                discoveryApi,
                codeOwnersPath: configApi.getOptionalString(
                    'gitlab.defaultCodeOwnersPath'
                ),
            }),
    }),
];*/





export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  ScmAuth.createDefaultApiFactory(),
];

