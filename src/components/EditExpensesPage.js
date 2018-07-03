import React from 'react';

const EditExpensesPage = (props) => {
	console.log(props);
return (
	<div>
		This is my edit expenses component. {props.match.params.id}
	</div>
)
};

export default EditExpensesPage;