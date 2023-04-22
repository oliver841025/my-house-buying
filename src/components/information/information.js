import Building from '../building/building';
import Detail from '../detail/detail';
import Floor from '../floor/floor';
import Location from '../location/location';
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

      <div>
        images
        <Location />
        <Floor />
      </div>
    </>
  );
};

export default Information;
