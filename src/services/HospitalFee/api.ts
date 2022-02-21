// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

export async function getICD10(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  let pagination = {
    /** 当前的页码 */
    // current?: number;
    page: params.current,
    /** 页面的容量 */
    //pageSize?: number;
    rows: params.pageSize,
    //   /** 排序列 */
    //   sidx: string;
    //   /** 排序类型 */
    //   sord: string;
    //   /** 总记录数 */
    //   records?: number;
    //   /** 总页数 */
    //   total?: number;
  };
  return request<ZMZB.ICD10Item>('/zmzb/LR_CodeDemo/HospitalFee/GetICD', {
    method: 'GET',
    // params: {
    //   ...params,
    // },
    // ...(options || {}),
    params: { pagination: JSON.stringify(pagination), queryJson: '' },
  });
}
