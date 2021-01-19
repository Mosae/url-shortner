import React from 'react';
import brandRecognition from './images/icon-brand-recognition.svg';
import './cards.scss';
function Cards() {
	return (
		<section className="statistics">
			<div className="container">
				<div className="statistics__header">
					<h2 className="statistics__heading tp">Advanced Statistics</h2>
					<p className="statistics__subtitles ts">
						Track how your links are performing across the web with our advanced
						statistics dashboard.
					</p>
				</div>
				<div className="statistic-cards">
					<div className="statistic">
						<img src={brandRecognition} alt="" className="statistic__icon" />
						<h3 className="statistics__heading tp">Brand Recognition</h3>
						<p className="statistics__subtitle ts">
							Boost your brand recognition with each click. Generic links don't
							mean a thing. Branded links help instil confindence in your
							content.
						</p>
					</div>
					<div className="statistic">
						<img src={brandRecognition} alt="" className="statistic__icon" />
						<h3 className="statistics__heading">Brand Recognition</h3>
						<p className="statistics__subtitle ts">
							Boost your brand recognition with each click. Generic links don't
							mean a thing. Branded links help instil confindence in your
							content.
						</p>
					</div>
					<div className="statistic">
						<img src={brandRecognition} alt="" className="statistic__icon" />
						<h3 className="statistics__heading">Brand Recognition</h3>
						<p className="statistics__subtitle ts">
							Boost your brand recognition with each click. Generic links don't
							mean a thing. Branded links help instil confindence in your
							content.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cards;
