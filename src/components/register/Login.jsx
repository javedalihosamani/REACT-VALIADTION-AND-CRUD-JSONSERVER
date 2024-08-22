import React from 'react'

const Login = () => {
  return (
    <div className='container my-5'>
        <div className="row">
          <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
            <div className="card shadow">
              <div className="card-header bg-secondary shadow">
                <h1 className="text-white text-center">LOGIN</h1>
              </div>
              <div className="card-body">
                <form autoComplete='off'>
                  <div className="form-group my-3">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter email" 
                      required />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="password">Password</label>
                    <input 
                      type="password" 
                      id="password" 
                      name="password" 
                      className="form-control" 
                      placeholder="Enter password" 
                      required />
                  </div>
                  <div className="for-group my-3">
                    <button 
                      type="submit"
                      className="btn btn-outline-success btn-block">
                        Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login