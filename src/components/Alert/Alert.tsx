import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import styles from './alert.module.scss';

type AlertProps = {
  variant?: 'primary' | 'secondary';
  type: 'error' | 'success';
  message: string;
};

export const Alert = ({ variant = 'primary', type, message }: AlertProps) => {
  let className = `${styles.alert} ${styles[`alert--${type}`]}`;
  if (variant === 'secondary') {
    className = `${className} ${styles['alert--secondary']}`;
  }

  const iconClassName = `${styles.icon} ${styles[`icon--${type}`]}`;

  let icon;
  if (type === 'error') {
    icon = <ErrorOutlineIcon className={iconClassName} />;
  } else {
    icon = <CheckCircleOutlineIcon className={iconClassName} />;
  }
  return (
    <p
      role='alert'
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      className={className}
    >
      {icon}
      {message}
    </p>
  );
};
