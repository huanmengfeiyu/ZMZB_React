import { PlusOutlined } from '@ant-design/icons';
import { Button, Drawer, Input, Modal, Popconfirm, Table } from 'antd';
import type { FC } from 'react';
import React, { useState } from 'react';
import ProForm, { ModalForm, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { FormattedMessage, useIntl } from 'umi';
import { getICD10 } from '@/services/HospitalFee/api';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';

const ICD10Form: FC = () => {
  const columns: ProColumns<ZMZB.ICD10Item>[] = [
    {
      title: '诊断代码',
      dataIndex: 'CinicalDiagnosisID',
      key: 'CinicalDiagnosisID',
      width: '20%',
    },
    {
      title: '诊断名称',
      dataIndex: 'CinicalDiagnosisName',
      key: 'CinicalDiagnosisName',
      width: '20%',
    },
  ];
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

  const intl = useIntl();
  return (
    <ProForm.Item label="主要诊断">
      <Input placeholder="" name="CinicalDiagnosisName" onClick={showModal} />
      <Input placeholder="" name="taa_CinicalDiagnosisID" style={{ display: 'none' }} />
      <Modal
        title="主要诊断选择"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
        width={1000}
      >
        <ProTable<ZMZB.ICD10Item>
          headerTitle={intl.formatMessage({
            id: 'page.searchTable.ICD10.title',
            defaultMessage: 'ICD10列表',
          })}
          rowKey="CinicalDiagnosisID"
          search={{
            labelWidth: 'auto',
          }}
          // toolBarRender={() => [
          //   <Button
          //     type="primary"
          //     key="primary"
          //     onClick={() => {
          //       handleModalVisible(true);
          //     }}
          //   >
          //     <PlusOutlined />{' '}
          //     <FormattedMessage id="pages.searchTable.new" defaultMessage="New" />
          //   </Button>,
          // ]}
          request={getICD10}
          columns={columns}
          // rowSelection={{
          //   onChange: (_, selectedRows) => {
          //     setSelectedRows(selectedRows);
          //   },
          // }}
        />
        {/* {selectedRowsState?.length > 0 && (
            <FooterToolbar
              extra={
                <div>
                  <FormattedMessage id="pages.searchTable.chosen" defaultMessage="Chosen" />{' '}
                  <a style={{ fontWeight: 600 }}>{selectedRowsState.length}</a>{' '}
                  <FormattedMessage id="pages.searchTable.item" defaultMessage="项" />
                  &nbsp;&nbsp;
                  <span>
                    <FormattedMessage
                      id="pages.searchTable.totalServiceCalls"
                      defaultMessage="Total number of service calls"
                    />{' '}
                    {selectedRowsState.reduce((pre, item) => pre + item.callNo!, 0)}{' '}
                    <FormattedMessage id="pages.searchTable.tenThousand" defaultMessage="万" />
                  </span>
                </div>
              }
            >
              <Button
                onClick={async () => {
                  await handleRemove(selectedRowsState);
                  setSelectedRows([]);
                  actionRef.current?.reloadAndRest?.();
                }}
              >
                <FormattedMessage
                  id="pages.searchTable.batchDeletion"
                  defaultMessage="Batch deletion"
                />
              </Button>
              <Button type="primary">
                <FormattedMessage
                  id="pages.searchTable.batchApproval"
                  defaultMessage="Batch approval"
                />
              </Button>
            </FooterToolbar>
          )} */}
        {/* </PageContainer> */}
      </Modal>
    </ProForm.Item>
  );
};

export default ICD10Form;
