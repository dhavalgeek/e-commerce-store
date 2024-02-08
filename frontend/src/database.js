const db = {
	products: [
		{
			id: 1,
			name: 'Sony WX-5',
			category: 'Headphones',
			price: 100.75,
			rating: '3',
			color: 'black',
			size: 'S',
			details: {
				product: '',
				warranty: '',
				merchant: ''
			},
			image: 'product-1-square',
			images: ['product-1-square', 'product-1-square', 'product-1-square']
		},
		{
			id: 2,
			name: 'Apple Watch 2',
			category: 'SmartWatch',
			price: 500.75,
			rating: '3',
			color: 'black',
			size: '',
			details: {
				product: '',
				warranty: '',
				merchant: ''
			},
			image: 'product-2-square',
			images: ['product-2-square', 'product-2-square', 'product-2-square']
		},
		{
			id: 3,
			name: 'Canon WM-5',
			category: 'Camera',
			price: 300.75,
			rating: '4',
			color: 'black',
			size: '',
			details: {
				product: '',
				warranty: '',
				merchant: ''
			},
			image: 'product-3-square',
			images: ['product-3-square', 'product-3-square', 'product-3-square']
		}
	]
}

export default db;