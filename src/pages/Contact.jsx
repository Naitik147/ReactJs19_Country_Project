export const Contact = () => {

    const handleFormSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact US</h2>
            <div className="contact-wrapper container">
                <form action={handleFormSubmit} >
                    <input
                        type="text"
                        required
                        autoComplete="false"
                        placeholder="Enter your name"
                        name="username"
                        className="form-control"
                    />
                    <input
                        type="email"
                        required
                        autoComplete="false"
                        placeholder="Enter your enail"
                        name="email"
                        className="form-control"
                    />
                    <textarea
                        type="text"
                        required
                        rows="10"
                        autoComplete="off"
                        placeholder="Enter your message"
                        name="message"
                        className="form-control"
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}