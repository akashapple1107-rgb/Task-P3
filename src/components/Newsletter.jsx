import { useState } from "react";

function Newsletter() {

    const [emailValue, setEmailValue] = useState("");
    const [status, setStatus] = useState("");

    function changeEmail(event) {
        setEmailValue(event.target.value);
    }

    function subscribe(event) {

        event.preventDefault();

        setStatus("Email validated. Newsletter delivery is implemented in Task P5.");
        setEmailValue("");
    }

    return (
        <section className="newsletter">

            <h2>SIGN UP FOR OUR DAILY INSIDER</h2>

            <form onSubmit={subscribe}>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={emailValue}
                    onChange={changeEmail}
                    required
                />

                <button type="submit">
                    Subscribe
                </button>

            </form>

            {status && <p>{status}</p>}

        </section>
    );
}

export default Newsletter;