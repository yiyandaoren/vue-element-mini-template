import axios from 'axios'
import {MessageBox, Message} from 'element-ui'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
    baseURL:'http://localhost:3000/' , // url = base url + request url
    // timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {

        // do something before request is sent

        // if (store.getters.token) {
        //     // let each request carry token
        //     // ['X-Token'] is a custom headers key
        //     // please modify it according to the actual situation
        //     config.headers['token'] = getToken()
        // }

        // config.headers['Accept']='application/json'

        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data

        // if the custom code is not 20000, it is judged as an error.
        // if (res.code !== 0) {
        //     Message({
        //         message: res.message || 'Error',
        //         type: 'error',
        //         duration: 5 * 1000
        //     })
        //
        //     // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        //         // to re-login
        //         MessageBox.confirm('您已经登出，请重新登录或停留在此页面', '确认登出', {
        //             confirmButtonText: '重新登录',
        //             cancelButtonText: '取消',
        //             type: 'warning'
        //         }).then(() => {
        //             store.dispatch('user/resetToken').then(() => {
        //                 location.reload()
        //             })
        //         })
        //     }
        //     return Promise.reject(new Error(res.message || 'Error'))
        // } else {
        //     return res
        // }
        return res
    },
    error => {
        // console.log('err' + error) // for debug
        // Message({
        //     message: error.message,
        //     type: 'error',
        //     duration: 5 * 1000
        // })
        // return Promise.reject(error)

        if (error && error.response) {
            console.log('服务器返回的错误信息:',error.response.data)
            switch (error.response.status) {

                case 400:
                    // console.log('error:',error.response)
                    error.message = '错误请求';
                    // Toast('错误请求');
                        Message({
                            message: error.message || 'Error',
                            type: 'error',
                            duration: 5 * 1000
                        })
                    break

                case 401:

                    error.message = '未授权，请重新登录';
                    Message({
                        message: error.message || 'Error',
                        type: 'error',
                        duration: 5 * 1000
                    })

                    break

                case 403:

                    error.message = '拒绝访问';
                    ToastMessage({
                        message: error.message || 'Error',
                        type: 'error',
                        duration: 5 * 1000
                    })('拒绝访问');

                    break

                case 404:

                    error.message = '请求错误,未找到该资源';
                    Message({
                        message: error.message || 'Error',
                        type: 'error',
                        duration: 5 * 1000
                    })

                    break

                case 405:

                    error.message = '请求方法未允许';
                    Message({
                        message: error.message || 'Error',
                        type: 'error',
                        duration: 5 * 1000
                    })

                    break

                case 408:

                    error.message = '请求超时';
                    Message({
                        message: error.message || 'Error',
                        type: 'error',
                        duration: 5 * 1000
                    })

                    break

                case 500:

                    error.message = '服务器端出错';
                    Message({
                        message: error.message || 'Error',
                        type: 'error',
                        duration: 5 * 1000
                    })

                    break

                case 501:

                    error.message = '网络未实现';
                    Message({
                        message: error.message || 'Error',
                        type: 'error',
                        duration: 5 * 1000
                    })

                    break

                case 502:

                    error.message = '网络错误';
                    Message({
                        message: error.message || 'Error',
                        type: 'error',
                        duration: 5 * 1000
                    })

                    break

                case 503:

                    error.message = '服务不可用';
                    Message({
                        message: error.message || 'Error',
                        type: 'error',
                        duration: 5 * 1000
                    })

                    break

                case 504:

                    error.message = '网络超时';
                    Message({
                        message: error.message || 'Error',
                        type: 'error',
                        duration: 5 * 1000
                    })

                    break

                case 505:

                    error.message = 'http版本不支持该请求';
                    Message({
                        message: error.message || 'Error',
                        type: 'error',
                        duration: 5 * 1000
                    })

                    break

                default:

                    error.message = `连接错误${error.response.status}`;
                    // Toast(`'连接错误'${error.response.status}`);
                    Message({
                        message: error.message || 'Error',
                        type: 'error',
                        duration: 5 * 1000
                    })

            }

        } else {

            error.message = "连接到服务器失败";
            Message({
                message: error.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            })

        }


        return Promise.reject(error.message)


    }
)

export default service
