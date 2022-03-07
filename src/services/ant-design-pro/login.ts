// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取验证码 GET /api/User/getVierificationCode */
export async function getVierificationCode(options?: { [key: string]: any }) {
  return request<API.VierificationCode>('/api/User/getVierificationCode', {
    method: 'GET',
    params: {},
    ...(options || {}),
  });
}

/** 发送验证码 POST /api/login/captcha */
export async function getFakeCaptcha(
  params: {
    // query
    /** 手机号 */
    phone?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.FakeCaptcha>('/api/login/captcha', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
