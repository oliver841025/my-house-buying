import classes from './footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <span className={classes.agree}>同意聲明</span>{' '}
        此網站儲存儲如cookie等數據，以啟用網站基本功能與行銷，個人化及分析功能。
        繼續瀏覽本網站，即表示您同意我們的聲明。 Cookie 政策
      </div>
    </div>
  );
};

export default Footer;
