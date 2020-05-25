import React from 'react';
import './ScrollingWrapper.css';
import Card from './Card';

let examplePost = {
	typeOfPost: 0, //0,1 = offer, request
	typeOfItem: 0, //0,1 = textbook, notes		
	course: 'CS33',
	itemName: 'Computer Organization: A Perspective!',
	condition: 0, //from 0 (best) to 3 (worst)
	description: 'Awesome. I dropped this off at your house when I went to the',
	link: '',
	fulfilled: 0, //Unfulfilled, Pending (matched w at least 1 other person), Fulfilled (marked for deletion). On the backend, we will switch pending to fulfilled after 2 weeks have passed.
	publication_date: new Date(2023, 4, 13),
	author: 'Tommy', 		// the author’s username
}

export default function ScrollingWrapper(props) {
	return (
		<React.Fragment>
			
		<div class="scrolling-wrapper">
				<h1 className="display-6">TRAIN</h1>
			{<Card post={examplePost}> </Card>}
			{<Card post={examplePost}> </Card>}
			{<Card post={examplePost}> </Card>}
			{<Card post={examplePost}> </Card>}
			{<Card post={examplePost}> </Card>}
			{<Card post={examplePost}> </Card>}
			{<Card post={examplePost}> </Card>}
			{<Card post={examplePost}> </Card>}
			{<Card post={examplePost}> </Card>}
			{<Card post={examplePost}> </Card>}
			{<Card post={examplePost}> </Card>}
			{<Card post={examplePost}> </Card>}
			{<Card post={examplePost}> </Card>}
			{<Card post={examplePost}> </Card>}
			{<Card post={examplePost}> </Card>}
		</div>
		</React.Fragment>
	);
}
