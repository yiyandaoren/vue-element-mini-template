import request from '@/utils/request'


export function list(data) {
    return request({
        url: `api/demo/list`,
        method: 'post',
        data
    })
}

export function list2(query) {
    return request({
        url: `/api/demo/list`,
        method: 'get',
        params:query
    })
}