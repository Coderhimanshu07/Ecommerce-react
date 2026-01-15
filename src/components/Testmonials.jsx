import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Testimonials = () => {
    const reviews = [
        {
            name: "Rakesh Sharma",
            role: "Plant Manager, Manufacturing Unit",
            review:
                "Their mechanical design and fabrication quality is outstanding. Project was delivered on time with zero tolerance issues.",
        },
        {
            name: "Anil Verma",
            role: "Maintenance Head",
            review:
                "Preventive maintenance services improved our machine efficiency significantly. Highly skilled mechanical engineers.",
        },
        {
            name: "Suresh Patel",
            role: "Project Engineer",
            review:
                "From CAD design to final assembly, everything was precise. Excellent knowledge of industrial standards.",
        },
        {
            name: "Amit Khanna",
            role: "Operations Manager",
            review:
                "Excellent handling of heavy machinery installation. Safety standards and execution quality were top-notch.",
        },
        {
            name: "Vikas Mehta",
            role: "Production Supervisor",
            review:
                "After their maintenance support, our downtime reduced drastically. Very professional mechanical service team.",
        },
        {
            name: "Deepak Singh",
            role: "Quality Control Engineer",
            review:
                "Dimensional accuracy, welding quality, and material selection were perfectly aligned with industrial norms.",
        },
        {
            name: "Manoj Yadav",
            role: "Factory Owner",
            review:
                "Reliable partner for turnkey mechanical projects. Transparent communication and timely delivery.",
        },
        {
            name: "Prakash Nair",
            role: "Senior Mechanical Consultant",
            review:
                "Strong expertise in CAD/CAM, load calculations, and machine alignment. Highly recommended for industrial projects.",
        },
        {
            name: "Rahul Jain",
            role: "Automation Project Lead",
            review:
                "Mechanical integration with automation systems was seamless. Great coordination between teams.",
        },
    ];

    return (
        <section className="py-5 bg-light overflow-hidden">
            <div className="container">
                <motion.h1
                    className="text-center fw-bold mb-5"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    What Client Says
                </motion.h1>

                <motion.div
                    className="row g-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {reviews.map((item, index) => (
                        <motion.div
                            className="col-lg-4 col-md-6 col-sm-12"
                            key={index}
                            variants={cardVariants}
                        >
                            <motion.div
                                className="card h-100 shadow-sm border-0 text-center"
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <div className="card-body">
                                    <p className="card-text fst-italic text-muted">
                                        "{item.review}"
                                    </p>
                                    <h5 className="mt-4 mb-1 fw-semibold">
                                        {item.name}
                                    </h5>
                                    <small className="text-secondary">
                                        {item.role}
                                    </small>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;

