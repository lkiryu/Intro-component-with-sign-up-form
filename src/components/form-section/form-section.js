import React from "react";

const FormSection = () => {
    return(
        <section className="FormSection">
            <p className="try-it-free">Try it free 7 days then $20/mo. thereafter</p>

            <form>
                <div className="input">
                    <input type="text" name="first-name" placeholder="First name"></input>
                    <p className="none error">First Name cannot be empty</p>
                </div>
                <div className="input">
                    <input type="text" name="last-name" placeholder="Last name"></input>
                    <p className="none error">Last Name cannot be empty</p>
                </div>
                <div className="input">
                    <input type="email" name="email-address" placeholder="Email Address"></input>
                    <p className="none error">Looks like this is not an email</p>
                </div>
                <div className="input">
                    <input type="password" name="password" placeholder="Password"></input>
                    <p className="none error">Password cannot be empty</p>
                </div>
                <input type="submit" value="Claim your free trial"></input>
                <p className="terms">By clicking the button, you are agreeing to our <a href="/">Terms and Services</a></p>
            </form>
        </section>
    )
}

export default FormSection