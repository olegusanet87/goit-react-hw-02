import clsx from "clsx"
import css from "./Options.module.css"

export default function Options({ updateFeedback, total, onReset }) {
	return (
		<div className={css.boxButton}>
			<button className={css.button} onClick={() => updateFeedback("good")}>Good</button>
			<button className={css.button} onClick={() => updateFeedback("neutral")}>Neutral</button>
			<button className={css.button} onClick={() => updateFeedback("bad")}>Bad</button>
			{total ? <button className={css.button} onClick={() => onReset()}>Reset</button> : null}
		</div>
	)
}