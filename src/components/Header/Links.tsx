import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.scss";

const Links: React.FC = () => {
    return (
        <>
            <NavLink to={"/"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Simple
            </NavLink>
            <NavLink to={"/fancy"} className={styles.Link} activeClassName={styles.LinkActive} exact>
                Fancy
            </NavLink>
        </>
    );
};

export default Links;
