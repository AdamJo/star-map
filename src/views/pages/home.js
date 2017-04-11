import { h } from "preact";
import { Link } from "preact-router";
import Card from "../tags/card";

import styles from "./home.scss";

export default function(props) {
  return (
    <div className={styles.home}>
      <Card>
        Hello!!
      </Card>
    </div>
  );
}
