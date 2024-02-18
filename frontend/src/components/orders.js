import { format } from 'date-fns';

const Orders = ({ items, order }) => {
	console.log(order);
	return (
		<div className='container mb-5'>
			<div className='d-flex flex-row align-items-start'>
				<div className='col-11 d-flex flex-column m-2'>
					<span>
						<strong>Order Number: </strong> {order._id} | Order at: {format(new Date(order?.createdAt), 'dd/MM/yyyy')}
					</span>
					{items.map((item, index) => (
						<div className='cart-item p-3' key={index}>
							<div className='d-flex flex-row'>
								<img className='col-2 img-f	luid' src={`images/${item.image}.jpg`} alt='' />
								<div className='col-6 p-2'>
									<h5>{item.name}</h5>
									<h6>{item.category}</h6>
									<p>${item.price}</p>
								</div>
							</div>
						</div>
					))}
					<div className='col-12'>
						<p>
							<strong>Order Total:</strong> {order.total_cost - (order.total_cost * order.discount_in_percent) / 100 + order.shipping_charge} | <strong>Address:</strong>{' '}
							{order.shipping_address?.first_name} {order.shipping_address?.last_name}, {order.shipping_address?.address1}, {order.shipping_address?.address2},{' '}
							{order.shipping_address?.state}, {order.shipping_address?.country}, {order.shipping_address?.pin_code}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Orders;
