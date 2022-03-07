import React from 'react';
import styles from '../style.less';

export type VerificationImgProps = {
  onClick: () => Promise<void>;
  imgUrl: string | '';
};

const VerificationImg: React.FC<VerificationImgProps> = (props) => {
  return (
    <div className={styles.code} onClick={props.onClick}>
      <img src={props.imgUrl} alt="刷新验证码" />
    </div>
  );
};

export default VerificationImg;
