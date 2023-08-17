import Chart from 'chart.js/auto';

const labels = new Array(100).fill('0');

const normal = Array.from({ length: 100 }, (v, i) =>
	Math.exp(-((i - 49) ** 2) / 200)
);

const data = {
	labels: labels,
	datasets: [
		{
			label: 'My First Dataset',
			data: normal,
			fill: false,
			borderColor: 'skyblue',
			tension: 0.5,
		},
	],
};

const config = {
	type: 'line',
	data: data,
	options: {
		scales: {
			x: { display: false },
			y: { display: false },
		},
		elements: { point: { radius: 0 } },
		plugins: {
			legend: {
				display: false,
			},
		},
	},
};

const c = new Chart(document.getElementById('graph'), config);

const varianceSlider = document.getElementById('variance');
const meanSlider = document.getElementById('mean');

varianceSlider.addEventListener('input', (e) => {
	const mean = meanSlider.value;
	const variance = varianceSlider.value;
	c.data.datasets[0].data = Array.from({ length: 100 }, (v, i) =>
		Math.exp(-((i - mean) ** 2) / (2 * 10 * 10 ** variance))
	);
	c.update();
});

meanSlider.addEventListener('input', (e) => {
	const mean = meanSlider.value;
	const variance = varianceSlider.value;
	c.data.datasets[0].data = Array.from({ length: 100 }, (v, i) =>
		Math.exp(-((i - mean) ** 2) / (2 * 10 * 10 ** variance))
	);
	c.update();
});
