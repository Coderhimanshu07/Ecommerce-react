import React from "react";
import { motion } from "framer-motion";

const FAQs = () => {
    const faqs = [
        {
            question: "What mechanical services do you provide?",
            answer:
                "We provide end-to-end mechanical solutions including design, fabrication, installation, preventive maintenance, and industrial machinery support.",
        },
        {
            question: "Do you handle turnkey mechanical projects?",
            answer:
                "Yes, we handle complete turnkey mechanical projects from planning and CAD design to execution and final commissioning.",
        },
        {
            question: "Which industries do you serve?",
            answer:
                "We serve manufacturing plants, automotive units, power plants, FMCG industries, and heavy engineering sectors.",
        },
        {
            question: "Do you follow industrial safety standards?",
            answer:
                "Absolutely. All projects strictly follow industrial safety norms, ISO standards, and on-site safety protocols.",
        },
        {
            question: "Can you provide preventive maintenance contracts?",
            answer:
                "Yes, we offer customized preventive and breakdown maintenance contracts to reduce downtime and improve machine efficiency.",
        },
        {
            question: "Do you work with automation systems?",
            answer:
                "Yes, we provide mechanical integration support for PLC, robotics, conveyor systems, and automated production lines.",
        },
        {
            question: "How experienced is your mechanical team?",
            answer:
                "Our team consists of highly experienced mechanical engineers and technicians with hands-on industrial exposure.",
        },
        {
            question: "How can we request a project quote?",
            answer:
                "You can contact us through our website or share your project requirements, drawings, or BOQ for a detailed quotation.",
        },
    ];

    return (
        <section className="py-5 bg-white overflow-hidden">
            <div className="container">
                <motion.h2
                    className="text-center fw-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Frequently Asked Questions
                </motion.h2>

                <motion.div
                    className="accordion accordion-flush"
                    id="faqAccordion"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {faqs.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header">
                                <button
                                    className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#faq-${index}`}
                                >
                                    {item.question}
                                </button>
                            </h2>
                            <div
                                id={`faq-${index}`}
                                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body text-muted">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FAQs;
