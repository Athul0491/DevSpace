import React, { useState, useEffect } from 'react';

const Dashboard = () => {
	const [data, setData] = useState([]);
	return (
		<div>
			{data.map(key => {
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
