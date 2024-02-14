import React from 'react';

const ProductDetails = ({ product, addToCart }) => {
	return (
		<div className='container mb-5 mt-5'>
			<div className='row d-flex flex-row'>
				<div className='col-md-5 product-image'>
					<img
						className='img-fluid'
						src={`/images/${product.image}.jpg`}
						alt=''
					/>
				</div>
				<div className='col-md-2 product-small d-flex flex-md-column justify-content-start order-md-first'>
					{product.images.map((image, index) => (
						<img
							className='img-fluid'
							src={`/images/${image}.jpg`}
							alt=''
							key={index}
						/>
					))}
				</div>

				<div className='col-md-5'>
					<h6 className='text-uppercase text-secondary'>{product.name}</h6>
					<h2 className='fs-3'>{product.category}</h2>
					<h5 className='text-secondary fs-6 fw-bold'>${product.price}</h5>
					<div className='text-secondary text-small'>color :</div>
					<div className='my-2'>
						<div
							className='btn-group'
							role='group'
							aria-label='Basic radio toggle button group'
						>
							{Object.entries({
								danger: 'red',
								success: 'green',
								dark: 'black'
							}).map(([key, value]) => (
								<React.Fragment key={key}>
									<input
										type='radio'
										className='btn-check'
										name='btnradio'
										id={'btnradio' + key}
										autocomplete='off'
										checked={product.color === value}
									/>
									<label
										className={`btn btn-${key} color-label`}
										for={'btnradio' + key}
									>
										<i className='bi bi-check2'></i>
									</label>
								</React.Fragment>
							))}
						</div>
					</div>
					<div className='text-secondary text-small'>size :</div>
					<div className='my-2'>
						<div
							className='btn-group'
							role='group'
							aria-label='Basic radio toggle button group'
						>
							{['S', 'M', 'L'].map((el) => (
								<React.Fragment key={el}>
									<input
										type='radio'
										className='btn-check'
										name='size'
										id={'btnradio' + el}
										autocomplete='off'
										checked={el === product.size}
									/>
									<label className='btn btn-outline-dark' for={'btnradio' + el}>
										{el}
									</label>
								</React.Fragment>
							))}
						</div>
					</div>

					<button
						className='btn btn-dark w-100 my-5'
						onClick={() => addToCart(product)}
					>
						<i className='bi bi-cart-plus-fill'></i>
						Add to Cart{' '}
					</button>
					<div>
						<span className='text-secondary text-small'>Details :</span>

						<div className='accordion accordion-flush' id='accordionExample'>
							<div className='accordion-item'>
								<h2 className='accordion-header' id='headingOne'>
									<button
										className='accordion-button'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseOne'
										aria-expanded='true'
										aria-controls='collapseOne'
									>
										Accordion Item #1
									</button>
								</h2>
								<div
									id='collapseOne'
									className='accordion-collapse collapse show'
									aria-labelledby='headingOne'
									data-bs-parent='#accordionExample'
								>
									<div className='accordion-body'>
										<strong>This is the first item's accordion body.</strong> It
										is hidden by default, until the collapse plugin adds the
										appropriate classes that we use to style each element. These
										classes control the overall appearance, as well as the
										showing and hiding via CSS transitions. You can modify any
										of this with custom CSS or overriding our default variables.
										It's also worth noting that just about any HTML can go
										within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</div>
								</div>
							</div>
							<div className='accordion-item'>
								<h2 className='accordion-header' id='headingTwo'>
									<button
										className='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseTwo'
										aria-expanded='false'
										aria-controls='collapseTwo'
									>
										Accordion Item #2
									</button>
								</h2>
								<div
									id='collapseTwo'
									className='accordion-collapse collapse'
									aria-labelledby='headingTwo'
									data-bs-parent='#accordionExample'
								>
									<div className='accordion-body'>
										<strong>This is the second item's accordion body.</strong>{' '}
										It is hidden by default, until the collapse plugin adds the
										appropriate classes that we use to style each element. These
										classes control the overall appearance, as well as the
										showing and hiding via CSS transitions. You can modify any
										of this with custom CSS or overriding our default variables.
										It's also worth noting that just about any HTML can go
										within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</div>
								</div>
							</div>
							<div className='accordion-item'>
								<h2 className='accordion-header' id='headingThree'>
									<button
										className='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseThree'
										aria-expanded='false'
										aria-controls='collapseThree'
									>
										Accordion Item #3
									</button>
								</h2>
								<div
									id='collapseThree'
									className='accordion-collapse collapse'
									aria-labelledby='headingThree'
									data-bs-parent='#accordionExample'
								>
									<div className='accordion-body'>
										<strong>This is the third item's accordion body.</strong> It
										is hidden by default, until the collapse plugin adds the
										appropriate classes that we use to style each element. These
										classes control the overall appearance, as well as the
										showing and hiding via CSS transitions. You can modify any
										of this with custom CSS or overriding our default variables.
										It's also worth noting that just about any HTML can go
										within the <code>.accordion-body</code>, though the
										transition does limit overflow.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
