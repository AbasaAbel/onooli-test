import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
    import {
        Button, ButtonToolbar, ButtonGroup
    } from 'react-bootstrap';
    import './form.css';

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		
	}

    
	render() {
		return (

			<div>
				<div>

					<div  data-parallax="scroll"
						data-speed="0.8"></div>
				</div>

				<div >
					<div class="container">
						<div class="row">
							<div class="col">
								<div class="" >
									<h3 >Add a Role</h3>
									
								</div>
							</div>
						</div>
						<div class="row ">
							<div class="col">
								<div class="items item_grid clearfix">
									<div class="row card">
										<div class="col-lg-12 card-body" >

                                            <form class="clearfix">		
                                                <div className="row" style={{ paddingBottom: 15 }}>
													<div className="col-lg-12">
													<label>Name</label>
													</div>
													<div className="col-lg-12">
                                                        <input 
															type="text"
															class="form-control"
														/>
													</div>
												</div>
												<div className="row" style={{ paddingBottom: 15 }}>
													<div className="col-lg-12">
													<label>Description</label>
													</div>
													<div className="col-lg-12">
                                                        <textarea
															class="form-control"
														/>
													</div>
												</div>

												<div className="row" style={{ paddingBottom: 15 }}>
													<div className="col-lg-9">
														<div className="row">
															<div className="col-lg-6">
																<input type="checkbox" name="activity" value="" />{'  '}Despatch Out:<br />
																<input type="checkbox" name="activity" value="" />{'  '}Recieve Despatch<br />
																<input type="checkbox" name="activity" value=""/>{'  '}BOX Office(ALL BO Perms)<br />	
															</div>
															<div className='col-lg-6'>
																<input type="checkbox" name="activity" value="" />{'  '}View Reports<br />
																<input type="checkbox" name="activity" value="" />{'  '}Edit Previous Records<br />
																<input type="checkbox" name="activity" value="" />{'  '}Delete Records<br />
															</div>
														</div>
														<hr />
														<div className="row">
															<div className="col-lg-6">
																<input type="checkbox" name="activity" value="" />{'  '}Manage Categories:<br />
																<input type="checkbox" name="activity" value="" />{'  '}Manage Location<br />
															</div>
															<div className='col-lg-6'>
																<input type="checkbox" name="activity" value="" />{'  '}Manage Acounts<br />
																<input type="checkbox" name="activity" value="" />{'  '}Manage Roles and Permissions<br />
															</div>
														</div>
													</div>
												</div>
												<div>
                                                <ButtonGroup style={{ float : "right"}}>
                                                <Button style={{ float : "right"}} variant="light" class="send">Cancel</Button>
												<Button style={{ float : "right"}} variant="light" class="send">Save</Button>
                                                </ButtonGroup>
                                               
												</div>

											</form>
											</div>
										
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>


				<br />




			</div>



		);
	}
}
export default Test;