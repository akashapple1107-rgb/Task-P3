import { useState } from "react";

function Newsletter() {

    const [emailValue, setEmailValue] = useState("");
    const [status, setStatus] = useState("");

    function subscribe(event) {

        event.preventDefault();

        setStatus("Thank you for subscribing!");
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
                    onChange={(event) =>
                        setEmailValue(event.target.value)
                    }
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