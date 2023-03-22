import React from 'react'

export default function Statstics() {
	return (
		<div class="container w-container">
			<div class="cols stats-cols">
				<div class="col col-33 border-right">
					<div class="stat blue">
						<div class="headline-2 mb-8">130K +</div>
						<div class="headline-4">Tech Jobs</div>
					</div>
				</div>
				<div class="col col-33 border-right">
					<div class="stat orange center-stat">
						<div class="headline-2 mb-8">
							<div class="counterup">6,000,000</div>
						</div>
						<div class="headline-4">Matches Made</div>
					</div>
				</div>
				<div class="col col-33">
					<div class="stat green">
						<div class="headline-2 mb-8">
							<div>8M +</div>
						</div>
						<div class="headline-4">Startup-ready candidates</div>
					</div>
				</div>
			</div>
		</div>
	)
}
