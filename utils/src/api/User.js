import request from '../request';
import md5 from 'js-md5';

export default class UserAPI {
  /**
   * 用户登录
   * @param params
   * @returns {AxiosPromise}
   */
  static login = data => {
    return request({
      url: '/user/v1/login',
      method: 'post',
      data
    })
  }

  /**
   * 发送短信
   * @param mobile
   * @returns {AxiosPromise}
   */
  static sendMSM = mobile => {
    const timestamp = new Date().getTime()
    return request({
      url: `/user/v1/sms-code`,
      method: 'post',
      data: {
        mobile,
        timestamp,
        secret: md5(`${mobile}${timestamp}qplab5de9fdtuna7dd9`)
      }
    })
  }
}
