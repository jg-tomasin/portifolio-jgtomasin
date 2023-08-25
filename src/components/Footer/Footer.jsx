import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
          Vamos fazer algo <br />
          incrível juntos
          </span>
          <span className="primaryText">
          Começar por <a href="mailto:jgtomasin@gmail.com">dizendo oi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Informação</span>
            <p>Montes Claros, MG - 39400-215</p>
          </div>
          <ul className={css.menu}>
            <li><a href="https://www.linkedin.com/in/joao-gabriel-tomasin-3a7477223/"> Linkedin</a></li>
            <li><a href="https://github.com/jg-tomasin">Github</a></li>
            <li><a href="https://www.instagram.com/jg_mendees/">Instagram</a></li>
            <li><a href="#experties">Quem é João Gabriel</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
