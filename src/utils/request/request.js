const baseUrl = 'https://jobs-api.squareboat.info/api/v1'

export const REQUEST = {
    LOGIN: baseUrl + '/auth/login',
    GET_POSTED_JOBS: baseUrl + '/recruiters/jobs',
    GET_SINGLE_POST: baseUrl + '/recruiters/jobs/{job_id{/candidates'
}