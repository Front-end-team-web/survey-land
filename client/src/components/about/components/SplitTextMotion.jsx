import { motion } from "framer-motion";

const letterVariant = {

  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, 
      duration: 0.5,
    },
  }),
};

const blockVariant = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
    },
  },
};

function SplitTextMotion({ children }) {
  const isString = typeof children === "string";

  if (isString) {

    const words = children.split(" "); 

    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            <motion.span
              variants={letterVariant} 
              custom={i}
              className="inline-block" inline-block
            >
              {word}
            </motion.span>
            {i < words.length - 1 && "\u00A0"}{" "}
          </span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={blockVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
export default SplitTextMotion;
