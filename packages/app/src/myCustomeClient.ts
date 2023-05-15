import { GitlabCIClient } from '@immobiliarelabs/backstage-plugin-gitlab';

export class CustomGitlabCIClient extends GitlabCIClient {
    // Override methods
    async getPipelineSummary(projectID: string | undefined): Promise<PipelineSummary | undefined> {
        this.callApi(...)
        .
        .
        .
    }
}
