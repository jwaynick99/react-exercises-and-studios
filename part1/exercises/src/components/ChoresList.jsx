import React from "react";
import classes from "./ChoresList.module.css";

export default function ChoresList() {
    let chores = ["dishes", "laundry", "make bed"];
    return (
        <div>
            <h3 className={classes.choresHeading}>To-Do</h3>
            <ul>
                <li className={classes.choresText}>{chores[0]}</li>
                <li className={classes.choresText}>{chores[1]}</li>
                <li className={classes.choresText}>{chores[2]}</li>
            </ul>
        </div>
    );
}
