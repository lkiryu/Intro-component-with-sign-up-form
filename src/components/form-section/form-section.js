import React from "react";
import validation from "../validation/validation";

import './form-section.css'

const FormSection = () => {
    return(
        <section className="form-section">
            <p className="try-it-free">Try it free 7 days then $20/mo. thereafter</p>

            <form>
                <div className="div-input">
                    <input className="input" type="text" name="first-name" placeholder="First name"></input>
                    <p className="none error-text">First Name cannot be empty</p>
                </div>
                <div className="div-input">
                    <input className="input" type="text" name="last-name" placeholder="Last name"></input>
                    <p className="none error-text">Last Name cannot be empty</p>
                </div>
                <div className="div-input">
                    <input className="input" type="email" name="email-address" placeholder="Email Address"></input>
                    <p className="none error-text">Looks like this is not an email</p>
                </div>
                <div className="div-input">
                    <input className="input" type="password" name="password" placeholder="Password"></input>
                    <p className="none error-text">Password cannot be empty</p>
                </div>
                <input className="submit" type="submit" value="Claim your free trial" onClick={validation}></input>
                <p className="terms">By clicking the button, you are agreeing to our <a href="/">Terms and Services</a></p>
            </form>
        </section>
    )
}

export default FormSection