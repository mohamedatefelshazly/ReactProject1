// import React from 'react'

// import { useState } from "react"
import { showLabel } from "../helper func"

export default function Contact() {
    return (
        <section className=''>
            <h1 className="text-center">Conatct Section</h1>
            <div className="text-center">
                <i className="fa-solid fa-star mx-3 bl-icon position-relative"  ></i>
            </div>
            <div id="form" className="w-50 mx-auto py-3">
                <div className="mb-3">
                    <label htmlFor="userNameInput" className="form-label d-none">userName:</label>
                    <input type="text" className="form-control" id="userNameInput" onInput={(e) => showLabel(e)} placeholder="userName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="userAgeInput" className="form-label d-none">userAge :</label>
                    <input type="number" className="form-control" id="userAgeInput" onInput={(e) => showLabel(e)} placeholder="userAge" />
                </div>
                <div className="mb-3">
                    <label htmlFor="userEmailInput" className="form-label d-none">userEmail :</label>
                    <input type="email" className="form-control" id="userEmailInput" onInput={(e) => showLabel(e)} placeholder="userEmail" />
                </div>
                <div className="mb-3">
                    <label htmlFor="userPasswordInput" className="form-label d-none">userPassword :</label>
                    <input type="password" className="form-control" id="userPasswordInput" onInput={(e) => showLabel(e)} placeholder="userPassword" />
                </div>
                <button className='btn bg-btn w-25 ms-auto '>send Message</button>
            </div>


        </section>
    )
}
