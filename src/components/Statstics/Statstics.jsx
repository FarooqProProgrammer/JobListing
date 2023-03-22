import React from 'react'

export default function Statstics() {
	return (
		<div className="container w-container">
			<div className="cols stats-cols">
				<div className="col col-33 border-right">
					<div className="stat blue">
						<div className="headline-2 mb-8">130K +</div>
						<div className="headline-4">Tech Jobs</div>
					</div>
				</div>
				<div className="col col-33 border-right">
					<div className="stat orange center-stat">
						<div className="headline-2 mb-8">
							<div className="counterup">6,000,000</div>
						</div>
						<div className="headline-4">Matches Made</div>
					</div>
				</div>
				<div className="col col-33">
					<div className="stat green">
						<div className="headline-2 mb-8">
							<div>8M +</div>
						</div>
						<div className="headline-4">Startup-ready candidates</div>
					</div>
				</div>
			</div>
		</div>
	)
}
