import React from 'react';
import brandRecognition from './images/icon-brand-recognition.svg';
import detailedRecords from './images/icon-detailed-records.svg';
import fullyCustomizable from './images/icon-fully-customizable.svg';
import './cards.scss';
function Cards() {
	return (
		<section className="statistics">
			<div className="container">
				<div className="statistics__header">
					<h2 className="statistics__heading tp">Advanced Statistics</h2>
					<p className="statistics__subtitles ts">Track how your links are performing across the web with our advanced statistics dashboard.</p>
				</div>
				<div className="statistic-cards">
					<div className="statistic">
						<img src={brandRecognition} alt="" className="statistic__icon" />
						<h3 className="statistics__heading tp">Brand Recognition</h3>
						<p className="statistics__subtitle ts">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confindence in your content.</p>
					</div>
					<div className="statistic">
						<img src={detailedRecords} alt="" className="statistic__icon" />
						<h3 className="statistics__heading">Detailed Records</h3>
						<p className="statistics__subtitle ts">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
					</div>
					<div className="statistic">
						<img src={fullyCustomizable} alt="" className="statistic__icon" />
						<h3 className="statistics__heading">Fully Customizable</h3>
						<p className="statistics__subtitle ts">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cards;
