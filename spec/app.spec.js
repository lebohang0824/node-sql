describe('Testing database query language', () => {

	const { addNewVisitor, listAllVisitors, deleteVisitor } = require('../src/app.js'); 

	const visitor = {
		name: 'Porche 911',
		age: 19,
		date: new Date('01/08/2000'),
		time: '08:00:00',
		assistant: 'Lebohang Mokoena',
		comments: 'Nomvelo'
	}

	let id = 0;

	it('Add visitor', async done => {
		await addNewVisitor(visitor.name, visitor.age, visitor.date, visitor.time, visitor.assistant, visitor.comments)
			.then(res => {
				const objVisitor = res.rows
				expect(objVisitor[0].name).toBe(visitor.name);
				expect(objVisitor[0].age).toBe(visitor.age);
				expect(objVisitor[0].date_of_visit).toEqual(visitor.date);
				expect(objVisitor[0].time_of_visit).toBe(visitor.time);
				expect(objVisitor[0].assistant).toBe(visitor.assistant);
				expect(objVisitor[0].comments).toBe(visitor.comments);
			});

		done();
	});

	it('List all vistors', async done => {
		await listAllVisitors().then(res => {
			const objVisitor = res.rows

			expect(objVisitor[0].name).toBe(visitor.name);
			expect(objVisitor[0].age).toBe(visitor.age);
			expect(objVisitor[0].date_of_visit).toEqual(visitor.date);
			expect(objVisitor[0].time_of_visit).toBe(visitor.time);
			expect(objVisitor[0].assistant).toBe(visitor.assistant);
			expect(objVisitor[0].comments).toBe(visitor.comments);

			id = objVisitor.id;
		});
		
		done();
	});

	it('Deletegit  vistors', async done => {

		await deleteVisitor(id).then(res => {
			const objVisitor = res.rows

			expect(objVisitor[0].name).toBe(visitor.name);
			expect(objVisitor[0].age).toBe(visitor.age);
			expect(objVisitor[0].date_of_visit).toEqual(visitor.date);
			expect(objVisitor[0].time_of_visit).toBe(visitor.time);
			expect(objVisitor[0].assistant).toBe(visitor.assistant);
			expect(objVisitor[0].comments).toBe(visitor.comments);
		});
		
		done();
	});

});