import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from "./Avatar.module.scss";
import MenuPopper from "../../../../../components/PopperWrapper/MenuPopper";
import Image from "../../../../../components/Image";
import images from "../../../../../assets";
import { Link } from "react-router-dom";
import MenuItem from "../../../../../components/PopperWrapper/MenuItem";

const cx = classNames.bind(styles);

function Avatar({ children, userResult = {} }) {
  const user = userResult?.user || {};
  const profile = userResult?.profile || {};

  const fullname = user.fullname || user.username || "Người dùng";

  const avatar = profile.avatar || images.noImage;

  const username = user.username || user.email?.split("@")[0] || "user";

  return (
    <div className={cx("wrapper")}>
      <Tippy
        interactive
        appendTo="parent"
        placement="bottom-end"
        duration={[200]}
        delay={[50]}
        offset={[0, 10]}
        trigger="click"
        render={(attrs) => (
          <div className={cx("Menu-list")} tabIndex="-1" {...attrs}>
            <MenuPopper>
              <div className={cx("user")}>
                <div className={cx("user-inner")}>
                  <Image
                    className={cx("avatar-img")}
                    src={avatar}
                    alt="avatar"
                  />
                </div>

                <Link to={`/@${username}`} className={cx("use-description")}>
                  <h3 className={cx("name")}>{fullname}</h3>
                  <span className={cx("username")}>@{username}</span>
                </Link>
              </div>
              <MenuItem username={username} />
            </MenuPopper>
          </div>
        )}
      >
        {children}
      </Tippy>
    </div>
  );
}

export default Avatar;
