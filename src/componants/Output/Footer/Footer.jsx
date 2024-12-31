// import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-warning text-center'>
            <div className="row container-fluid p-5 text-white mx-auto bg-foot1">
                <div className='col-sm-4'>
                    <h3>LOCATION</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className='col-sm-4'>
                    <h3>AROUND THE WEB</h3>
                    <div className="d-flex justify-content-evenly w-75 mx-auto">
                        <i className='fa-brands fa-facebook circ'></i>
                        <i className='fa-brands fa-twitter circ'></i>
                        <i className='fa-brands fa-linkedin circ'></i>
                        <i className='fa-solid fa-globe circ'></i>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <h3>ABOUT FREELANCER</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
            <div className='bg-foot2 text-white p-2'>Copyright &copy; Your Website 2021</div>
        </footer>
    )
}
