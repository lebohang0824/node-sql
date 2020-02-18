describe('Testing database query language', () => {

	const { 
		addNewVisitor,
		listAllVisitors,
		deleteVisitor,
		updateVisitor,
		viewOneVisitor,
		deleteAllVisitors } = require('../src/app.js');

	const visitor = {
		name: 'Porche 911',
		age: 19,
		date: new Date('01/08/2000'),
		time: '08:00:00',
		assistant: 'Lebohang Mokoena',
		comments: 'Nomvelo'
	}

	const newName = "Thabo Mahlaba";
	const newAge = 55;
	const newComments = "Beautiful place";

	it('Should add new visitors', async() => {

		const newVisitor = await addNewVisitor(
			visitor.name, 
			visitor.age, 
			visitor.date, 
			visitor.time, 
			visitor.assistant, 
			visitor.comments
		);

		expect(newVisitor[0].name).toEqual(visitor.name);
		expect(newVisitor[0].age).toEqual(visitor.age);
		expect(newVisitor[0].date_of_visit).toEqual(visitor.date);
		expect(newVisitor[0].time_of_visit).toEqual(visitor.time);
		expect(newVisitor[0].assistant).toEqual(visitor.assistant);
		expect(newVisitor[0].comments).toEqual(visitor.comments);
	});

	it('Should get all visitors', async() => {
		const allVisitors = await listAllVisitors();

		expect(allVisitors).not.toEqual([]);
	});

	it('Should update visitor', async() => {

		const allVisitors = await listAllVisitors();
		const id = allVisitors[0].id;

		const updateOneVisitor = await updateVisitor(
			id,
			newName, 
			newAge, 
			visitor.date, 
			visitor.time, 
			visitor.assistant, 
			newComments
		);

		expect(updateOneVisitor[0].name).toEqual(newName);
		expect(updateOneVisitor[0].age).toEqual(newAge);
		expect(updateOneVisitor[0].date_of_visit).toEqual(visitor.date);
		expect(updateOneVisitor[0].time_of_visit).toEqual(visitor.time);
		expect(updateOneVisitor[0].assistant).toEqual(visitor.assistant);
		expect(updateOneVisitor[0].comments).toEqual(newComments);
	}); 

	it('Should view one visitor', async() => {
		const allVisitors = await listAllVisitors();
		const id = allVisitors[0].id;

		const oneVisitor = await viewOneVisitor(id);

		expect(oneVisitor[0].name).toEqual(newName);
		expect(oneVisitor[0].age).toEqual(newAge);
		expect(oneVisitor[0].date_of_visit).toEqual(visitor.date);
		expect(oneVisitor[0].time_of_visit).toEqual(visitor.time);
		expect(oneVisitor[0].assistant).toEqual(visitor.assistant);
		expect(oneVisitor[0].comments).toEqual(newComments);
	});  
 
	it('Should delete visitor', async() => {

		const allVisitors = await listAllVisitors();
		const id = allVisitors[0].id;

		const deleteVisitors = await deleteVisitor(id);

		expect(deleteVisitors[0].name).toEqual(newName);
		expect(deleteVisitors[0].age).toEqual(newAge);
		expect(deleteVisitors[0].date_of_visit).toEqual(visitor.date);
		expect(deleteVisitors[0].time_of_visit).toEqual(visitor.time);
		expect(deleteVisitors[0].assistant).toEqual(visitor.assistant);
		expect(deleteVisitors[0].comments).toEqual(newComments);
	}); 

	fit('Should delete all visitors', async() => {
		const allVisitors = await deleteAllVisitors();

		expect(allVisitors).toEqual([]);
	});

});