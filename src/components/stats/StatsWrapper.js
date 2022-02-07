import React from "react";
import { UserStats } from "./UserStats";
import { GRAY, GREEN, YELLOW } from "../../helpers/constants";
import "./stats.css";

export const StatsWrapper = ({user}) => {
  return (
    <div className="stats-wrapper">
      <UserStats bgc={GREEN}>
        CURRENT STREAK
        <br />
        <span className="stat">{user.current_streak}</span>
      </UserStats>
      <UserStats bgc={YELLOW}>
        BEST STREAK
        <br />
        <span className="stat">{user.best_streak}</span>
      </UserStats>
      <UserStats bgc={GRAY}>
        TOTAL WINS
        <br />
        <span className="stat">{user.wins}</span>
      </UserStats>
      <UserStats bgc={YELLOW}>
        TOTAL LOSSES
        <br />
        <span className="stat">{user.losses}</span>
      </UserStats>
      <UserStats bgc={GREEN}>
        WIN %AGE
        <br />
        <span className="stat">{user.win_percentage}</span>
      </UserStats>
    </div>
  );
};
