import Building from '../building/building';
import Detail from '../detail/detail';
import Floor from '../floor/floor';
import Household from '../household/household';
import Location from '../location/location';
import Parking from '../parking/parking';
import classes from './information.module.scss';

const Information = () => {
  return (
    <div className={classes.basic_wrapper}>
      <div className={classes.wrapper}>
        <Detail />
        <Location />
        <Building />
        <div className={classes.detail_button}>+ 詳細</div>
      </div>

      <div className={classes.wrapper}>
        images
        <Location />
        <Floor />
        <div className={classes.detail_button}>+ 詳細</div>
      </div>

      <div className={classes.wrapper}>
        images
        <Detail />
        <Location />
        <Household />
        <div className={classes.detail_button}>+ 詳細</div>
      </div>

      <div className={classes.wrapper}>
        <Parking />
      </div>

      <div className={classes.wrapper}>
        <div>推薦設計風格,實際設計價格將有專人將跟你聯絡</div>
        <div className={classes.selection}>新增設計風格 +</div>
      </div>

      <div>仍在考慮？先加入願望清單，或分享給至親好友</div>
      <div className={classes.selection}>下一步</div>
    </div>
  );
};

export default Information;
