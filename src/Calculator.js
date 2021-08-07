import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
	const [tipAmount, setTipAmount] = useState(0);
	const [totalAmount, setTotalAmount] = useState(0);
	const [tipPercent, setTipPercent] = useState(0);

	const initialState = { billAmount: 0, people: 0 };
	const [formData, setFormData] = useState(initialState);

	function changeHandler({ target }) {
		let newValue = Number(target.value);

		setFormData((previousState) => ({
			...previousState,
			[target.name]: newValue,
		}));
	}

	function cancelHandler() {
		setFormData(initialState);
		setTipAmount(0);
		setTotalAmount(0);
	}
	function clickHandler({ target }) {
		let newValue = Number(target.value);
		setTipPercent(newValue);
		console.log(formData);
		setTipAmount((formData.billAmount * tipPercent) / 100 / formData.people);
		setTotalAmount(formData.billAmount / formData.people + tipAmount);
	}
	return (
		<>
			<div className='container'>
				<div className='header'>
					<img src='/images/logo.svg' alt='logo' />
				</div>
				<div className='card w-50 mx-auto'>
					<div className='card-body'>
						<div className='row'>
							<div className='col-7'>
								<form>
									<div className='form-group '>
										<label htmlFor='billAmount' className='form-label'>
											Bill
										</label>

										<input
											type='text'
											className='form-control text-right billAmountInput'
											id='billAmount'
											name='billAmount'
											value={formData.billAmount}
											onChange={changeHandler}
										/>
									</div>

									<p>Select Tip %</p>

									<button
										type='button'
										className='btn mb-2 mr-2 col-md-3'
										value={5}
										onClick={clickHandler}
									>
										5%
									</button>
									<button
										type='button'
										className='btn mb-2 mr-2 col-md-3'
										value={10}
										onClick={clickHandler}
									>
										10%
									</button>
									<button
										type='button'
										className='btn mb-2  col-md-3'
										value={15}
										onClick={clickHandler}
									>
										15%
									</button>

									<button
										type='button'
										className='btn mb-2 mr-2 col-md-3'
										value={25}
										onClick={clickHandler}
									>
										25%
									</button>
									<button
										type='button'
										className='btn mb-2 mr-2 col-md-3'
										value={50}
										onClick={clickHandler}
									>
										50%
									</button>
									<button type='button' className='btn mb-2 col-md-3'>
										Custom
									</button>

									<div className='form-group'>
										<label htmlFor='people' className='form-label'>
											Number of People
										</label>

										<input
											type='text'
											className='form-control text-right peopleCountInput'
											id='people'
											value={formData.people}
											name='people'
											onChange={changeHandler}
										/>
									</div>
								</form>
							</div>
							<div className='col-sm-5'>
								<div className='card right-side'>
									<div className='card-body m-2'>
										<div className='row justify-content-between'>
											<p>
												Tip Amount <br />
												<small>/ person</small>
											</p>
											<p className='text-right'>${tipAmount.toFixed(2)}</p>
										</div>
										<div className='row justify-content-between'>
											<p>
												Total <br />
												<small>/ person</small>
											</p>

											<p className='text-right'>${totalAmount.toFixed(2)}</p>
										</div>
										<button
											type='button'
											className='btn btn-reset btn-block mx-auto w-50'
											onClick={cancelHandler}
										>
											Reset
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
