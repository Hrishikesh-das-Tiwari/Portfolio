import { FiFigma } from 'react-icons/fi';
import { FiSlack } from 'react-icons/fi';
import { SiVisualstudiocode } from 'react-icons/si';
import { RxNotionLogo } from 'react-icons/rx';
import classes from './Css Modules/Tools.module.css';
import { memo } from 'react';

function Tools() {
  return (
    <div id={classes.section4} className="tools">
      <div className={`container text-center ${classes.tools}`}>
        <div className={classes['tool-head']}>
          Tools I use for my daily work ✦
        </div>

        <div className="row">
          <div className="col-md-4 col-xs-12">
            <div className={`${classes['tool-data']} pt-3 `}>
              The best way to stay on top of my work is by using these four
              essential tools, either working solo or collaboratively in team.
            </div>
          </div>

          <div className="col-md-8 col-xs-12 ">
            <div className={`float-right ${classes.tool}`}>
              <FiFigma className={classes.icon} />
              <FiSlack className={classes.icon} />
              <RxNotionLogo className={classes.icon} />
              <SiVisualstudiocode className={classes.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Tools);
