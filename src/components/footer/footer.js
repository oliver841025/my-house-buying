import classes from './footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      {/* <div className={classes.content}>
        <span className={classes.agree}>同意聲明</span>{' '}
        此網站儲存儲如cookie等數據，以啟用網站基本功能與行銷，個人化及分析功能。
        繼續瀏覽本網站，即表示您同意我們的聲明。 Cookie 政策
      </div> */}
      <div className={classes.arrow}>𐌡</div>
      <div className={classes.small_content}>
        <p>
          NT$12,609,900<span>/目前總價</span>
        </p>
        <p className={classes.monthly_pay}>
          NT$31,609<span>/最低月付</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
