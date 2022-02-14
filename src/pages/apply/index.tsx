import type { FC } from 'react';
import React, { useState } from 'react';
import { Card, Col, Popover, Row, message, Input, Modal } from 'antd';
import ProForm, {
  ProFormDateRangePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormDatePicker,
  ProFormFieldSet,
  ProFormTextArea,
} from '@ant-design/pro-form';
import ICD10Form from "@/pages/apply/components/ICD10Form";
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import Mock from 'mockjs';

const ApplyIndex: FC<Record<string, any>> = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <PageContainer content="直免直报申请">
      <Card bordered={false}>
        <ProForm layout="horizontal">
          <Row gutter={16}>
            <Col lg={8} md={12} sm={24}>
              <ProFormText
                name="taa_Name"
                label="用血者姓名"
                placeholder=""
                width="sm"
                rules={[{ required: true, message: '请输入姓名' }]}
              />
            </Col>
            <Col lg={8} md={12} sm={24}>
              <ProFormSelect
                name="taa_identity_type"
                label="证件类型"
                placeholder=""
                width="sm"
                showSearch
                request={async ({ keyWords }) => {
                  //   await waitTime(1000);
                  return Mock.mock({
                    'data|1-10': [
                      {
                        value: '@id',
                        label: '@name',
                      },
                    ],
                  }).data.concat({
                    value: keyWords,
                    label: '目标_target',
                  });
                }}
                rules={[{ required: true, message: '请选择证件类型' }]}
              />
            </Col>
            <Col lg={8} md={12} sm={24}>
              <ProFormText
                name="taa_IDCard"
                label="证件号"
                placeholder=""
                width="sm"
                rules={[{ required: true, message: '请输入证件号' }]}
              />
            </Col>
            <Col lg={8} md={12} sm={24}>
              <ProFormSelect
                name="taa_Sex"
                label="性别"
                placeholder=""
                width="sm"
                valueEnum={{ 0: '女', 1: '男' }}
                rules={[{ required: true, message: '请选择性别' }]}
              />
            </Col>
            <Col lg={8} md={12} sm={24}>
              <ProFormSelect name="taa_Hospital" label="用血机构" placeholder="" width="sm" />
            </Col>
            <Col lg={8} md={12} sm={24}>
              <ProFormSelect
                name="taa_useBlood_place"
                label="用血者归属地"
                placeholder=""
                width="sm"
              />
            </Col>
            <Col lg={8} md={12} sm={24}>
              <ProFormDatePicker
                name="taa_AppConfirmDate"
                label="报销时间"
                placeholder=""
                width="sm"
              />
            </Col>
            <Col lg={8} md={12} sm={24}>
              <ProFormText
                name="taa_HISID"
                label="住院号"
                placeholder=""
                width="sm"
                rules={[{ required: true, message: '请输入住院号' }]}
              />
            </Col>
            <Col lg={8} md={12} sm={24}>
              <ProFormFieldSet
                label="年龄"
                name="age"
                type="group"
                rules={[
                  {
                    required: true,
                    validator: async (_, value) => {
                      const [taa_Age, taa_AgeUnit] = value || [];
                      if (!taa_Age) {
                        throw new Error('请输入年龄');
                      }
                      if (!taa_AgeUnit) {
                        throw new Error('请选择年龄单位');
                      }
                    },
                  },
                ]}
              >
                <ProFormText name="taa_Age" width="xs" placeholder="" />
                <ProFormSelect name="taa_AgeUnit" width="xs" placeholder="" />
              </ProFormFieldSet>
            </Col>
            <Col lg={8} md={12} sm={24}>
              <ProFormText
                name="taa_Invoice"
                label="发票号"
                placeholder=""
                width="sm"
                rules={[{ required: true, message: '请输入发票号' }]}
              />
            </Col>
            <Col lg={8} md={12} sm={24}>
              {/* <ProForm.Item width="sm">
                <Input
                  name="taa_CinicalDiagnosisID"
                  placeholder=""
                  width="sm"
                  onClick={showModal}
                />
              </ProForm.Item> */}
              <ICD10Form></ICD10Form>
              {/*<ProFormText*/}
              {/*  name="taa_CinicalDiagnosisID"*/}
              {/*  label="主要诊断"*/}
              {/*  placeholder=""*/}
              {/*  width="sm"*/}
              {/*  // disabled*/}
              {/*  onFocus={showModal}*/}
              {/*/>*/}
            </Col>
            <Col lg={8} md={12} sm={24}>
              <ProFormText name="taa_Payee" label="领款人" placeholder="" width="sm" />
            </Col>
            <Col lg={8} md={12} sm={24}>
              <ProFormText name="taa_PayeeTel" label="领款人手机号" placeholder="" width="sm" />
            </Col>
          </Row>
        </ProForm>
      </Card>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </PageContainer>
  );
};

export default ApplyIndex;
