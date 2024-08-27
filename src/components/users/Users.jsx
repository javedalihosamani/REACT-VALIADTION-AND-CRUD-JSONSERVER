import React from 'react'
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    const {id, name, address, image, email} = props;
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <div className="card my-3 shadow">
            <img src={image} alt="" className="img-fluid shadow rounded" style={{height:'300px', width:'100%'}}/>
            <div className="card-body text-secondary">
                <h3 className='text-center'>{name}</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Email : </b>
                        <span className='float-end'>{email}</span>
                    </li>
                    <li className='list-group-item'>                
                        <b>Address : </b>
                        <span className='float-end'>{address}</span>
                    </li>
                </ul>
            </div>
            <div className="card-footer">
                <NavLink className='text-secondary'><i class="bi bi-pencil-square h3"></i></NavLink>
                <NavLink className='float-end text-secondary'><i class="bi bi-trash3-fill h3"></i></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Users