import Building from '../building/building';
import Detail from '../detail/detail';
import Floor from '../floor/floor';
import Household from '../household/household';
import Location from '../location/location';
import Parking from '../parking/parking';
import classes from './information.module.scss';

const Information = () => {
  return (
    <>
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
    </>
  );
};

export default Information;
