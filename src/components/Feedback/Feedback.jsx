import css from "./Feedback.module.css"

export default function Feedback({ reviews: { good, neutral, bad }, totalReviews, positive }) {
	return (
		<div className={css.container}>
			<ul className={css.list}>
				<li className={css.item}>
					<p className={css.reviews}><span className={css.green}>Good:{good}</span></p>
				</li>
				<li className={css.item}>
					<p className={css.reviews}><span className={css.yellow}>Neutral:{neutral}</span></p>
				</li>
				<li className={css.item}>
					<p className={css.reviews}><span className={css.red}>Bad:{bad}</span></p>
				</li>
			</ul>
			<div className={css.space}>
				<p className={css.descr}>Total:{totalReviews}</p>
				<p className={css.descr}>Positive:{positive || 0}%</p>
			</div>
		</div>
	)
}