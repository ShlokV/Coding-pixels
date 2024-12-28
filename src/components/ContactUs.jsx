import React, { useState } from "react";
import emailjs from "emailjs-com";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm(
                "service_p2sw08m",
                "template_d2uhwkc",
                e.target,
                "Tr1ZhcX_vNxFC-odc"
            )
            .then(
                (result) => {
                    console.log("Email sent:", result.text);
                    setIsLoading(false);
                    setIsSuccess(true);
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                    });
                    e.target.reset();
                },
                (error) => {
                    console.error("Error sending email:", error.text);
                    setIsLoading(false);
                    setIsError(true);
                }
            );
    };

    return (
        <Section className="overflow-hidden" id="contact-us">
            <div className="container relative z-2">
                <Heading tag="Get in Touch" title="We'd Love to Hear from You" />

                <div className="mt-6 p-6 bg-n-7 rounded-3xl overflow-hidden flex flex-col items-center">
                    <form
                        className="w-full max-w-lg space-y-4"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-white text-sm font-medium mb-2"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 bg-n-6 rounded-lg text-n-1"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-white text-sm font-medium mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 bg-n-6 rounded-lg text-n-1"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-white text-sm font-medium mb-2"
                            >
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-3 bg-n-6 rounded-lg text-n-1"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-white text-sm font-medium mb-2"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full p-3 bg-n-6 rounded-lg text-n-1"
                                placeholder="Enter the subject"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-white text-sm font-medium mb-2"
                            >
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 bg-n-6 rounded-lg text-n-1"
                                placeholder="Write your message here"
                                required
                            ></textarea>
                        </div>

                        <Button
                            className="mt-4 w-full"
                            type="submit"
                            white={false}
                            disabled={isLoading}
                        >
                            {isLoading ? "Sending..." : "Send Message"}
                        </Button>

                        {isSuccess && (
                            <div className="mt-4 text-green-500 text-center">
                                Message sent successfully!
                            </div>
                        )}
                        {isError && (
                            <div className="mt-4 text-red-500 text-center">
                                Something went wrong. Please try again later.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default ContactUs;
