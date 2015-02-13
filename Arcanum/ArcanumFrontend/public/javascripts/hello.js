$(document).ready(function(){
	$( '#menu' ).multilevelpushmenu({
		menu: arrMenu,
		containersToPush: [$( '#pushobj' )],

		wrapperClass: 'mlpm_w',
		menuInactiveClass: 'mlpm_inactive'
	});
});

//Entire menu of arrays
var arrMenu = [
	{
		title: '  Categories     ',
		icon: 'fa fa-reorder',
		items: [
			{
				name: 'Query #1',
				//icon: 'fa fa-laptop',
				link: '#',
				items: [
					{
						title: 'Query #1',
						items: [
							{
								name: 'q1',
								link: '#',
								items: [
									{
										title: 'q1',
										link: '#',
										items: [
											{
												name: 'q1.1',
												link: '#'
											},
											{
												name: 'q1.2',
												link: '#'
											},
											{
												name: 'q1.3',
												link: '#'
											},
											{
												name: 'q1.4',
												link: '#'
											}
										]
									}
								]
							},
							{
								name: 'q2',
								link: '#',
								items: [
									{
										title: 'q2',
										link: '#',
										items: [
											{
												name: 'q2.1',
												link: '#'
											},
											{
												name: 'q2.2',
												link: '#'
											},
											{
												name: 'q2.3',
												link: '#'
											},
											{
												name: 'q2.4',
												link: '#'
											},
											{
												name: 'q2.5',
												link: '#'
											}
										]
									}
								]
							},
							{
								name: 'q3',
								link: '#',
								items: [
									{
										title: 'q3',
										link: '#',
										items: [
											{
												name: 'q3.1',
												link: '#'
											},
											{
												name: 'q3.2',
												link: '#'
											},
											{
												name: 'q3.3',
												link: '#'
											},
											{
												name: 'q3.4',
												link: '#'
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				name: 'Query #2',
				link: '#',
				items: [
					{
						title: 'q4',
						items: [
							{
								name: 'q4.1',
								link: '#'
							},
							{
								name: 'q4.2',
								link: '#'
							},
							{
								name: 'q4.3',
								link: '#'
							},
							{
								name: 'q4.4',
								link: '#'
							},
							{
								name: 'q4.5',
								link: '#'
							},
							{
								name: 'q4.6',
								link: '#'
							}
						]
					}
				]
			},
			{
				name: 'Query #3',
				link: '#',
				items: [
					{
						title: 'Query #3',
						items: [
							{
								name: 'q7',
								link: '#'
							},
							{
								name: 'q8',
								link: '#'
							},
							{
								name: 'q9',
								link: '#'
							}
						]
					}
				]
			},
			{
				name: 'More buttons',
				link: '#'
			},
			{
				name: 'Buttons for days',
				link: '#'
			}
		]
	}
];