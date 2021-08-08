import app from './app';

const start = async () => {
	app.listen(50003, () => console.log('runnig on port 50003'));
};

start();