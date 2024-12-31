// import React from 'react'
import poert1 from "../../../assets/poert1.png"
import port2 from "../../../assets/port2.png"
import port3 from "../../../assets/port3.png"
import { removeShow, showImg } from "../helper func"

export default function Portfolio() {
  return (
    <section className='text-center p-3 position-relative'>
      <h1>Portofolio Section</h1>
      <div className="">
        <i className="fa-solid fa-star mx-3 position-relative bl-icon" ></i>
      </div>
      <div className="row container mx-auto g-5 p-3">
        <div className="col-md-4" >
          <div className="position-relative">
            <img className='img-fluid rounded-3' src={poert1} alt="po1" />
            <div onClick={(e) => showImg(e)} id="poert1" className="cover rounded-2 position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align align-items-center">
              <i onClick={(e) => showImg(e)} id="poert1" className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="position-relative">
            <img className='img-fluid rounded-3' src={port2} alt="po2" />
            <div onClick={(e) => showImg(e)} id="port2" className="cover rounded-2 position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align align-items-center">
              <i onClick={(e) => showImg(e)} id="port2" className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="position-relative">
            <img className='img-fluid rounded-3' src={port3} alt="po3" />
            <div onClick={(e) => showImg(e)} id="port3" className="cover rounded-2 position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align align-items-center">
              <i onClick={(e) => showImg(e)} id="port3" className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="position-relative">
            <img className='img-fluid rounded-3' src={poert1} alt="po1" />
            <div onClick={(e) => showImg(e)} id="poert1" className="cover rounded-2 position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align align-items-center">
              <i onClick={(e) => showImg(e)} id="poert1" className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="position-relative">
            <img className='img-fluid rounded-3' src={port2} alt="po2" />
            <div onClick={(e) => showImg(e)} id="port2" className="cover rounded-2 position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align align-items-center">
              <i onClick={(e) => showImg(e)} id="port2" className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="position-relative">
            <img className='img-fluid rounded-3' src={port3} alt="po3" />
            <div onClick={(e) => showImg(e)} id="port3" className="cover rounded-2 position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align align-items-center">
              <i onClick={(e) => showImg(e)} id="port3" className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------- */}
      <div id="showImg" onClick={(e) => removeShow(e)} className="position-absolute d-none bg-black bg-opacity-50 start-0 top-0 w-100 h-100 d-flex justify-content-center align-items-center">
        <img id="bigImg" className="img-fluid" alt="big" />
      </div>
    </section>


  )
}
