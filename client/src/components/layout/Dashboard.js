import React from 'react';

const Dashboard = ({ data }) => {
	return (
		<div>
			{Object.keys(data).map(key => {
				return (
					<div key={key}>
						<div>
							<div>
								<h3>{key}</h3>
							</div>
							<div>{data[key]}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Dashboard;
